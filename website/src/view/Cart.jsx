import { Link } from "react-router-dom";
import { selectItems } from "../store/redux/cart";
import BreadCrumb from "../styles/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCartAsync, updateCartItemAsync } from "../actions/cart";
import { useToast } from "../store/hooks/useToast";
import { discountedPrice } from "../utils/constants";

const Cart = () => {
	const dispatch = useDispatch();
	const { notify } = useToast();
	const items = useSelector(selectItems);

	const totalPrice = items.reduce((amount, item) => {
		return discountedPrice(item.product) * item.quantity + amount;
	}, 0);
	const totalItems = items.reduce((total, item) => {
		return item.quantity + total;
	}, 0);

	const handleRemove = (productId) => {
		dispatch(removeFromCartAsync({ formData: { id: productId }, notify }));
	};

	const handleQuantityChange = (productId, newQuantity) => {
		if (newQuantity > 0) dispatch(updateCartItemAsync({ formData: { id: productId, quantity: newQuantity }, notify }));
	};

	return (
		<main>
			<BreadCrumb page="Shopping Cart" />
			<section className="tp-cart-area pb-120">
				<div className="container">
					<div className="row">
						<div className="col-xl-9 col-lg-8">
							<div className="tp-cart-list mb-25 mr-30">
								<table className="table">
									<thead>
										<tr>
											<th colSpan={2} className="tp-cart-header-product">
												Product
											</th>
											<th className="tp-cart-header-price">Price</th>
											<th className="tp-cart-header-quantity">Quantity</th>
											<th />
										</tr>
									</thead>
									<tbody>
										{items !== null &&
											items.map((item, index) => (
												<tr key={index}>
													<td className="tp-cart-img">
														<Link to={`/product-detail/${item.product?.id}`}>
															<img
																src={`${import.meta.env.VITE_APP_API_URL}/products/media?filename=${
																	item?.product.media[0].filename
																}&mimetype=${item?.product.media[0].mimetype}&width=500`}
																alt="product-image"
															/>
														</Link>
													</td>

													<td className="tp-cart-title">
														<Link to={`/product-detail/${item.product?.id}`}>{item.product?.title}</Link>
													</td>

													<td className="tp-cart-price">
														<span>$ {discountedPrice(item.product)}</span>
													</td>

													<td className="tp-cart-quantity">
														<div className="tp-product-quantity mt-10 mb-10">
															<span
																className="tp-cart-minus"
																onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
															>
																<svg
																	width={10}
																	height={2}
																	viewBox="0 0 10 2"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M1 1H9"
																		stroke="currentColor"
																		strokeWidth="1.5"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</span>
															<input className="tp-cart-input" type="text" value={item.quantity} />
															<span
																className="tp-cart-plus"
																onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
															>
																<svg
																	width={10}
																	height={10}
																	viewBox="0 0 10 10"
																	fill="none"
																	xmlns="http://www.w3.org/2000/svg"
																>
																	<path
																		d="M5 1V9"
																		stroke="currentColor"
																		strokeWidth="1.5"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																	<path
																		d="M1 5H9"
																		stroke="currentColor"
																		strokeWidth="1.5"
																		strokeLinecap="round"
																		strokeLinejoin="round"
																	/>
																</svg>
															</span>
														</div>
													</td>

													<td className="tp-cart-action">
														<div type="button" onClick={() => handleRemove(item.id)} className="tp-cart-action-btn">
															<svg
																width={10}
																height={10}
																viewBox="0 0 10 10"
																fill="none"
																className="me-1"
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
														</div>
													</td>
												</tr>
											))}
									</tbody>
								</table>
							</div>
							<div className="tp-cart-bottom">
								<div className="row align-items-end">
									<div className="col-xl-6 col-md-8">
										<div className="tp-cart-coupon">
											<form action="#">
												<div className="tp-cart-coupon-input-box">
													<label>Coupon Code:</label>
													<div className="tp-cart-coupon-input d-flex align-items-center">
														<input type="text" placeholder="Enter Coupon Code" />
														<button type="submit">Apply</button>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="tp-cart-checkout-wrapper ms-1">
								<div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
									<span className="tp-cart-checkout-top-title">Subtotal</span>
									<span className="tp-cart-checkout-top-price">${totalPrice}</span>
								</div>
								<div className="tp-cart-checkout-top d-flex align-items-center justify-content-between">
									<span className="tp-cart-checkout-top-title">Total Items in Cart</span>
									<span className="tp-cart-checkout-top-price">{totalItems}</span>
								</div>
								<div className="tp-cart-checkout-shipping">
									<h4 className="tp-cart-checkout-shipping-title">Shipping</h4>
									<div className="tp-cart-checkout-shipping-option-wrapper">
										<div className="tp-cart-checkout-shipping-option">
											<input id="flat_rate" type="radio" name="shipping" />
											<label htmlFor="flat_rate">
												Flat rate: <span>$20.00</span>
											</label>
										</div>
										<div className="tp-cart-checkout-shipping-option">
											<input id="local_pickup" type="radio" name="shipping" />
											<label htmlFor="local_pickup">
												Local pickup: <span> $25.00</span>
											</label>
										</div>
										<div className="tp-cart-checkout-shipping-option">
											<input id="free_shipping" type="radio" name="shipping" />
											<label htmlFor="free_shipping">Free shipping</label>
										</div>
									</div>
								</div>
								<div className="tp-cart-checkout-total d-flex align-items-center justify-content-between">
									<span>Total</span>
									<span>${totalPrice}</span>
								</div>
								<div className="tp-cart-checkout-proceed">
									{items.length > 0 && (
										<Link to="/checkout" className="tp-cart-checkout-btn w-100">
											Proceed to Checkout
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};

export default Cart;
