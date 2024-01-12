import React, { useState } from 'react';
import Ingredient from './Ingredient';
import BurgerIngredient from './BurgerIngredient';
import meatImage from "../assets/meat.png";
import cheeseImage from "../assets/cheese.png";
import saladImage from "../assets/salad.png";
import baconImage from "../assets/bacon.png";

interface Ingredient {
    name: string;
    price: number;
    image: string;
}

export const INGREDIENTS: Ingredient[] = [
    { name: 'Meat', price: 80, image: meatImage },
    { name: 'Cheese', price: 50, image: cheeseImage },
    { name: 'Salad', price: 10, image: saladImage },
    { name: 'Bacon', price: 60, image: baconImage }
];

const BurgerBuilder: React.FC = () => {
    const [ingredients, setIngredients] = useState<Record<string, number>>({});

    const calculateTotalPrice = (): number => {
        let totalPrice = 30;

        for (const [ingredient, count] of Object.entries(ingredients)) {
            const selectedIngredient = INGREDIENTS.find((item) => item.name === ingredient);
            if (selectedIngredient) {
                totalPrice += selectedIngredient.price * count;
            }
        }

        return totalPrice;
    };

    return (
        <div>
            <div className="Burger">
                <div className="BreadTop"></div>
                {Object.entries(ingredients).map(([ingredient, count]) => (
                    <React.Fragment key={ingredient}>
                        {[...Array(count)].map((_, index) => (
                            <BurgerIngredient key={`${ingredient}-${index}`} type={ingredient}/>
                        ))}
                    </React.Fragment>
                ))}
                <div className="BreadBottom"></div>
            </div>

            <p>Total Price: {calculateTotalPrice()} сом</p>

            <div className="info">
                {INGREDIENTS.map((ingredient) => (
                    <div className="card">
                        <p key={ingredient.name}>
                            {ingredient.name}
                            <img src={ingredient.image} alt={ingredient.name}/>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BurgerBuilder;
