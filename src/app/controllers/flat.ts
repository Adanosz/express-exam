import { Flat } from "../models/flat";
import { database } from "../../lib/database" 
import { Request, Response } from "express";
import * as flatSerializer from '../serializers/flat'

 
export const index =  async (req: Request, res: Response) => {
  const flats: Array<Flat> = await database('flats').select();
  res.json(flatSerializer.index(flats));
};
 
export const show = async (req: Request, res: Response) => {
  try {
    const flat: Flat = await database('flats').select().where({ id: req.params.id }).first();
    if (flat) {
      res.json(flatSerializer.show(flat));
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const flat: Flat = {
      title: req.body.title,
      price: req.body.price,
      floorArea: req.body.floorArea,
      country: req.body.country,
      zip: req.body.zip,
      city: req.body.city,
      street: req.body.street,
    }
    await database('flats').insert(flat);
    res.sendStatus(201);
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const flat: Flat = await database('flats').select().where({ id: req.params.id }).first();
    if (flat) {
      const updFlat: Flat = {
        title: req.body.title,
        price: req.body.price,
        floorArea: req.body.floorArea,
        country: req.body.country,
        zip: req.body.zip,
        city: req.body.city,
        street: req.body.street,
      }
      await database('flats').update(updFlat).where({ id: req.params.id });
      res.sendStatus(200);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const destroy = async (req: Request, res: Response) => {
  try {
    const flat: Flat = await database('flats').select().where({ id: req.params.id }).first();
    if (flat) {
      await database('flats').delete().where({ id: req.params.id });
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  } catch(error) {
    console.error(error);
    res.sendStatus(500);
  }
};