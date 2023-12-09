import { useDispatch } from "react-redux";
import { updateUserAsync } from "../../../actions/user";
import { useToast } from "../../../store/hooks/useToast";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const UserAddress = (props) => {
	const { register, handleSubmit, reset, setValue } = useForm();
	const dispatch = useDispatch();
	const { notify } = useToast();
	const [selectedEditIndex, SetSelectedEditIndex] = useState(-1);
	const [updateModal, setUpdateModal] = useState(false);
	const user = props?.user;

	const handleRemove = (index) => {
		const newUser = { ...user, addresses: [...user.addresses] };
		newUser.addresses.splice(index, 1);
		dispatch(updateUserAsync({ formData: { ...newUser }, notify }));
	};
	const handleEdit = (addressUpdate) => {
		const newUser = { ...user, addresses: [...user.addresses] };
		newUser.addresses.splice(selectedEditIndex, 1, addressUpdate);
		dispatch(updateUserAsync({ formData: { ...newUser }, notify }));
		SetSelectedEditIndex(-1);
		setUpdateModal(false);
	};
	const handleEditForm = (index) => {
		SetSelectedEditIndex(index);
		setUpdateModal(true);
		const userAddress = user.addresses[index];
		setValue("name", userAddress.name);
		setValue("email", userAddress.email);
		setValue("phone", userAddress.phone);
		setValue("street", userAddress.street);
		setValue("city", userAddress.city);
		setValue("state", userAddress.state);
		setValue("country", userAddress.country);
		setValue("postcode", userAddress.postcode);
	};
	return (
		<div className="tab-pane fade active show">
			<div className="profile__address">
				<div className="row">
					<div className="col-md-12">
						<div className="tp-checkout-place white-bg p-0 mt-5">
							<h3 className="tp-checkout-place-title m-0 pt-4 pb-4">
								{user.addresses.length === 1 ? "Shipping Address" : "Shipping Addresses"}
							</h3>

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
										<ul className="d-flex flex-column justify-content-between">
											<li className="tp-order-info-list-header">
												<h4>{address?.name}</h4>
												<h4>Phone: {address?.phone}</h4>
											</li>
											<li className="tp-order-info-list-desc">
												<p>{address?.street}</p>
												<span>{address?.city} </span>
											</li>
											<li className="d-flex">
												<div className="ms-auto">
													<button onClick={() => handleRemove(index)} className="me-3 text-danger">
														<i className="fa fa-close"></i> Remove
													</button>
													<button className="me-3 text-success" onClick={() => handleEditForm(index)}>
														<i className="fa fa-edit"></i> Edit
													</button>
												</div>
											</li>
										</ul>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<>
				{/* <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog modal-lg modal-dialog-centered">
						<div className="modal-content">
							<div className="modal-header">
								<h1 className="modal-title fs-5" id="exampleModalLabel">
									Edit Address
								</h1>
								<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
							</div>
							<form
								onSubmit={handleSubmit((data) => {
									handleEdit(data);
									reset();
								})}
							>
								<div className="modal-body">
									<div className="tp-checkout-bill-form">
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
											</div>
										</div>
									</div>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
										Close
									</button>
									<button type="submit" className="btn btn-primary">
										Edit Address
									</button>
								</div>
							</form>
						</div>
					</div>
				</div> */}

				<Modal
					show={updateModal}
					onHide={() => setUpdateModal(false)}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
				>
					<Modal.Header closeButton>
						<Modal.Title>Edit Address</Modal.Title>
					</Modal.Header>
					<form
						onSubmit={handleSubmit((data) => {
							handleEdit(data);
							reset();
						})}
					>
						<Modal.Body>
							<div className="tp-checkout-bill-form">
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
									</div>
								</div>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={() => setUpdateModal(false)}>
								Close
							</Button>
							<Button type="submit" variant="primary">
								Save Changes
							</Button>
						</Modal.Footer>
					</form>
				</Modal>
			</>
		</div>
	);
};

export default UserAddress;
