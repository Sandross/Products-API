import { Router } from 'express'
import { controllerProducts } from '../factory'

const productRoutes = Router();

productRoutes.get('/', controllerProducts.findAll);
productRoutes.get('/find', controllerProducts.findByQuery);
productRoutes.get('/:id', controllerProducts.findById);
productRoutes.post('/', controllerProducts.create);
productRoutes.put('/:id', controllerProducts.update);
productRoutes.patch('/:id', controllerProducts.update);
productRoutes.delete('/:id', controllerProducts.delete);

export default productRoutes