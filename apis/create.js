import { CreateRequest } from "../requests/create";

/**
 * Create API
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */

export const createAPI = async (req, res, next) => {
    const { body } = req;

    if (body.collectionId === undefined) return res.end();
    if (body.data === undefined) return res.end();

    const request = new CreateRequest(body.collectionId, body.data);
    await request.send();

    return res.end();
}