# Etapa 1: Build da aplicação
FROM node:lts-bullseye AS build

USER root

# Definir o diretório de trabalho dentro do container.
WORKDIR /app

# Instalando bun para gerenciamento de pagamentes.
RUN npm install -g bun

# Copiar os arquivos package.json e bun.lockb
COPY package.json ./
COPY bun.lockb ./

# Instalar as dependências
RUN bun install

# Copiar todos os arquivos para o container
COPY . .

# Executar o build do Next.js
RUN npm run build

# Etapa 2: Servir a aplicação
FROM node:lts-bullseye AS production

# Definir a variável de ambiente NODE_ENV como "production"
ENV NODE_ENV=production

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar apenas a pasta .next (build) e as dependências necessárias do estágio de build anterior
COPY --from=build /app/.next ./.next
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json

# Expor a porta onde o Next.js será executado
EXPOSE 3000

# Comando padrão para rodar a aplicação Next.js
CMD ["npm", "run", "start"]
