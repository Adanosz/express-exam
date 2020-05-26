import * as express from 'express';
import { Application } from 'express';
import * as createMiddleware from 'swagger-express-middleware';
import { SwaggerMiddleware } from 'swagger-express-middleware';
import * as swaggerUi from 'swagger-ui-express';
import { router } from './app/routers';
import * as swaggerDocument from '../config/swagger.json';

const app: Application = express();
app.use(express.json());

createMiddleware('config/swagger.json', app, (err, middleware: SwaggerMiddleware) => {
  if (err) {
    console.error(err);
  }

  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use(
    middleware.metadata(),
    middleware.CORS(),
    middleware.parseRequest(),
    middleware.validateRequest()
  );
  const { PORT = 3000 } = process.env;

  app.use(router);

  app.listen(PORT, () => {
    console.log(`server started at http://localhost:${PORT}`);
  });
});
