FROM node:gallium-alpine

ENV NODE_ENV=production

ENV PORT=8080

WORKDIR /usr/app

COPY ./package.json ./yarn.lock ./

RUN yarn

COPY . .

RUN yarn add --dev @babel/plugin-proposal-private-property-in-object

RUN yarn build

EXPOSE 8080

CMD ["yarn", "start"]