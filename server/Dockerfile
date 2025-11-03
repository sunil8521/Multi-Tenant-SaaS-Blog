
FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .


ENV DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
RUN pnpm generate
RUN pnpm build


FROM node:20-alpine
WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

COPY --from=builder /app/dist ./dist
# COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/prisma ./prisma  


ENV NODE_ENV=PRODUCTION
EXPOSE 3000

CMD ["/bin/sh", "-c", "pnpm prisma migrate deploy && node dist/index.js"]
