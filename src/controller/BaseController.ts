import Service from "../service/BaseService";
import { Request, Response } from "express";
import ControllerWrapper from "../utils/ControllerWrapper";
import Validator from "../service/BaseValidator";

export default class BaseController<T> {
    private baseService: Service<T>
    constructor(useCase: Service<T>){
        this.baseService = useCase
    }
    public create = ControllerWrapper(async(req: Request, res: Response) => {
      const { body } = req;
      const product = await this.baseService.create(body)
      return res.status(201).json(product)
    })

    public update = ControllerWrapper(async(req: Request, res: Response) => {
        const { body } = req;
        const { id } = req.params 
        const product = await this.baseService.update(id, body)
        return res.status(201).json(product)
    })

    public delete = ControllerWrapper(async(req: Request, res: Response) => {
        const { id } = req.params 
        const product = await this.baseService.delete(id)
        return res.status(201).json(product)
    })
/** Find All @params object @returns Json*/
    public findAll = ControllerWrapper(async(req: Request, res: Response) => {
        const products = await this.baseService.findAll()
        return res.status(201).json(products)
    })

    public findById = ControllerWrapper(async(req: Request, res: Response) => {
        const { id } = req.params 
        const product = await this.baseService.findById(id)
        return res.status(201).json(product)
    })
    public findByQuery = ControllerWrapper(async(req: Request, res: Response) => {
        const { query } = req; 
        const product = await this.baseService.findByQuery(query)
        return res.status(201).json(product)
    })
}