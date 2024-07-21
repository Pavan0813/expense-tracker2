// src/components/ManageCategories.js
import React, { useState, useEffect } from 'react';
import api from '../api';

const ManageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get('/categories');
        setCategories(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    try {
      const res = await api.post('/categories', { name: newCategory });
      setCategories([...categories, res.data]);
      setNewCategory('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} />
      <button onClick={handleAddCategory}>Add Category</button>
      <ul>
        {categories.map(category => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ManageCategories;
