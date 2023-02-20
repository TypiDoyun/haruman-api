import { getDatabase } from "../utils/get-database";
import { DatabaseRequest } from "./database";

/**
 * @extends {DatabaseRequest}
 */

export class CreateRequest extends DatabaseRequest {

    constructor(collectionId, data) {
        super(collectionId);
        this.data = data;
    }

    async send() {
        const database = await getDatabase();
        const collection = database.collection(this.collectionId);
        await collection.insertOne(this.data);
    }
}