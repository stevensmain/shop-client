interface Category {
  id: number;
  img: string;
  title: string;
  cat: string;
}

interface Product {
  id: number;
  title: string;
  desc: string;
  img: string;
  categories: Category[];
  sizes: string[];
  colors: string[];
  price: number;
  inStock: boolean;
}

interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  img: string;
  accessToken: string;
}
