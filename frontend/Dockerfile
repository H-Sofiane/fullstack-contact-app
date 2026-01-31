FROM node:18 AS build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18

WORKDIR /app
COPY --from=build /app/dist/frontend /app/dist

RUN npm install -g http-server

EXPOSE 80

CMD ["http-server", "dist/browser", "-p", "80", "-c-1"]
