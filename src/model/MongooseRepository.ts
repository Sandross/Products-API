import { IProduct } from './../interface/IProducts';
import { Model } from "mongoose";
import Products from './Products';

export default abstract class MongooseRepository<T> {
  protected model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: T): Promise<T> {
    const created = await this.model.create(data);
    return created;
  }

  async update(id: string, data: Partial<T>): Promise<T|null> {
    const updated = await this.model.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updated;
  }

  async delete(id: string): Promise<T|null> {
    const deleted = await this.model.findByIdAndDelete(id);
    return deleted;
  }

  async findById(id: string): Promise<T|null> {
    const found = await this.model.findById(id);
    return found;
  }

  async findAll(): Promise<T[]> {
    const found = await this.model.find();
    return found;
  }
  async findByQuery(query: any): Promise<T[]> {
    const found = await this.model.find(query).collation({ locale: "en", strength: 2 });
    return found;
  }
}