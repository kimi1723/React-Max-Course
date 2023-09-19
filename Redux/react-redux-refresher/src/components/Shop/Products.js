import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "My first book", description: "The first book" },
  {
    id: "p2",
    price: 12,
    title: "My second book",
    description: "The second book",
  },
  {
    id: "p3",
    price: 17,
    title: "My third book",
    description: "The third book",
  },
];

const products = DUMMY_PRODUCTS.map((product) => (
  <ProductItem
    key={product.id}
    id={product.id}
    title={product.title}
    price={product.price}
    description={product.description}
  />
));

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{products}</ul>
    </section>
  );
};

export default Products;
