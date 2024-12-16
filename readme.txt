npm create vite@latest dummy-post-office-client -- --template react-ts

  cd dummy-post-office-client
  npm install
  npm run dev

npm run build
docker build -t vite-nginx-app .
docker tag vite-nginx-app localhost:32000/dummy-post-office-vite-app:latest
docker push localhost:32000/dummy-post-office-vite-app:latest


-----------------
npm install react-bootstrap
npm install react-icons
npm install react-query ??????
npm install dayjs
npm install bootswatch
npm install bootstrap
npm install prettier --save-dev

npm install react-router-dom@6
