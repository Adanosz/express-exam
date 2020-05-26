import { Flat } from "../models/flat";

export interface FlatSerializer {
  title: string;
  price: number;
  floorArea: number;
  address: string;
}

export const show = (flat: Flat): FlatSerializer => {
  return {
    title: flat.title,
    price: flat.price,
    floorArea: flat.floorArea,
    address: `${flat.country}, ${flat.zip} ${flat.city} ${flat.street}`
  }
};

export const index = (flats: Array<Flat>): Array<FlatSerializer> => {
  return flats.map((flat: Flat) => show(flat));
}