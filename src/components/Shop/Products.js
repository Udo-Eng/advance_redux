import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    title: "Canvas",
    price: 10,
    description: "This is the latest Nike canvas",
  },
  {
    id: "p2",
    title: "Shirt",
    price: 20,
    description: "This is  a Louis Vintage Shirt",
  },
  {
    id: "p3",
    title: "Vehicle",
    price: 100,
    description: "Dodge RAM for sale DM me",
  },
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
