import ProductCard from "../../../styles/card/ProductCard";

const Products = (props) => {
	return (
		<>
			<div className="row align-items-end">
				<div className="col-xl-5 col-lg-6 col-md-5">
					<div className="tp-section-title-wrapper mb-40">
						<h3 className="tp-section-title">
							Products
							<svg width={114} height={35} viewBox="0 0 114 35" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M112 23.275C1.84952 -10.6834 -7.36586 1.48086 7.50443 32.9053"
									stroke="currentColor"
									strokeWidth={4}
									strokeMiterlimit="3.8637"
									strokeLinecap="round"
								/>
							</svg>
						</h3>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-12">
					<div className="tp-product-tab-content">
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade active show"
								id="new-tab-pane"
								role="tabpanel"
								aria-labelledby="new-tab"
								tabIndex={0}
							>
								<div className="row">
									{props.products.length ? (
										props.products.map((product, index) => (
											<div key={index} className="col-xl-3 col-lg-3 col-sm-6 d-flex flex-column">
												<ProductCard product={product} />
											</div>
										))
									) : (
										<h4 className="fw-bolder">No product found</h4>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Products;
