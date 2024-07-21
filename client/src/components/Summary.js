// import React, { useEffect, useState } from 'react';
// import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
// import axios from 'axios';

// const Summary = () => {
//   const [summary, setSummary] = useState({ total: 0, byCategory: [] });
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

//   useEffect(() => {
//     const fetchSummary = async () => {
//       try {
//         const res = await axios.get('http://localhost:5000/api/expenses/summary', { withCredentials: true });
//         setSummary(res.data);
//       } catch (err) {
//         console.error('API Error:', err);
//         setError('Error loading summary');
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchSummary();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>{error}</div>;
//   }

//   return (
//     <PieChart width={400} height={400}>
//       <Pie
//         data={summary.byCategory}
//         dataKey="value"
//         nameKey="name"
//         outerRadius={150}
//         fill="#8884d8"
//       >
//         {summary.byCategory.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//       <Tooltip />
//       <Legend />
//     </PieChart>
//   );
// };

// export default Summary;


// components/Summary.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Summary = () => {
  const [summary, setSummary] = useState({ total: 0, byCategory: [] });

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/expenses/summary', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => {
        setSummary(response.data);
      })
      .catch(error => {
        console.error('API Error:', error);
      });
  }, []);

  return (
    <div>
      <h1>Expense Summary</h1>
      <p>Total: {summary.total}</p>
      <ul>
        {summary.byCategory.map(category => (
          <li key={category._id}>{category._id}: {category.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Summary;
