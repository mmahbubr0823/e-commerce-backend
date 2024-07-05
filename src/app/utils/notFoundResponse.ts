import { Response } from "express";

const notFoundResponse = (res: Response) => {
    res.status(404).json({
        success: false,
        message:'Product does not exist!!.'
    })
}
export default notFoundResponse;