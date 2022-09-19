import Products from "../model/Products";
import BaseService from "../service/BaseService";
import BaseController from "../controller/BaseController";
import Validator from "../service/BaseValidator";
import { IProduct } from "../interface/IProducts";
import { productZodSchema } from "../interface/IProducts";

const modelProducts = new Products();
const validatorProduct = new Validator<IProduct>(productZodSchema);
const serviceProducts = new BaseService<IProduct>(modelProducts, validatorProduct);
export const controllerProducts = new BaseController<IProduct>(serviceProducts);