# Modulo chat

Real-time chat app made with PERN stack + GraphQL

## Built using

#### Front-end

- [ReactJS](https://reactjs.org/) - Frontend framework
- [Apollo Client](https://www.apollographql.com/docs/react/) - State management library to manage both local and remote data with GraphQL
- [Apollo Subscriptions](https://www.apollographql.com/docs/react/data/subscriptions/) - Get real-time updates from your GraphQL server
- [Context API w/ hooks](https://reactjs.org/docs/context.html) - For state of user, selected chat, toast notifs, theme etc.
- [React Router](https://reactrouter.com/) - For general routing & navigation
- [React Hook Form](https://react-hook-form.com/) - For flexible forms
- [Material-UI w/ lots of CSS customisations](https://material-ui.com/) - UI library
- [Yup](https://github.com/jquense/yup) - For form validation
- [date-fns](https://date-fns.org/) - For manipulating & formatting of dates

#### Back-end

- [Node.js](https://nodejs.org/en/) - Runtime environment for JS
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/) - To build a self-documenting GraphQL API server
- [Apollo Subscriptions](https://www.apollographql.com/docs/apollo-server/data/subscriptions/) - Subscriptions are GraphQL operations that watch events emitted from Apollo Server.
- [PostgreSQL](https://www.postgresql.org/) - Opens-source SQL database to store data
- [Sequelize](https://sequelize.org/) - NodeJS ORM for SQL-based databases
- [JSON Web Token](https://jwt.io/) - A standard to secure/authenticate HTTP requests
- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs) - For hashing passwords
- [Dotenv](https://www.npmjs.com/package/dotenv) - To load environment variables from a .env file

## Features

- Authentication (login/register w/ username & password)
- Real-time chat using web-sockets
- Private messaging with all registered users
- Global channel for all-users-at-one-place chat
- Creation of groups with users of choice
- Users can leave from group after getting added
- Group creator can add/remove members from group
- Group creator can delete the group, & its messages along with it
- Group creator can rename the said group's name
- Error management with descriptive messages
- Toast notifications for actions: creating groups, removing users etc.
- Loading spinners for relevant fetching processes
- Formatted dates for adding/updating questions/answers/comments
- Dark mode toggle w/ local storage save
- Proper responsive UI for all screens

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
