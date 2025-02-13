# Base stage to install dependencies
FROM node:14 AS base

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Development stage
FROM base AS development
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production stage
FROM base AS production
RUN npm run build
FROM nginx:alpine
COPY --from=production /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
