# Build Stage
FROM node:18 as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build React app
RUN npm run build

# Production Stage (serve frontend using Nginx)
FROM nginx:alpine

# Copy build files to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx
CMD ["nginx", "-g", "daemon off;"]
