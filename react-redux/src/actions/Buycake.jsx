// creating the action Types 
export let Buy_Cake="buycake"
export let Buy_Drink="buyDrink"

// actions

export function BuyCake(){
    return {
        type:Buy_Cake
    }
}

export function BuyDrink(){
    return {
        type:Buy_Drink
    }
}