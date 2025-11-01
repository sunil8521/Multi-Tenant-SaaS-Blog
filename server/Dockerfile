# ---- Base Node image for building ----
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files first (better caching)
COPY package.json pnpm-lock.yaml ./

# Install ALL dependencies (dev + prod)
RUN pnpm install

# Copy source
COPY . .

# Generate Prisma client & build TS
RUN pnpm generate
RUN pnpm build


# ---- Production Stage ----
FROM node:18-alpine

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install ONLY production deps
RUN pnpm install --prod --frozen-lockfile

# Copy built output & prisma client from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/node_modules/@prisma ./node_modules/@prisma

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/index.js"]
