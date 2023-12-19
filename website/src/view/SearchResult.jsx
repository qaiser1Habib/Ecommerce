import { Link, useLocation } from "react-router-dom";
import BreadCrumb from "../styles/BreadCrumb/BreadCrumb";
import { useToast } from "../store/hooks/useToast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllProductsAsync } from "../actions/productSlice";
import { selectAllProducts, selectTotalItems } from "../store/redux/products";
import ProductCard from "../styles/card/ProductCard";

const SearchResult = () => {
	const location = useLocation();
	const searchFormData = location?.state?.search;
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	const products = useSelector(selectAllProducts);
	const totalItems = useSelector(selectTotalItems);
	const { notify } = useToast();
	const limit = 12;

	const handlePage = (page) => {
		setPage(page);
	};
	useEffect(() => {
		dispatch(fetchAllProductsAsync({ formData: { page, limit, ...searchFormData }, notify }));
	}, [dispatch, page, searchFormData]);
	return (
		<>
			<BreadCrumb page="Search Products" />
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						<div className="tp-shop-top mb-20">
							<div className="row">
								<div className="col-xl-6">
									<div className="tp-shop-top-left d-flex align-items-center ">
										<div className="tp-shop-top-result">
											<p>{`Showing 1–${totalItems - limit} of ${totalItems} results`}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
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
										{products.length ? (
											products.map((product, index) => (
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
			</div>
		</>
	);
};

export default SearchResult;
