FROM node:24-alpine

# COPY local docker 
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY index.js index.js


RUN npm install

CMD ["node", "index.js"]