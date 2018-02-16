/**
 * Sums up the toppings and basePrice of a pizza item.
 * To do this, we must pass the sizeDetails (gotten from the PIZZA_BY_NAME query), and
 * the selected toppings. 
 */
export const calculateTotalPriceOfPizzaItem = ({ sizeDetails, selectedToppings }) => {
    let total = sizeDetails.basePrice;
    sizeDetails.toppings.forEach(toppingItem => {
        const { topping } = toppingItem;
        if (selectedToppings[topping.name]) {
            total += topping.price;
        }
    });

    return total;
};