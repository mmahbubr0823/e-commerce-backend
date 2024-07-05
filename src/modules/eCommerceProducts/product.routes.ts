import express from 'express';
import { productController } from './product.controller';
import { productValidation } from './product.validation';
import validationRequest from '../../app/middleWares/validationRequest';

const router = express.Router();

// CRUDs for products 
// get products 
router.get('/', productController.getProducts);
// create products 
router.post('/', validationRequest(productValidation.createProductValidationSchema), productController.createProduct);
// get single product 
router.get('/:productId', productController.getSingleProduct);
// update product 
router.put('/:productId', validationRequest(productValidation.updateProductValidationSchema), productController.updateProduct);
// delete product 
router.delete('/:productId', productController.deleteProduct);




export const productRoutes = router;
