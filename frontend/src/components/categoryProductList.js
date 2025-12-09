import { API_BASE_URL } from '../config';
export async function categoryProductList({ category, subcategory, item }) {
     
  try {
    const apiUrl = `${API_BASE_URL}/api/categories/${category}/${subcategory}/${item}`;

 


    const response = await fetch(apiUrl);
    

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to fetch products');
    }
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching category products:', error);
    throw error;
  }
}
