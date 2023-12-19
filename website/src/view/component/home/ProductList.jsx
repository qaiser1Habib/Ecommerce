import { useEffect, useState } from "react";
import BreadCrumb from "../../../styles/BreadCrumb/BreadCrumb";
import Pagination from "../../../styles/pagination/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProductsAsync } from "../../../actions/productSlice";
import { selectAllProducts, selectTotalItems } from "../../../store/redux/products";
import { useToast } from "../../../store/hooks/useToast";
import { Link } from "react-router-dom";
import { getCategoriesAsync } from "../../../actions/categories";
import { selectCategories } from "../../../store/redux/categories";
import { getBrandsAsync } from "../../../actions/brands";
import { selectBrands } from "../../../store/redux/brand";
import ProductCard from "../../../styles/card/ProductCard";

const ProductList = () => {
	const [page, setPage] = useState(1);
	const [filters, setFilters] = useState({});
	const dispatch = useDispatch();
	const products = useSelector(selectAllProducts);
	const categories = useSelector(selectCategories);
	const brands = useSelector(selectBrands);
	const totalItems = useSelector(selectTotalItems);
	const { notify } = useToast();

	const limit = 9;

	const sortFilterDropdown = [
		{ name: "Best Rating", sort: "Rating", order: "desc" },
		{ name: "Price High to Low", sort: "price", order: "desc" },
		{ name: "Price Low to Hight", sort: "price", order: "asc" },
	];

	const handleSort = (option) => {
		const newFormData = { ...filters, sort: option.sort, order: option.order };
		setFilters(newFormData);
		dispatch(fetchAllProductsAsync({ formData: { page, limit, ...newFormData }, notify }));
	};
	const handleFilter = (e, section, option) => {
		const newFormData = { ...filters };
		if (e.target.checked) {
			if (newFormData[section]) {
				newFormData[section].push(option);
			} else {
				newFormData[section] = [option];
			}
		} else {
			const index = newFormData[section].findIndex((el) => el === option.value);
			newFormData[section].splice(index, 1);
		}
		setFilters(newFormData);
		dispatch(fetchAllProductsAsync({ formData: { page, limit, ...newFormData }, notify }));
	};

	const handlePage = (page) => {
		setPage(page);
	};
	useEffect(() => {
		dispatch(fetchAllProductsAsync({ formData: { page: page, limit: limit }, notify }));
		dispatch(getCategoriesAsync(notify));
		dispatch(getBrandsAsync(notify));
	}, [dispatch, page]);

	return (
		<>
			<BreadCrumb page="Shop" />
			<section className="tp-shop-area pb-120">
				<div className="container">
					<div className="row">
						<div className="col-xl-3 col-lg-4">
							<div className="tp-shop-sidebar mr-10">
								<div className="tp-shop-widget mb-50">
									<h3 className="tp-shop-widget-title">Product Status</h3>
									<div className="tp-shop-widget-content">
										<div className="tp-shop-widget-checkbox">
											<ul className="filter-items filter-checkbox">
												<li className="filter-item checkbox">
													<input id="on_sale" type="checkbox" />
													<label htmlFor="on_sale">On sale</label>
												</li>
												<li className="filter-item checkbox">
													<input id="in_stock" type="checkbox" />
													<label htmlFor="in_stock">In Stock</label>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="tp-shop-widget mb-20">
									<h3 className="tp-shop-widget-title">Category</h3>
									<div className="tp-shop-widget-content">
										<div className="tp-shop-widget-checkbox tp-shop-widget-categories">
											<ul className="filter-items filter-checkbox ">
												{categories.map((category, index) => {
													return (
														<li key={index} className="filter-item checkbox">
															<input
																id={`${category.id}`}
																name={`${category.label}`}
																defaultValue={`${category.label}`}
																type="checkbox"
																onClick={(e) => handleFilter(e, "category", category.label)}
															/>
															<label htmlFor={`${category.id}`}>{category.label}</label>
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>

								<div className="tp-shop-widget mb-30">
									<h3 className="tp-shop-widget-title">Brands</h3>
									<div className="tp-shop-widget-content">
										<div className="tp-shop-widget-checkbox tp-shop-widget-categories">
											<ul className="filter-items filter-checkbox ">
												{brands.map((brand, index) => {
													return (
														<li key={index} className="filter-item checkbox">
															<input
																id={`${brand.id}`}
																name={`${brand.label}`}
																defaultValue={`${brand.label}`}
																type="checkbox"
																onClick={(e) => handleFilter(e, "brand", brand.label)}
															/>
															<label htmlFor={`${brand.id}`}>{brand.label}</label>
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</div>

								<div className="tp-shop-widget mb-50">
									<h3 className="tp-shop-widget-title">Top Rated Products</h3>
									<div className="tp-shop-widget-content">
										<div className="tp-shop-widget-product">
											<div className="tp-shop-widget-product-item d-flex align-items-center">
												<div className="tp-shop-widget-product-thumb">
													<a>
														<img src="assets/img/product/shop/sm/shop-sm-1.jpg" alt="" />
													</a>
												</div>
												<div className="tp-shop-widget-product-content">
													<div className="tp-shop-widget-product-rating-wrapper d-flex align-items-center">
														<div className="tp-shop-widget-product-rating">
															<span>
																<svg
																	width={12}
																	height={12}
																	viewBox="0 0 12 12"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
																		fill="currentColor"
																	/>
																</svg>
															</span>
															<span>
																<svg
																	width={12}
																	height={12}
																	viewBox="0 0 12 12"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
																		fill="currentColor"
																	/>
																</svg>
															</span>
															<span>
																<svg
																	width={12}
																	height={12}
																	viewBox="0 0 12 12"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
																		fill="currentColor"
																	/>
																</svg>
															</span>
															<span>
																<svg
																	width={12}
																	height={12}
																	viewBox="0 0 12 12"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
																		fill="currentColor"
																	/>
																</svg>
															</span>
															<span>
																<svg
																	width={12}
																	height={12}
																	viewBox="0 0 12 12"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M6 0L7.854 3.756L12 4.362L9 7.284L9.708 11.412L6 9.462L2.292 11.412L3 7.284L0 4.362L4.146 3.756L6 0Z"
																		fill="currentColor"
																	/>
																</svg>
															</span>
														</div>
														<div className="tp-shop-widget-product-rating-number">
															<span>(4.2)</span>
														</div>
													</div>
													<h4 className="tp-shop-widget-product-title">
														<a>Smart watches wood...</a>
													</h4>
													<div className="tp-shop-widget-product-price-wrapper">
														<span className="tp-shop-widget-product-price">$150.00</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-9 col-lg-8">
							<div className="tp-shop-main-wrapper">
								<div className="tp-shop-top mb-20">
									<div className="row">
										<div className="col-xl-6">
											<div className="tp-shop-top-left d-flex align-items-center ">
												<div className="tp-shop-top-result">
													<p>{`Showing 1–${totalItems - limit} of ${totalItems} results`}</p>
												</div>
											</div>
										</div>
										<div className="col-xl-6">
											<div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
												<div className="tp-shop-top-select ">
													<select
														className="nice-select"
														onChange={(e) => handleSort(sortFilterDropdown[e.target.selectedIndex])}
													>
														{sortFilterDropdown.map((list, index) => {
															return (
																<option key={index} value={list.name}>
																	{list.name}
																</option>
															);
														})}
													</select>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tp-shop-items-wrapper tp-shop-item-primary">
									<div className="tab-content" id="productTabContent">
										<div
											className="tab-pane fade active show"
											id="grid-tab-pane"
											role="tabpanel"
											aria-labelledby="grid-tab"
											tabIndex={0}
										>
											<div className="row infinite-container">
												{products.map((product, index) => {
													return (
														<div className="col-xl-4 col-md-6 col-sm-6 infinite-item" key={index}>
															<ProductCard product={product} />
														</div>
													);
												})}
											</div>
										</div>
									</div>
								</div>

								<Pagination limit={limit} page={page} setPage={setPage} handlePage={handlePage} totalItems={totalItems} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ProductList;
