import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="border border-sky-500 bg-sky-800 w-full max-w-xs m-4 p-2 rounded-md">
      <div className="text-lg font-semibold">{name}</div>
      <div className="text-white-600">Category: {category}</div>
      <div className="text-white-600">Quantity: {quantity}</div>
    </li>
  );
};

export default Item;