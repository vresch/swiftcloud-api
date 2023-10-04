FROM node:20-alpine
WORKDIR /app
COPY package*.json yarn.lock .env.example ./
RUN yarn install --production
COPY /prisma ./prisma
COPY /graphql ./graphql
COPY /dist ./dist
RUN mv .env.example .env
RUN yarn prisma generate
EXPOSE $PORT
CMD ["yarn", "start:prod"]