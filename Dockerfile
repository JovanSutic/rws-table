# ============================================
# DEVELOPMENT STAGE
# ============================================
FROM node:20-alpine AS development
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
EXPOSE 4173
CMD ["npm", "run", "dev"]

# ============================================
# BUILD STAGE
# ============================================
FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# ============================================
# PRODUCTION STAGE
# ============================================
FROM nginx:alpine AS production
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]