FROM node

RUN mkdir -p /home/app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/src/index.js"]