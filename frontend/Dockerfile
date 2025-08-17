# Build Stage
FROM node:18 as build

WORKDIR /app

# Copy package.json first
COPY package*.json ./

# Install dependencies without scripts that hit backend
RUN npm install --ignore-scripts

# Copy rest of code
COPY . .

# Copy Docker env file
COPY .env.docker .env

# Build React app
RUN npm run build

# Production Stage - Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
