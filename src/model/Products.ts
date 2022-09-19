import { Schema, model } from "mongoose";
import { IProduct } from "../interface/IProducts";
import MongooseRepository from "./MongooseRepository";

const productSchema = new Schema<IProduct>({
  produto: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  descricao: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
});

class Products extends MongooseRepository<IProduct> {
  constructor() {
    super(model<IProduct>("Products", productSchema));
  }
}

export default Products;