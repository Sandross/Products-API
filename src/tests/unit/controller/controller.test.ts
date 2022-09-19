import chai, { expect } from 'chai';
import * as sinon from 'sinon';
import { Request, Response, NextFunction } from 'express';
import Service from '../../../service/BaseService';
import chaiAsPromised from 'chai-as-promised';
import { controllerProducts } from '../../../factory';


const products = controllerProducts;

chai.use(chaiAsPromised);


describe ("Controller", () => {
    const req = { params: { id: '' } } as unknown as Request;
    const res = { statusCode: 0, send: {} } as Response;
    res.status = sinon.fake((code: number) => { res.statusCode = code; return res });
    res.json = sinon.fake((response: any) => { res.send = response; return res });    
    const next = function() {} as NextFunction;
    const spy = sinon.spy();

  it("test if controller exists", async () => {
    expect(products).to.exist;
  });

  it("test if controller has a create method", async () => {
    expect(products.create).to.exist;
  });

    it("test if controller has a update method", async () => {
        expect(products.update).to.exist;
    });

    it("test if controller has a delete method", async () => {
        expect(products.delete).to.exist;
    });

    it("test if controller has a findAll method", async () => {
        expect(products.findAll).to.exist;
    });

    it("test if controller has a findById method", async () => {
        expect(products.findById).to.exist;
    });

    it("test if controller has a findByQuery method", async () => {
        expect(products.findByQuery).to.exist;
    });

    it("test if controller create method works", async () => {
       sinon.stub(Service.prototype, 'create').returns(Promise.resolve({a: 1}));
    //    return expect(products.create(req, res, next)).to.eventually.be.rejected;
    return expect(products.create(req, res, next)).to.eventually.be.deep.equal({...res, statusCode: 201, send: { a: 1} })
    });

    it("test if controller update method works", async () => {
        sinon.stub(Service.prototype, 'update').returns(Promise.resolve({a: 1}));
        return expect(products.update(req, res, next)).to.eventually.be.deep.equal({...res, statusCode: 201, send: { a: 1} })
    });

    it("test if controller delete method works", async () => {
        sinon.stub(Service.prototype, 'delete').returns(Promise.resolve({a: 1}));
        return expect(products.delete(req, res, next)).to.eventually.be.deep.equal({...res, statusCode: 201, send: { a: 1} })
    });
});