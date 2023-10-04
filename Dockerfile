FROM node:20-alpine
WORKDIR /app
COPY package*.json yarn.lock .env.example ./
RUN yarn install --production && yarn add -D @nestjs/cli
COPY . .
RUN yarn prisma migrate dev && yarn seed
RUN yarn build
RUN mv .env.example .env
EXPOSE $PORT
CMD ["yarn", "start:prod"]