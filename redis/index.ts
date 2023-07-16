import { Redis } from "@upstash/redis";

console.log(`process.env.REDIS_TOKEN: ${process.env.UPSTASH_REDIS_REST_TOKEN}`);
export const redis = Redis.fromEnv();

// export const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL!,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN!,
// });
