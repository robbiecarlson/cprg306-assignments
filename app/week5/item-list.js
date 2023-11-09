"use client";

import React from "react";
import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

const ItemList = () => {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = itemsData.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      <div>
        <button onClick={() => setSortBy('name')} style={{ backgroundColor: sortBy === 'name' ? 'green' : 'grey' }}>
          Sort by Name
        </button>
        <button onClick={() => setSortBy('category')} style={{ backgroundColor: sortBy === 'category' ? 'green' : 'grey' }}>
          Sort by Category
        </button>
      </div>
      <ul>
        {sortedItems.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
};
export default ItemList;