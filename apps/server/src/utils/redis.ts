// redisClient.ts
import {Redis} from "ioredis";

const MAX_RETRIES = 2;
let retryCount = 0;

export const createRedisConnection = async () => {

  return new Promise<Redis>((resolve, reject) => {

    const redis = new Redis({
      host: "127.0.0.1",
      port: 6379,
      // password: "yourpassword", // uncomment if you use one
      retryStrategy: () => null, // disable built-in retry (we handle it manually)
    });

    redis.on("connect", () => {
      console.log("✅ Redis connected successfully");
      retryCount = 0;
      resolve(redis);
    });

    redis.on("error", async (err) => {
      console.error(`❌ Redis connection error: ${err.message}`);
      redis.disconnect();

      if (retryCount < MAX_RETRIES) {
        retryCount++;
        console.log(`🔁 Retrying to connect to Redis... (attempt ${retryCount})`);
        setTimeout(async () => {
          try {
            const newRedis = await createRedisConnection();
            resolve(newRedis);
          } catch (e) {
            reject(e);
          }
        }, 2000); // wait 2s before retry
      } else {
        console.error("🚨 Max Redis connection attempts reached. Exiting...");
        process.exit(1);
      }
    });
  });
};

