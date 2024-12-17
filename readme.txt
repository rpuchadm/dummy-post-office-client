npm create vite@latest dummy-post-office-client -- --template react-ts

  cd dummy-post-office-client
  npm install
  npm run dev

npm run build
docker build -t vite-nginx-app .
docker tag vite-nginx-app localhost:32000/dummy-post-office-vite-app:latest
docker push localhost:32000/dummy-post-office-vite-app:latest
microk8s kubectl rollout restart deploy dummy-post-office-vite-nginx-app -n dummy-post-office-namespace

-----------------
npm install react-bootstrap
npm install react-icons
npm install react-query ??????
npm install dayjs
npm install bootswatch
npm install bootstrap
npm install --save-dev prettier
npm install --save-dev sass

npm install react@18 react-dom@18
npm install --save-dev @types/react@18 @types/react-dom@18
npm install react-router-dom@6
----------

npm outdated