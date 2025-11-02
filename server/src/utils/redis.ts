// // redisClient.ts
// import { Redis } from "ioredis";

// const MAX_RETRIES = 2;
// let retryCount = 0;
// let redisInstance: Redis | null = null;

// export const createRedisConnection = async (): Promise<Redis> => {
//   if (redisInstance) return redisInstance; // ✅ reuse existing connection

//   return new Promise<Redis>((resolve, reject) => {
//     const redis = new Redis({
//       host: "127.0.0.1",
//       port: 6379,
//       retryStrategy: () => null,
//       maxRetriesPerRequest: null,
//     });

//     redis.on("connect", () => {
//       console.log("✅ Redis connected successfully");
//       retryCount = 0;
//       redisInstance = redis;
//       resolve(redis);
//     });

//     redis.on("error", async (err) => {
//       console.error(`❌ Redis connection error: ${err.message}`);
//       redis.disconnect();

//       if (retryCount < MAX_RETRIES) {
//         retryCount++;
//         console.log(`🔁 Retrying to connect to Redis... (attempt ${retryCount})`);
//         setTimeout(async () => {
//           try {
//             const newRedis = await createRedisConnection();
//             resolve(newRedis);
//           } catch (e) {
//             reject(e);
//           }
//         }, 2000);
//       } else {
//         console.error("🚨 Max Redis connection attempts reached. Exiting...");
//         process.exit(1);
//       }
//     });
//   });
// };
