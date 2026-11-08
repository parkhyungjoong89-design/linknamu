import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB ?? "linknamu";

// 개발 중 핫 리로드마다 연결이 새로 생기지 않도록 전역에 보관합니다.
const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

/** MONGODB_URI가 없으면 null을 돌려줍니다. */
export function getDb() {
  if (!uri) return null;
  globalForMongo._mongoClientPromise ??= new MongoClient(uri).connect();
  return globalForMongo._mongoClientPromise.then((client) => client.db(dbName));
}
