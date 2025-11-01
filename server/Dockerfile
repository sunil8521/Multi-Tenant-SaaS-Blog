ARG DATABASE_URL="postgresql://fake:fake@localhost:5432/fake"

FROM node:18-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .

ENV DATABASE_URL=$DATABASE_URL
RUN pnpm generate
RUN pnpm build


FROM node:18-alpine
WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod --frozen-lockfile

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/index.js"]
