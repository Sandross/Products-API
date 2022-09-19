import { Request, Response, NextFunction } from 'express';

const ControllerWrapper = (func: (req: Request, res: Response) => Promise<Response>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await func(req, res);
    } catch (error) {
      next(error);
    }
  };

export default ControllerWrapper;