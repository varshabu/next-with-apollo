import { InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
  cache: new InMemoryCache(),
});

export default client;
