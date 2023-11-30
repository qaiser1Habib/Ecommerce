import { useState } from "react";
import BreadCrumb from "./partials/breadCrumb";
import DeleteModal from "../styles/modals/deleteModal";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../store/hook/useToast";

import { useForm } from "react-hook-form";

import Modal from "react-bootstrap/Modal";
import { InputSwitch } from "primereact/inputswitch";
import { Link } from "react-router-dom";
import { selectAllProducts, selectTotalItems } from "../store/redux/product";
import { createProductAsync, deleteProductAsync, fetchAllProductsAsync, updateProductAsync } from "../actions/productSlice";
import { useEffect } from "react";
import { discountedPrice } from "../utils/constants";

const User = () => {
	const dispatch = useDispatch();
	const { notify } = useToast();

	const [pickedFileName, setPickedFileName] = useState("");
	const [checked, setChecked] = useState(false);
	// const [formData, setFormData] = useState();
	const [brandList, setBrandList] = useState(null);
	const [categoryList, setCategoryList] = useState(null);
	const [showAddModal, setShowAddModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isUpdatingRecord, setIsUpdatingRecord] = useState(false);
	const [page, setPage] = useState(1);
	const products = useSelector(selectAllProducts);
	const totalItems = useSelector(selectTotalItems);

	const limit = 12;

	const categories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"];
	const brands = [
		"Apple",
		"Samsung",
		"OPPO",
		"Huawei",
		"Microsoft Surface",
		"Infinix",
		"HP Pavilion",
		"Impression of Acqua Di Gio",
		"Royal_Mirage",
		"Fog Scent Xpressio",
		"Al Munakh",
		"Lord - Al-Rehab",
		"L'Oreal Paris",
		"Hemani Tea",
		"Dermive",
		"ROREC White Rice",
		"Fair & Clear",
		"Saaf & Khaas",
		"Bake Parlor Big",
		"Baking Food Items",
		"fauji",
		"Dry Rose",
		"Boho Decor",
		"Flying Wooden",
		"LED Lights",
		"luxury palace",
		"Golden",
	];

	useEffect(() => {
		dispatch(fetchAllProductsAsync({ formData: { page: page, limit: limit }, notify }));
	}, [dispatch, page]);

	useEffect(() => {
		const mappedBrand = brands.map((brand) => ({
			value: brand,
			label: brand,
		}));
		const mappedCategory = categories.map((category) => ({
			value: category,
			label: category,
		}));

		setBrandList(mappedBrand);
		setCategoryList(mappedCategory);
	}, []);

	const handleFileChange = (e) => {
		const fileInput = e.target;
		if (fileInput.files.length > 0) {
			const fileName = fileInput.files[0].name;
			setPickedFileName(fileName);
		} else {
			setPickedFileName("");
		}
	};

	const handleRemove = () => {
		const fileInput = document.getElementById("filePicker");
		fileInput.value = null;
		setPickedFileName("");
	};

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm();

	const handleAddNewItemButton = () => {
		setIsUpdatingRecord(false);
		setShowAddModal(true);
		reset();
	};

	const handleEditItemButton = (product) => {
		setValue("title", product.title);
		setValue("description", product.description);
		setValue("brand", product.brand);
		setValue("category", product.category);
		setValue("price", product.price);
		setValue("discountPercentage", product.discountPercentage);
		setValue("stock", product.stock);
		setValue("thumbnail", product.thumbnail);
		setValue("image1", product.images[0]);
		setValue("image2", product.images[1]);
		setValue("image3", product.images[2]);
		setSelectedProduct(product);
		setIsUpdatingRecord(true);
		setShowAddModal(true);
	};

	const handleDeleteItemButton = (product) => {
		setSelectedProduct(product);
		setShowDeleteModal(true);
	};

	const handleDelete = () => {
		const product = { ...selectedProduct };
		product.deleted = true;
		dispatch(deleteProductAsync({ formData: { ...product }, notify })).then(
			({ payload }) => payload?.id && setShowDeleteModal(false)
		);
	};

	const handleFormSubmit = (data) => {
		const product = { ...data };
		product.images = [product?.image1, product?.image2, product?.image3, product?.thumbnail];
		delete product["image1"];
		delete product["image3"];
		delete product["image2"];
		if (isUpdatingRecord) {
			product.id = selectedProduct.id;
		}
		isUpdatingRecord
			? dispatch(updateProductAsync({ formData: { ...product }, notify })).then(
					({ payload }) => payload?.id && setShowAddModal(false)
			  )
			: dispatch(createProductAsync({ formData: { ...product }, notify })).then(
					({ payload }) => payload?.id && setShowAddModal(false)
			  );
		reset();
	};
	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
		dispatch(fetchAllProductsAsync({ formData: { page: page + 1, limit: limit }, notify }));
	};

	return (
		<>
			<div className="fade-in">
				<BreadCrumb pageNames={["Products"]} />

				<div className="container-fluid px-0">
					<div>
						<div className="container-xxl">
							<div className="row">
								<div className="d-flex flex-wrap flex-stack pt-3">
									<div className="d-flex flex-wrap flex-stack">
										<div className="fw-bolder fs-4 p-4">All products</div>
										<span className="badge badge-square badge-success">{totalItems}</span>
									</div>

									<div className="d-flex flex-wrap my-1">
										<div className="row">
											<div className="col-12 me-5">
												<ul className="nav nav-pills">
													<li className="nav-item ms-2">
														<span
															data-bs-toggle="tooltip"
															data-bs-trigger="hover"
															data-bs-dismiss-="click"
															title=""
															data-bs-original-title="Add"
														>
															<button
																type="button"
																className="btn btn-icon btn-success fw-bolder w-100 px-4 btn-hover-scale ms-4"
																onClick={handleAddNewItemButton}
															>
																<i className="las la-plus fs-2 me-4" />
																New Product
															</button>
														</span>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div id="kt_content_container" className="d-flex flex-column-fluid align-items-start container-xxl">
					<div className="container">
						<div className="row">
							{products.map((product, index) => (
								<div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex ">
									<div className="card shadow-sm mb-6 mb-xl-9 d-flex flex-column w-100">
										<div className="card-body py-3 px-3 card-scroll">
											<div className="text-center mb-2">
												<img
													className="w-100 img-fluid h-300px rounded"
													alt=""
													loading="lazy"
													src={product?.thumbnail}
													style={{ objectFit: "cover" }}
												/>
											</div>
										</div>

										<div className="card-body p-1 px-4 card-scroll">
											<div className="banner banner-light fs-2">
												<Link to="/" className="text-dark fw-bold ">
													{product?.title}
												</Link>
											</div>
											<div className="fs-6 fw-bold text-gray-600 mb-2">${discountedPrice(product)}</div>
											<p style={{ textDecoration: "line-through" }}>${product?.price}</p>
											{product.deleted && <p className="text-danger">Product Deleted</p>}
										</div>

										<div className="card-footer p-1 px-4 flex w-100 text-start mt-auto">
											<i
												className="fas fa-edit svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer"
												onClick={() => handleEditItemButton(product)}
											/>
											<i
												className="bi bi-trash-fill svg-icon svg-icon-5 svg-icon-gray-500 pb-3 pt-3 cursor-pointer"
												onClick={() => handleDeleteItemButton(product)}
											/>

											<div className="float-end">
												<InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
											</div>
										</div>
									</div>
								</div>
							))}
						</div>
						<div className="row justify-content-center ">
							<div className="col-sm-2 mb-5">
								<button
									type="button"
									className="btn btn-icon btn-success fw-bolder w-100 px-4 btn-hover-scale ms-4"
									onClick={handleLoadMore}
								>
									Load More
								</button>
							</div>
						</div>
					</div>
				</div>

				<Modal
					show={showAddModal}
					onHide={() => setShowAddModal(false)}
					size="lg"
					aria-labelledby="contained-modal-title-vcenter"
					centered
				>
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title-vcenter">Add New</Modal.Title>
					</Modal.Header>
					<form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
						<Modal.Body>
							<>
								<div className="fv-row mb-7">
									<div className="file-upload">
										<div className="dashed-border">
											<i className="fa fa-file file-icon"></i>
											<div className="upload-section">
												<p className="upload">
													<label className="fw-bolder" htmlFor="filePicker">
														Browse
													</label>
													To Upload File
												</p>
												<input id="filePicker" type="file" name="file" onChange={handleFileChange} />
												{pickedFileName && (
													<div className="w-100 text-center my-3" id="picked-file">
														{pickedFileName}
													</div>
												)}
												{pickedFileName && (
													<div className="text-center">
														<button id="removeBtn" className="btn btn-primary " onClick={handleRemove}>
															Remove File
														</button>
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
								<div className="row scroll-y me-n7 pe-7">
									<div className="col-md-12 mb-7">
										<label className="required fw-bold fs-6 mb-2">Title</label>
										<input
											type="text"
											{...register("title", {
												required: "title is required",
											})}
											className="form-control form-control-solid mb-3 mb-lg-0"
											placeholder="Product Title"
										/>
									</div>
									<div className="col-12 mb-7">
										<label className="required fw-bold fs-6 mb-2">Description</label>
										<textarea
											className="form-control form-control-solid mb-3 mb-lg-0"
											{...register("description", {
												required: "description is required",
											})}
										/>
									</div>
									<div className="col-md-6 mb-7">
										<label className="required fw-bold fs-6 mb-2">Price</label>
										<input
											type="number"
											{...register("price", {
												required: "price is required",
												min: 1,
											})}
											className="form-control form-control-solid mb-3 mb-lg-0"
											placeholder="Price"
										/>
									</div>
									<div className="col-md-6 mb-7">
										<label className="required fw-bold fs-6 mb-2">Discount Percentage</label>
										<input
											type="number"
											className="form-control form-control-solid mb-3 mb-lg-0"
											placeholder="Discounted Price"
											{...register("discountPercentage", {
												required: "Discount Percentage Price is required",
												min: 0,
												max: 100,
											})}
										/>
									</div>
									<div className="col-md-6 mb-7">
										<label className="required fw-bold fs-6 mb-2">Stock</label>
										<input
											type="number"
											className="form-control form-control-solid mb-3 mb-lg-0"
											placeholder="Stock"
											{...register("stock", {
												required: "stock is required",
												min: 0,
											})}
										/>
									</div>

									<div className="col-md-6 mb-7">
										<label className="fw-bold fs-6 mb-2">Brand</label>
										<select
											className="select2-selection select2-selection--single form-select form-select-solid"
											{...register("brand", {
												required: "Brand is required",
											})}
										>
											<option value="">chose none</option>
											{brandList?.map((brand, index) => (
												<option key={index} value={brand.value}>
													{brand.label}
												</option>
											))}
										</select>
									</div>
									<div className="col-md-6 mb-7">
										<label className="fw-bold fs-6 mb-2">Category</label>
										<select
											className="select2-selection select2-selection--single form-select form-select-solid"
											{...register("category", {
												required: "Category is required",
											})}
										>
											<option value="">chose none</option>
											{categoryList?.map((category, index) => (
												<option key={index} value={category.value}>
													{category.label}
												</option>
											))}
										</select>
									</div>
									<div className="col-md-6 mb-7">
										<label className="required fw-bold fs-6 mb-2">Thumbnail</label>
										<input
											type="text"
											className="form-control form-control-solid mb-3 mb-lg-0"
											placeholder="Thumbnail"
											{...register("thumbnail", {
												required: "thumbnail is required",
											})}
										/>
									</div>
									<div className="col-md-6 mb-7">
										<label className="required fw-bold fs-6 mb-2">Image 1</label>
										<input
											type="text"
											className="form-control form-control-solid mb-3 mb-lg-0"
											placeholder="image 1"
											{...register("image1", {
												required: "image is required",
											})}
										/>
									</div>
									<div className="col-md-6 mb-7">
										<label className="required fw-bold fs-6 mb-2">Image 2</label>
										<input
											type="text"
											className="form-control form-control-solid mb-3 mb-lg-0"
											placeholder="Image 2"
											{...register("image2", {
												required: "Image is required",
											})}
										/>
									</div>
									<div className="col-md-6 mb-7">
										<label className="required fw-bold fs-6 mb-2">Image 3</label>
										<input
											type="text"
											className="form-control form-control-solid mb-3 mb-lg-0"
											placeholder="Image 3"
											{...register("image3", {
												required: "Image is required",
											})}
										/>
									</div>
								</div>
							</>
						</Modal.Body>
						<Modal.Footer>
							<div className="w-100 d-flex justify-content-between flex-wrap flex-row-reverse">
								<button type="submit" className="btn btn-primary ms-10">
									<span className="indicator-label ">Submit</span>
								</button>
								<button type="button" className="btn btn-light" onClick={() => setShowAddModal(false)}>
									Close
								</button>
							</div>
						</Modal.Footer>
					</form>
				</Modal>

				<DeleteModal handleDelete={handleDelete} showModal={showDeleteModal} setShowModal={setShowDeleteModal} />
			</div>
		</>
	);
};
export default User;
