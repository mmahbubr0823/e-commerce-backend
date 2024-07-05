import {  Request, Response } from "express";

const notFoundApi = (req:Request, res:Response)=>{
return res.status(404).json({
    success: false,
    message: 'Ooops!! This is a wrong path!',
})
}

export default notFoundApi;