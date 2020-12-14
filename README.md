# swr-graphql

## The Idea behind the Example

This is a sample app demonstrating usage of `useSWR`, `mutate` and `trigger` of `SWR` library with a Hasura GraphQL API. The app uses native websockets for implementing GraphQL subscriptions on the client.

- Hasura GraphQL APIs for instant GraphQL backend.
- Integrate simple GraphQL queries.
- Optimistic UI with GraphQL mutations.
- GraphQL Subscriptions using native websockets.

## Deploy Hasura to get a GraphQL API

1. Click on the following button to deploy GraphQL engine on Hasura Cloud including Postgres add-on or using an existing Postgres database:

    [![Deploy to Hasura Cloud](https://graphql-engine-cdn.hasura.io/img/deploy_to_hasura.png)](https://cloud.hasura.io/)

2. Open the Hasura console

   Click on the button "Launch console" to open the Hasura console.

3. Create table users

    Head to the `Data` tab and create a new table called `users` with columns: 
    id (text), name (text), created_at (timestamp now()).

4. Try out a GraphQL Query

    ```graphql
    query {
        users {
            id
            name
            created_at
        }
    }
    ```

## One-Click Deploy

Deploy your own SWR project with ZEIT Now.

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/praveenweb/swr-graphql/tree/master)

## How to Use

Install it and run:

```bash
yarn
yarn dev
# or
npm install
npm run dev
```

Deploy it to the cloud with [now](https://zeit.co/home) ([download](https://zeit.co/download))

```
now
```