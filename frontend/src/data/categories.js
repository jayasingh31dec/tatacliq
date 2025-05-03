const categories = [
  {
    name: 'Men',
    slug: 'men',
    subcategories: {
      clothing: ['T-Shirts', 'Jeans', 'Jackets'],
      footwear: ['Sneakers', 'Shoes', 'Sandals', 'Crocs'],
    },
  },
  {
    name: 'Women',
    slug: 'women',
    subcategories: {
      clothing: ['Dresses', 'Tops', 'Jeans'],
      footwear: ['Heels', 'Flats', 'Boots'],
      beauty: ['Makeup', 'Skincare'],
    },
  },
  {
    name: 'Kids',
    slug: 'kids',
    subcategories: {
      clothing: ['T-Shirts', 'Shorts', 'Dresses'],
      footwear: ['Kids Shoes', 'Sandals'],
      toys: ['Action Figures', 'Puzzles'],
    },
  },
  {
    name: 'Electronics',
    slug: 'electronics',
    subcategories: {
      devices: ['Mobiles', 'Laptops', 'Headphones'],
    },
  },
];

export default categories;
