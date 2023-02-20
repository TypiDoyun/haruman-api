import { getDatabase } from "../utils/get-database";
import { DatabaseRequest } from "./database";

/**
 * @extends {DatabaseRequest}
 */

export class ReadRequest extends DatabaseRequest {

    constructor(collectionId, condition) {
        super(collectionId);
        this.condition = condition;
    }

    async send() {
        const database = await getDatabase();
        const collection = database.collection(this.collectionId);
        return await collection.find(this.data).toArray();
    }
}