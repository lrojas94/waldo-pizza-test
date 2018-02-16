import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { PIZZA_SIZES, PIZZA_BY_SIZE_NAME } from '../constants/query.const';

const client = new ApolloClient({
    link: new HttpLink({ uri: 'https://core-graphql.dev.waldo.photos/pizza' }),
    cache: new InMemoryCache()
});

export const findAllSizes = () => {
    return client.query({
        query: PIZZA_SIZES,
    });
};

export const findBySizeName = (name) => {
    return client.query({
        query: PIZZA_BY_SIZE_NAME,
        variables: {
            name: name,
        },
    });
}