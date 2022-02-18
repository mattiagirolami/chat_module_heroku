
## Usage

#### Env variable:

Create a .env file in server directory and add the following:

```
PORT = 4000
JWT_SECRET = "Your JWT secret"

```

#### Client:

Open client/src/backendUrls.js & change the "backendUrls" object to:

```
{
  http: "http://localhost:4000",
  ws: "ws://localhost:4000/graphql"
}
```

Run client development server:

```
cd client
npm install
npm start
```

#### Server:

Open server/config/config.json & update the development keys' values to match your local PostgreSQL credentials.

Install 'sequelize-cli' & 'nodemon' as global packages, if you haven't yet.

Nodemon:

```
npm i nodemon
```

Per installare sequelize-cli bisogna installare prima Sequelize:

Sequelize:

```
npm install --save sequelize
```

Sequelize-cli:

```
npm install --save-dev sequelize-cli
```

First, you have to install Postgresql and create a database.

Run this command to migrate the SQL table to your own local PSQL:
`sequelize db:migrate`

Now you have to use the seeder:
`sequelize db:seed:all`

Run backend development server:

```
cd server
npm install
npm run dev
```
