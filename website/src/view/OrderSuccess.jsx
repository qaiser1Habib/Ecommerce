import { Link, Navigate, useLocation } from "react-router-dom";
import { discountedPrice } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetCartAsync } from "../actions/cart";
import { userLoggedIn } from "../store/redux/auth";
import { useToast } from "../store/hooks/useToast";
import { resetOrder } from "../store/redux/order";

const OrderSuccess = () => {
	const dispatch = useDispatch();
	const location = useLocation();
	const order = location?.state?.order;
	const user = useSelector(userLoggedIn);
	const { notify } = useToast();
	useEffect(() => {
		dispatch(resetCartAsync({ formData: { user: user?.id }, notify }));
		dispatch(resetOrder());
	}, [useEffect, user]);

	console.log(order)

	return (
		<>
			{!order ? (
				<Navigate to="/" replace={true} />
			) : (
				<main>
					<section className="tp-order-area pt-60 pb-60">
						<div className="container">
							<div className="tp-order-inner">
								<div className="row gx-0">
									<div className="col-lg-6">
										<div
											className="tp-order-details"
											data-bg-color="#4F3D97"
											style={{ backgroundColor: "rgb(79, 61, 151)" }}
										>
											<div className="tp-order-details-top text-center mb-70">
												<div className="tp-order-details-icon">
													<span>
														<svg
															width={52}
															height={52}
															viewBox="0 0 52 52"
															fill="none"
															xmlns="http://www.w3.org/2000/svg"
														>
															<path
																d="M46 26V51H6V26"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M51 13.5H1V26H51V13.5Z"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M26 51V13.5"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M26 13.5H14.75C13.0924 13.5 11.5027 12.8415 10.3306 11.6694C9.15848 10.4973 8.5 8.9076 8.5 7.25C8.5 5.5924 9.15848 4.00269 10.3306 2.83058C11.5027 1.65848 13.0924 1 14.75 1C23.5 1 26 13.5 26 13.5Z"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
															<path
																d="M26 13.5H37.25C38.9076 13.5 40.4973 12.8415 41.6694 11.6694C42.8415 10.4973 43.5 8.9076 43.5 7.25C43.5 5.5924 42.8415 4.00269 41.6694 2.83058C40.4973 1.65848 38.9076 1 37.25 1C28.5 1 26 13.5 26 13.5Z"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
													</span>
												</div>
												<div className="tp-order-details-content">
													<h3 className="tp-order-details-title">Your Order Confirmed</h3>
													<p>
														We will send you a shipping confirmation email as soon <br /> as your order ships
													</p>
												</div>
											</div>
											<div className="tp-order-details-item-wrapper">
												<div className="row">
													<div className="col-sm-6">
														<div className="tp-order-details-item">
															<h4>Order Date:</h4>
															<p>April 10, 2023</p>
														</div>
													</div>
													<div className="col-sm-6">
														<div className="tp-order-details-item">
															<h4>Expected Delivery: </h4>
															<p>April 16, 2023</p>
														</div>
													</div>
													<div className="col-sm-6">
														<div className="tp-order-details-item">
															<h4>Order Number:</h4>
															<p>#{order.id}</p>
														</div>
													</div>
													<div className="col-sm-6">
														<div className="tp-order-details-item">
															<h4>Payment Method:</h4>
															<p>{order?.paymentMethod}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6">
										<div className="tp-order-info-wrapper">
											<h4 className="tp-order-info-title">Order Details</h4>
											<div className="tp-order-info-list">
												<ul>
													<li className="tp-order-info-list-header">
														<h4>Product</h4>
														<h4>Total</h4>
													</li>
													{order?.items?.map((item, index) => (
														<li key={index} className="tp-order-info-list-desc">
															<p>
																{item?.product?.title}. <span className="fw-bold"> Qty: {item?.quantity}</span>
															</p>
															<span>${discountedPrice(item?.product)}</span>
														</li>
													))}

													<li className="tp-order-info-list-subtotal">
														<span>Subtotal</span>
														<span>${order?.totalPrice}</span>
													</li>

													<li className="tp-order-info-list-shipping">
														<span>Shipping</span>
														<div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
															<span>
																<input id="shipping_info" type="checkbox" />
																<label htmlFor="shipping_info">
																	Flat rate: <span>$20.00</span>
																</label>
															</span>
														</div>
													</li>

													<li className="tp-order-info-list-total">
														<span>Total</span>
														<span>${order?.totalPrice}</span>
													</li>
												</ul>
												<Link to="/" className="tp-error-btn">
													Back to Home
												</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			)}
		</>
	);
};

export default OrderSuccess;
