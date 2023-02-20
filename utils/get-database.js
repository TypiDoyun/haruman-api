import { Db, MongoClient } from "mongodb";
import { config } from "dotenv";

config();

const databaseName = "haruman";
const url = `mongodb://${process.env.DBS_HOST}:${process.env.DBS_PORT}`;
const _ = (() => {
    /** @type {Db} */
    let database;

    return {
        async getDatabase() {
            if (!database) {
                const client = new MongoClient(url);
                await client.connect();
                console.log("Connected to MongoDB server");
                database = client.db(databaseName);
            }
            return database;
        }
    }
})();

/**
 * 이 함수는 비동기적으로 작동할 수 있습니다.
 */
export const getDatabase = _.getDatabase;