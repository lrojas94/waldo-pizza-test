import gql from 'graphql-tag';

export const PIZZA_SIZES = gql`
    {
        pizzaSizes {
            name,
            basePrice,
        }
    }
`;

export const PIZZA_BY_SIZE_NAME = gql`
    {
        pizzaSizeByName(name: "small") {
            name
            basePrice,
            maxToppings,
            toppings {
                defaultSelected,
                topping {
                    name,
                    price,
                },
            }
        }
    }
`;