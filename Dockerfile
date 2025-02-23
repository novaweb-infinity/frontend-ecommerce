# Etapa 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Copia solo los archivos de dependencias para aprovechar la cache de Docker
COPY package.json package-lock.json ./
RUN npm install

# Copia el resto del código y compila la app
COPY . .
RUN npm run build

# Etapa 2: Producción (más ligera)
FROM node:18-alpine AS runner
WORKDIR /app

# Copia archivos esenciales desde la fase de build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expone el puerto
EXPOSE 3000
ENV NODE_ENV=production

# Inicia la aplicación
CMD ["npm", "run", "start"]
