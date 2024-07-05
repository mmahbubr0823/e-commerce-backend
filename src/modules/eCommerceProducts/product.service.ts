import { TProduct } from "./product.interface";
import { Product } from "./product.model"

// create a product 
const createProduct = async (payload: TProduct) => {
    const result = await Product.create(payload);
    return result
}
// get a single products 
const getSingleProduct = async (id: string) => {
    const result = await Product.findById(id);
    return result
}
// update a single products 
const updateProduct = async (id: string, payload: TProduct) => {
    const result = await Product.findOneAndUpdate({ _id: id }, payload, { new: true });
    return result
}
// delete a product 
const deleteProduct = async (id: string) => {
    const result = await Product.findOneAndDelete({ _id: id });
    return result
}
// get products  
const getProducts = async (query: any) => {
    // / get all products 
    if (!query) {
        const result = await Product.find();
        return result;
    }
    // get products by query 
    const result = await Product.find({ name: { $regex: `^${query}`, $options: 'i' } });
    return result
}

export const productServices = {
    createProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    getProducts
};