import { Link, useParams } from 'react-router-dom';

export const ProductDetail = () => {
	const params = useParams();

	return (
		<>
			<h1>Product details</h1>
			<p>{params.productId}</p>
			<Link to="/products">Back to products</Link>
		</>
	);
};
