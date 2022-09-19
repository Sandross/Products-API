import { IProduct } from '../interface/IProducts';
import { SomeZodObject } from 'zod';
import CustomError from '../error/CustomError';
import { updateZodSchema } from '../interface/IProducts';
import { Request, Response, NextFunction } from 'express';

export default class Validator<T> {
  constructor(private schema: SomeZodObject) {}
  public create = (data: T) => {
    try {
      this.schema.parse(data);
    } catch (error) {
      throw new CustomError("Invalid data", 400);
    }
  };
  public update = (data: Partial<T>) => {
    try {
      updateZodSchema.parse(data);
    } catch (error) {
      throw new CustomError("Invalid data", 400);
    }
  };
  public delete = (id: string) => {
    if(!id) throw new CustomError("Invalid data", 400);
  };
}