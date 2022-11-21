FROM node:latest AS development

WORKDIR /opt/app

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

RUN npm run generate

FROM node:latest as production

WORKDIR /opt/app

COPY package*.json ./

RUN npm install --only=production

COPY --from=development /opt/app/dist ./dist

CMD ["npm", "run", "start"]