import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../styles/BreadCrumb/BreadCrumb";
import { selectWishlist } from "../store/redux/wishList";
import { discountedPrice } from "../utils/constants";
import { Link } from "react-router-dom";
import { addToCartAsync } from "../actions/cart";
import { selectItems } from "../store/redux/cart";
import { useToast } from "../store/hooks/useToast";
import { removeFromWishlistAsync } from "../actions/wishlist";

const Wishlist = () => {
	const wishlist = useSelector(selectWishlist);
	const CartItems = useSelector(selectItems);
	const { notify } = useToast();
	const dispatch = useDispatch();

	const handleCart = (productId) => {
		if (CartItems.findIndex((item) => item.product.id === productId) < 0) {
			dispatch(addToCartAsync({ formData: { product: productId, quantity: 1 }, notify }));
		} else {
			notify("error", "Product Already in Cart.");
		}
	};
	const handleRemove = (productId) => {
		dispatch(removeFromWishlistAsync({ formData: { id: productId }, notify }));
	};
	return (
		<>
			<BreadCrumb page="Wishlist" />
			<section className="tp-cart-area pb-120">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="tp-cart-list mb-45 mr-30">
								<table className="table">
									<thead>
										<tr>
											<th colSpan={2} className="tp-cart-header-product">
												Product
											</th>
											<th className="tp-cart-header-price">Price</th>
											<th className="tp-cart-header-quantity">Quantity</th>
											<th>Action</th>
											<th />
										</tr>
									</thead>
									<tbody>
										{wishlist?.length ? (
											wishlist.map((item, index) => (
												<tr key={index}>
													<td className="tp-cart-img">
														<Link to="/product-detail" state={{ product: item.product.id }}>
															<img
																src={`${import.meta.env.VITE_APP_API_URL}/products/media?filename=${
																	item?.product?.media[0].filename
																}&mimetype=${item?.product?.media[0].mimetype}&width=200`}
																alt="product-image"
															/>
														</Link>
													</td>

													<td className="tp-cart-title">
														<Link to="/product-detail" state={{ product: item.product.id }}>
															{item.product.title}
														</Link>
													</td>

													<td className="tp-cart-price">
														<span>${discountedPrice(item.product)}</span>
													</td>

													<td className="tp-cart-add-to-cart">
														<button
															onClick={() => handleCart(item.product.id)}
															className="tp-btn tp-btn-2 tp-btn-blue"
														>
															Add To Cart
														</button>
													</td>

													<td className="tp-cart-action">
														<button onClick={() => handleRemove(item.id)} className="tp-cart-action-btn">
															<svg
																width={10}
																height={10}
																viewBox="0 0 10 10"
																fill="none"
																className="me-2"
																xmlns="http://www.w3.org/2000/svg"
															>
																<path
																	fillRule="evenodd"
																	clipRule="evenodd"
																	d="M9.53033 1.53033C9.82322 1.23744 9.82322 0.762563 9.53033 0.46967C9.23744 0.176777 8.76256 0.176777 8.46967 0.46967L5 3.93934L1.53033 0.46967C1.23744 0.176777 0.762563 0.176777 0.46967 0.46967C0.176777 0.762563 0.176777 1.23744 0.46967 1.53033L3.93934 5L0.46967 8.46967C0.176777 8.76256 0.176777 9.23744 0.46967 9.53033C0.762563 9.82322 1.23744 9.82322 1.53033 9.53033L5 6.06066L8.46967 9.53033C8.76256 9.82322 9.23744 9.82322 9.53033 9.53033C9.82322 9.23744 9.82322 8.76256 9.53033 8.46967L6.06066 5L9.53033 1.53033Z"
																	fill="currentColor"
																/>
															</svg>
															<span>Remove</span>
														</button>
													</td>
												</tr>
											))
										) : (
											<tr>
												<td className="text-center">
													<Link to="/shop" className="text-primary">
														Add Product
													</Link>{" "}
													to wishlist
												</td>
											</tr>
										)}
									</tbody>
								</table>
							</div>
							<div className="tp-cart-bottom">
								<div className="row align-items-end">
									<div className="col-xl-6 col-md-4">
										<div className="tp-cart-update">
											<Link to="/Cart" className="tp-cart-update-btn">
												Go To Cart
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Wishlist;
