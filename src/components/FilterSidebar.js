import { useState } from 'react';

const FilterSidebar = ({ onRecommend }) => {
  const [filters, setFilters] = useState({
    roast: [],
    fragrance: [],
    groundtype: [],
    aroma: [],
    flavor: [],
    price: { min: 0, max: 50000 },
  });

  const handleCheckboxChange = (e, category) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: checked
        ? [...prevFilters[category], name]
        : prevFilters[category].filter((item) => item !== name),
    }));
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      price: { ...prevFilters.price, [name]: Number(value) },
    }));
  };

  const handleRecommendClick = () => {
    onRecommend(filters);
  };

  return (
    <div className="w-64 min-w-64 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-900">Filter</h2>
      {['Roast', 'Fragrance', 'Ground Type', 'Aroma', 'Flavor'].map((category) => (
        <div key={category} className="mb-4">
          <h3 className="font-semibold mb-2 text-gray-900">{category}</h3>
          <ul>
            {getOptions(category).map((option) => (
              <li key={option} className="mb-2">
                <label className="flex items-center text-gray-800">
                  <input
                    type="checkbox"
                    name={option}
                    onChange={(e) => handleCheckboxChange(e, category.toLowerCase().replace(' ', ''))}
                    className="mr-2 rounded text-blue-500 custom-checkbox"
                  />
                  <span>{option}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mb-4">
        <h3 className="font-semibold mb-2 text-gray-900">Price</h3>
        <div className="flex items-center space-x-2">
          <input
            type="number"
            name="min"
            value={filters.price.min}
            onChange={handlePriceChange}
            className="w-full p-1 border rounded"
            placeholder="Min"
          />
          <input
            type="number"
            name="max"
            value={filters.price.max}
            onChange={handlePriceChange}
            className="w-full p-1 border rounded"
            placeholder="Max"
          />
        </div>
      </div>
      <div className='bg-white sticky bottom-0 py-2'>
        <button
          onClick={handleRecommendClick}
          className="w-full mb-2 bg-[#A53F3F] text-white py-2.5 px-4 rounded-lg hover:opacity-85 transition duration-300"
        >
          Recommend
        </button>
      </div>
    </div>
  );
};

const getOptions = (category) => {
  switch (category) {
    case 'Roast':
      return ['Light', 'Medium Light', 'Medium', 'Medium Dark', 'Dark'];
    case 'Fragrance':
      return ['Fruity', 'Floral', 'Earthy', 'Spicy', 'Sweet'];
    case 'Ground Type':
      return ['Whole Bean', 'Fine Ground', 'Coarse Ground'];
    case 'Aroma':
      return ['Floral', 'Chocolate', 'Dark Chocolate', 'Smoky'];
    case 'Flavor':
      return ['Very Sweet', 'Sweet', 'Normal', 'Bitter', 'Very Bitter'];
    default:
      return [];
  }
};

export default FilterSidebar;
