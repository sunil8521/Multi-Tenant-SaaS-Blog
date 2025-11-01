# Use Node.js 18 (lightweight)
FROM node:18-slim

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install pnpm and dependencies
RUN npm install -g pnpm
RUN pnpm install --prod=false

# Copy the rest of the project
COPY . .

# Build TypeScript → JavaScript
RUN pnpm run generate
RUN pnpm run build

# Remove dev dependencies to keep image small
RUN pnpm prune --prod

# Expose the backend port
EXPOSE 5000

# Start the server
CMD ["pnpm", "start"]
