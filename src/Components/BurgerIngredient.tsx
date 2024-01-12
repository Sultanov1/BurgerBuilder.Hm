import React from 'react';

interface BurgerIngredientProps {
    type: string;
}

const BurgerIngredient: React.FC<BurgerIngredientProps> = ({ type }) => {
    return <div className={type}></div>;
};

export default BurgerIngredient;