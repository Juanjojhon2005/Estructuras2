import { useState } from 'react';

const Challenge = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleAddCategory = () => {
    if (category.trim() !== '') {
      setCategories([...categories, category]);
      setCategory('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
        placeholder="Enter category"
      />
      <button onClick={handleAddCategory}>Añadir Esta Categoria</button>
      <ul>
        {categories.map((cat, index) => (
          <li key={index}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Challenge;