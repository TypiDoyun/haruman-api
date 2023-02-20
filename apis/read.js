import { ReadRequest } from "../requests/read";

/**
 * Read API
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 * @param {import("express").NextFunction} next 
 */

export const readAPI = async (req, res, next) => {
    const { body } = req;

    if (body.collectionId === undefined) return res.end();
    if (body.condition === undefined) return res.end();

    const request = new ReadRequest(body.collectionId, body.condition);
    const result = await request.send();

    res.send(result);

    return res.end();
}