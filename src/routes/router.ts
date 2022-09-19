import { Router } from 'express';
import productRoutes from './product.routes';

const Routes = Router();

Routes.use('/products', productRoutes);

export default Routes;