import gql from 'graphql-tag';

export const PIZZA_SIZES = gql`
    query pizzaSizes {
        pizzaSizes {
            name,
            basePrice,
        }
    }
`;

export const PIZZA_BY_SIZE_NAME = gql`
    query pizzaSizeByName($name: PizzaSizes) {
        pizzaSizeByName(name: $name) {
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