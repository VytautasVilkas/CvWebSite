# Use Node.js for building React app
FROM node:20 AS build
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Ensure all dependencies, including devDependencies, are installed
RUN npm install --legacy-peer-deps --include=dev

# Copy the rest of the app files
COPY . .

# Ensure Tailwind is properly installed
RUN npm install @tailwindcss/vite tailwindcss --legacy-peer-deps

# Build the React app
RUN npm run build

# Use Nginx to serve the built React app
FROM nginx:alpine
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy React build output to Nginx HTML directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config for this app
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 100
EXPOSE 100
CMD ["nginx", "-g", "daemon off;"]

