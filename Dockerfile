# Usa una imagen base con Node.js
FROM node:18-alpine AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package.json package-lock.json ./ 

# Instala las dependencias
RUN npm install

# Copia todo el código fuente
COPY . .

# Genera la build de Next.js
RUN npm run build

# Optimiza el tamaño de la imagen final
FROM node:18-alpine AS runner

# Define el directorio de trabajo
WORKDIR /app

# Copia solo los archivos necesarios desde el build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expone el puerto en el que Next.js corre por defecto
EXPOSE 3000

# Define la variable de entorno para producción
ENV NODE_ENV=production

# Comando de inicio
CMD ["npm", "run", "start"]
