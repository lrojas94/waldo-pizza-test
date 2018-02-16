export const PIZZA_SIZES = `
{
    pizzaSizes: {
        name,
        basePrice,
    }
}`;

export const PIZZA_BY_SIZE_NAME = `
{
    pizzaSizeByName(name="small") {
        name
        basePrice,
        maxToppings,
        toppings {
    	    defaultSelected,
            topping{
                name,
                price,
            },
  	    }
  }
}`;