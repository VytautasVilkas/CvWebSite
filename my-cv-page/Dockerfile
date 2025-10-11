# --- Build stage ---
FROM node:20 AS build
WORKDIR /app

# Copy only manifests first for caching
COPY package.json package-lock.json ./

# Install app deps (incl. dev) and force-resolve peers
# (legacy-peer-deps prevents the React 19 vs typewriter-effect conflict)
RUN npm install --legacy-peer-deps

# Force-install Tailwind deps inside the image (no repo change)
RUN npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite --legacy-peer-deps --no-save

# Now copy the source and build
COPY . .
# Optional sanity check: make sure plugin resolves
RUN node -e "require.resolve('@tailwindcss/vite')"
RUN npm run build

# --- Runtime stage ---
FROM nginx:1.27-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=build /app/dist ./
# Minimal SPA nginx (this is *container* nginx, not your host reverse proxy)
RUN printf 'server { listen 80; root /usr/share/nginx/html; index index.html; try_files $uri /index.html; }' \
  > /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
