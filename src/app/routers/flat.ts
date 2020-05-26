import { Router } from 'express'
import * as flatController from '../controllers/flat';

export const router: Router = Router( {mergeParams: true});

router.get('/', flatController.index);
router.get('/:id', flatController.show);
router.get('/', flatController.create);
router.get('/:id', flatController.update);
router.get('/:id', flatController.destroy);