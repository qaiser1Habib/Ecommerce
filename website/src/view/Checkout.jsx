import { useForm } from "react-hook-form";
import BreadCrumb from "../styles/BreadCrumb/BreadCrumb";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../store/redux/cart";
import { discountedPrice } from "../utils/constants";
import { updateUserAsync } from "../actions/user";
import { useToast } from "../store/hooks/useToast";
import { useState } from "react";
import { createOrderAsync } from "../actions/order";
import { selectCurrentOrder } from "../store/redux/order";
import { Navigate } from "react-router-dom";
import { selectUserInfo } from "../store/redux/user";
import { convertToDate } from "../utils/helpers";

const Checkout = () => {
	const { register, handleSubmit, reset } = useForm();
	const items = useSelector(selectItems);
	const user = useSelector(selectUserInfo);
	const [selectedAddress, setSelectedAddress] = useState(null);
	const [paymentMethod, setPaymentMethod] = useState("Cash_on_Delivery");
	const dispatch = useDispatch();
	const { notify } = useToast();
	const currentOrder = useSelector(selectCurrentOrder);
	const totalPrice = items.reduce((amount, item) => {
		return discountedPrice(item.product) * item.quantity + amount;
	}, 0);
	const totalItems = items.reduce((total, item) => {
		return item.quantity + total;
	}, 0);

	const handlePayment = (e) => {
		console.log(e.target.value);
		setPaymentMethod(e.target.value);
	};
	const handleAddress = (address) => {
		setSelectedAddress(user.addresses[address]);
	};

	const handleOrder = () => {
		const currentDate = convertToDate(new Date());
		dispatch(
			createOrderAsync({
				formData: {
					items,
					userID: user?.id,
					totalPrice,
					totalItems,
					selectedAddress,
					paymentMethod,
					status: "pending",
					orderDate: currentDate,
				},
				notify,
			})
		);
	};
	return (
		<>
			{currentOrder && currentOrder.paymentMethod === "Cash_on_Delivery" && (
				<Navigate to="/order-success" state={{ order: currentOrder }} replace={true} />
			)}
			{currentOrder && currentOrder.paymentMethod === "bank_transfer" && (
				<Navigate to="/stripe-checkout" state={{ order: currentOrder }} replace={true} />
			)}
			<>
				<BreadCrumb page="Checkout" />
				<section
					className="tp-checkout-area pt-50 pb-120"
					data-bg-color="#EFF1F5"
					style={{ backgroundColor: "rgb(239, 241, 245)" }}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-7 ">
								<div className="tp-checkout-bill-area w-100">
									<h3 className="tp-checkout-bill-title">Billing Details</h3>
									<div className="tp-checkout-bill-form">
										<form
											onSubmit={handleSubmit((data) => {
												dispatch(
													updateUserAsync({ formData: { ...user, addresses: [...user.addresses, data] }, notify })
												);
												reset();
											})}
										>
											<div className="tp-checkout-bill-inner">
												<div className="row">
													<div className="col-md-6">
														<div className="tp-checkout-input">
															<label>
																Full Name <span>*</span>
															</label>
															<input
																type="text"
																{...register("name", {
																	required: "Full Name is required",
																})}
																placeholder="Full Name"
															/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="tp-checkout-input">
															<label>
																Email <span>*</span>
															</label>
															<input
																type="email"
																{...register("email", {
																	required: "Email is required",
																})}
																placeholder="Email"
															/>
														</div>
													</div>

													<div className="col-md-12">
														<div className="tp-checkout-input">
															<label>
																Phone <span>*</span>
															</label>
															<input
																type="tel"
																{...register("phone", {
																	required: "phone is required",
																})}
																placeholder=""
															/>
														</div>
													</div>

													<div className="col-md-12">
														<div className="tp-checkout-input">
															<label>Street address</label>
															<input
																type="text"
																{...register("street", {
																	required: "address is required",
																})}
																placeholder="House number and street name"
															/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="tp-checkout-input">
															<label>Town / City</label>
															<input
																type="text"
																{...register("city", {
																	required: "Town / City is required",
																})}
																placeholder=""
															/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="tp-checkout-input">
															<label>State / Province</label>
															<input
																type="text"
																{...register("state", {
																	required: "State / Province is required",
																})}
																placeholder=""
															/>
														</div>
													</div>
													<div className="col-md-6">
														<div className="tp-checkout-input">
															<label>County</label>
															<select
																className="nice-select w-100"
																{...register("county", {
																	required: "County is required",
																})}
															>
																<option value="pakistan">Pakistan</option>
																<option value="india">India</option>
																<option value="china">China</option>
																<option value="Japan">Japan</option>
															</select>
														</div>
													</div>
													<div className="col-md-6">
														<div className="tp-checkout-input">
															<label>Postcode ZIP</label>
															<input
																type="text"
																{...register("postcode", {
																	required: "Postcode is required",
																})}
																placeholder=""
															/>
														</div>
													</div>

													<div className="col-md-12">
														<div className="tp-checkout-input">
															<label>Order notes (optional)</label>
															<textarea
																{...register("notes")}
																placeholder="Notes about your order, e.g. special notes for delivery."
															/>
														</div>
													</div>
													<div className="col-md-4">
														<div className="tp-checkout-btn-wrapper">
															<button type="submit" className="tp-checkout-btn w-100">
																Add Address
															</button>
														</div>
													</div>
													{user && user?.addresses && user?.addresses?.length > 0 && (
														<div className="col-md-12">
															<div className="tp-checkout-place white-bg p-0 mt-5">
																<h3 className="tp-checkout-place-title m-0 pt-4">
																	{user.addresses.length === 1 ? "Your Address" : "Your Addresses"}
																</h3>
																<p>Choose From Existing Address</p>
																{user?.addresses?.map((address, index) => (
																	<div
																		key={index}
																		className="tp-order-info-list px-2 pt-2 mb-3"
																		style={{
																			width: "100%",
																			background: "#ffffff",
																			border: "1px solid #d5d8db",
																			color: "var(--tp-common-black)",
																		}}
																	>
																		<div className="tp-checkout-option">
																			<input
																				id={`${address?.name}${index}`}
																				type="radio"
																				name="addressRadioGroup"
																				onChange={() => handleAddress(index)}
																			/>
																			<label htmlFor={`${address?.name}${index}`} className="w-100">
																				<ul className="d-flex flex-column justify-content-between">
																					<li className="tp-order-info-list-header">
																						<h4>{address?.name}</h4>
																						<h4>Phone: {address?.phone}</h4>
																					</li>
																					<li className="tp-order-info-list-desc">
																						<p>{address?.street}</p>
																						<span>{address?.city} </span>
																					</li>
																				</ul>
																			</label>
																		</div>
																	</div>
																))}
															</div>
														</div>
													)}
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div className="col-lg-5 ">
								<div className="tp-checkout-place white-bg w-100">
									<h3 className="tp-checkout-place-title">Your Order</h3>
									<div className="tp-order-info-list">
										<ul>
											<li className="tp-order-info-list-header">
												<h4>Product</h4>
												<h4>Total</h4>
											</li>
											{items &&
												items?.map((item, index) => (
													<li key={index} className="tp-order-info-list-desc">
														<p>
															{item?.product?.title}. <span className="fw-bold"> Qty: {item?.quantity}</span>
														</p>
														<span>{discountedPrice(item?.product)}</span>
													</li>
												))}

											<li className="tp-order-info-list-subtotal">
												<span>Subtotal</span>
												<span>${totalPrice}.00</span>
											</li>

											<li className="tp-order-info-list-shipping">
												<span>Shipping</span>
												<div className="tp-order-info-list-shipping-item d-flex flex-column align-items-end">
													<span>
														<input id="flat_rate" type="radio" name="shipping" />
														<label htmlFor="flat_rate">
															Flat rate: <span>$20.00</span>
														</label>
													</span>
													<span>
														<input id="local_pickup" type="radio" name="shipping" />
														<label htmlFor="local_pickup">
															Local pickup: <span>$25.00</span>
														</label>
													</span>
													<span>
														<input id="free_shipping" type="radio" name="shipping" />
														<label htmlFor="free_shipping">Free shipping</label>
													</span>
												</div>
											</li>

											<li className="tp-order-info-list-total">
												<span>Total</span>
												<span>${totalPrice}.00</span>
											</li>
										</ul>
									</div>
									<div className="tp-checkout-payment-item">
										<input
											type="radio"
											id="cod"
											name="payment"
											checked={paymentMethod === "Cash_on_Delivery"}
											value={"Cash_on_Delivery"}
											onChange={(e) => handlePayment(e)}
										/>
										<label htmlFor="cod">Cash on Delivery</label>
									</div>

									<div className="tp-checkout-payment">
										<div className="tp-checkout-payment-item">
											<input
												type="radio"
												id="bank_transfer"
												value={"bank_transfer"}
												name="payment"
												onChange={(e) => handlePayment(e)}
												checked={paymentMethod === "bank_transfer"}
											/>
											<label htmlFor="bank_transfer" data-bs-toggle="direct-bank-transfer">
												Direct Bank Transfer
											</label>
										</div>

										<div className="tp-checkout-payment-item paypal-payment">
											<input
												type="radio"
												id="paypal"
												name="payment"
												value={"paypal"}
												onChange={(e) => handlePayment(e)}
												checked={paymentMethod === "paypal"}
											/>
											<label htmlFor="paypal">
												PayPal <img src="assets/img/icon/payment-option.png" alt="" />
											</label>
										</div>
									</div>
									<div className="tp-checkout-agree">
										<div className="tp-checkout-option">
											<input id="read_all" type="checkbox" />
											<label htmlFor="read_all">I have read and agree to the website.</label>
										</div>
									</div>
									<div className="tp-checkout-btn-wrapper">
										<button onClick={() => handleOrder()} className="tp-checkout-btn w-100">
											Place Order
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		</>
	);
};

export default Checkout;
