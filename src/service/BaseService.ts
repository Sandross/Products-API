import MongooseRepository from "../model/MongooseRepository";
import Validator from "../service/BaseValidator";

export default class BaseService<T> {
  private repository: MongooseRepository<T>
  private validator: Validator<T>
    constructor(repository:MongooseRepository<T>, validator:Validator<T>){
        this.repository = repository
        this.validator = validator
    }
  public async create(data:T):Promise<T> {
   this.validator.create(data)
   return this.repository.create(data)
  }
  public async update(id: string, data: Partial<T>) {
    this.validator.update(data)
    return this.repository.update(id, data);
  }
  public async delete(id: string) {
    this.validator.delete(id)
    return this.repository.delete(id);
  }
  public async findAll() {
    return this.repository.findAll();
  }
  public async findById(id: string) {
    return this.repository.findById(id);
  }
  public async findByQuery(query: any) {
    return this.repository.findByQuery(query);
  }
}