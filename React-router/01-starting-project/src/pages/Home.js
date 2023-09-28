import { Link } from 'react-router-dom';

export const HomePage = () => {
	return (
		<>
			<h1>My home Page</h1>
			<p>
				Go to <Link to="/products">the list of products</Link>.
			</p>
		</>
	);
};
