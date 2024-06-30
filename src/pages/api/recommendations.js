export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { roast, fragrance, groundType, aroma, flavor, price } = req.body;

  // Mock data
  const recommendations = [
    {
      brand: 'Pop Pop',
      name: '3 in 1 Arabica Coffee',
      price: 15000,
      thumbnail: 'images/hot-coffee-cup.jpeg',
      gram: 250,
    },
    {
      brand: 'Maymyo Fresh',
      name: 'Pure Coffee',
      price: 20000,
      thumbnail: 'images/hot-coffee-cup.jpeg',
      gram: 500,
    },
    {
      brand: 'Maymyo Fresh',
      name: '2 in 1 Brown Version',
      price: 20000,
      thumbnail: 'images/hot-coffee-cup.jpeg',
      gram: 500,
    }
  ];

  // Apply filtering logic here based on the filters received in req.body
  // For now, returning the mock data

  res.status(200).json(recommendations);
}
