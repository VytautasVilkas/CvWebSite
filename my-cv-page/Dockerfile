# --- Build stage: force-install tailwind deps inside image ---
FROM node:20 AS build
WORKDIR /app

# Copy manifests first for better caching
COPY package.json package-lock.json ./

# Install regular deps AND devDeps
ENV NPM_CONFIG_PRODUCTION=false
RUN npm ci --legacy-peer-deps

# 🔧 Force-install Tailwind + Vite plugin + PostCSS deps (even if not in package.json)
RUN npm i -D tailwindcss postcss autoprefixer @tailwindcss/vite

# Bring in the rest of the app
COPY . .

# Optional: fail early if plugin is missing (sanity check)
RUN node -e "require.resolve('@tailwindcss/vite')"

# Build
RUN npm run build

# --- Runtime stage: static files only ---
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*

# Copy built assets
COPY --from=build /app/dist /usr/share/nginx/html

# Tiny SPA server config (inside the container, not your host nginx)
RUN printf 'server { listen 80; root /usr/share/nginx/html; index index.html; try_files $uri /index.html; }' \
  > /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx","-g","daemon off;"]

