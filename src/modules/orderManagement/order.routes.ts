import express from 'express';
import { orderController } from './order.controller';
import validationRequest from '../../app/middleWares/validationRequest';
import { orderValidation } from './order.validation';

const router = express.Router();

// CRUDs for orders 
// creating order 
router.post('/', validationRequest(orderValidation.createOrderValidationSchema), orderController.createOrder);
// get orders 
router.get('/', orderController.getOrders);



export const orderRoutes = router;


