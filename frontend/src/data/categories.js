const categories = [
  {
    name: 'Men',
    slug: 'men',
    subcategories: {
      clothing: ['t shirt', 'jeans', 'jackets'],
      footwear: ['sneakers', 'shoes', 'sandals', 'crocs'],
    },
  },
  {
    name: 'Women',
    slug: 'women',
    subcategories: {
      clothing: ['dresses', 'tops', 'jeans'],
      footwear: ['heels', 'flats', 'boots'],
      beauty: ['makeup', 'skincare'],
    },
  },
  {
    name: 'Kids',
    slug: 'kids',
    subcategories: {
      clothing: ['t shirt', 'shorts', 'dresses'],
      footwear: ['kids shoes', 'sandals'],
      toys: ['action figures', 'puzzles'],
    },
  },
  {
    name: 'Electronics',
    slug: 'electronics',
    subcategories: {
      devices: ['mobiles', 'laptops', 'headphones'],
    },
  },
];

export default categories;
