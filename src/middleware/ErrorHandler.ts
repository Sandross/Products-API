import { ErrorRequestHandler, Response, Request, NextFunction } from 'express';

const ErrorHandler
: ErrorRequestHandler = (err, _req: Request, res: Response, _next: NextFunction): Response => res
  .status(err.status).json({ message: err.message });

export default ErrorHandler;