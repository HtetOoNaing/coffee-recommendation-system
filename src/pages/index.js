import { useState } from 'react';
import Layout from '../components/Layout';
import FilterSidebar from '../components/FilterSidebar';
import CoffeeCard from '../components/CoffeeCard';

export default function Home() {
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommend = async (filters) => {
    try {
      const response = await fetch('/api/recommendations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(filters),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch recommendations');
      }

      const data = await response.json();
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <Layout>
      <div className="flex">
        <FilterSidebar onRecommend={handleRecommend} />
        <div className="flex-grow px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recommendations.map((coffee) => (
              <CoffeeCard
                key={coffee.name}
                brand={coffee.brand}
                name={coffee.name}
                price={coffee.price}
                thumbnail={coffee.thumbnail}
                gram={coffee.gram}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
