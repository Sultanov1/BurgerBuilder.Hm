import React from 'react';

interface IngredientProps {
    name: string;
    image: string;
    onAdd: () => void;
}

const Ingredient: React.FC<IngredientProps> = ({ name, image, onAdd }) => {
    return (
        <div>
            <img src={image} alt={name} />
            <button onClick={onAdd}>{name}</button>
        </div>
    );
};

export default Ingredient;