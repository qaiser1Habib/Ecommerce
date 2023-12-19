import { Link } from "react-router-dom";

const Categories = () => {
	return (
		<div className="container">
			<div className="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4">
				<div className="col">
					<div className="tp-product-category-item text-center mb-40">
						<div className="tp-product-category-thumb fix">
							<Link to="/shop">
								<img src="assets/img/product/category/product-cat-1.png" alt="product-category" />
							</Link>
						</div>
						<div className="tp-product-category-content">
							<h3 className="tp-product-category-title">
								<a to="/shop">Headphones</a>
							</h3>
							<p>20 Product</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="tp-product-category-item text-center mb-40">
						<div className="tp-product-category-thumb fix">
							<Link to="/shop">
								<img src="assets/img/product/category/product-cat-2.png" alt="product-category" />
							</Link>
						</div>
						<div className="tp-product-category-content">
							<h3 className="tp-product-category-title">
								<Link to="/shop">Mobile Phone</Link>
							</h3>
							<p>25 Product</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="tp-product-category-item text-center mb-40">
						<div className="tp-product-category-thumb fix">
							<Link to="/shop">
								<img src="assets/img/product/category/product-cat-3.png" alt="product-category" />
							</Link>
						</div>
						<div className="tp-product-category-content">
							<h3 className="tp-product-category-title">
								<a to="/shop">CPU Heat Pipes</a>
							</h3>
							<p>57 Product</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="tp-product-category-item text-center mb-40">
						<div className="tp-product-category-thumb fix">
							<Link to="/shop">
								<img src="assets/img/product/category/product-cat-4.png" alt="product-category" />
							</Link>
						</div>
						<div className="tp-product-category-content">
							<h3 className="tp-product-category-title">
								<a to="/shop">Smart Watch</a>
							</h3>
							<p>44 Product</p>
						</div>
					</div>
				</div>
				<div className="col">
					<div className="tp-product-category-item text-center mb-40">
						<div className="tp-product-category-thumb fix">
							<Link to="/shop">
								<img src="assets/img/product/category/product-cat-5.png" alt="product-category" />
							</Link>
						</div>
						<div className="tp-product-category-content">
							<h3 className="tp-product-category-title">
								<Link to="/shop">With Bluetooth </Link>
							</h3>
							<p>81 Product</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Categories;
