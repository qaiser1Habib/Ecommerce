import { useState } from "react";
import BreadCrumb from "./partials/breadCrumb";
import DeleteModal from "../styles/modals/deleteModal";
import ProgressModal from "../styles/modals/ProgressModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../store/hook/useToast";

import { useForm } from "react-hook-form";

import Modal from "react-bootstrap/Modal";
import { selectAllProducts, selectTotalItems } from "../store/redux/product";
import { createProductAsync, deleteProductAsync, fetchAllProductsAsync, updateProductAsync } from "../actions/productSlice";
import { useEffect } from "react";
import { ALLOWED_MEDIA_TYPES } from "../utils/constants";
import ProductCard from "../styles/cards/ProductCard.jsx";

const User = () => {
	const dispatch = useDispatch();
	const { notify } = useToast();

	const [formData, setFormData] = useState();
	const [brandList, setBrandList] = useState(null);
	const [categoryList, setCategoryList] = useState(null);
	const [showAddModal, setShowAddModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [isUpdatingRecord, setIsUpdatingRecord] = useState(false);
	const [page, setPage] = useState(1);
	const products = useSelector(selectAllProducts);
	const totalItems = useSelector(selectTotalItems);
	const [showUploadProgressModal, setShowUploadProgressModal] = useState(false);
	const [processingStatus, setProcessingStatus] = useState(null);

	const handleUploadMedia = (e) => {
		let media = [];
		for (let file of e.target.files) media.push({ filename: file, mimetype: file.type });

		if (media?.length > 4) {
			alert("You can only select upto 3 images for each product");
		} else {
			setFormData({
				...formData,
				media: media,
			});
		}
	};

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

	const handleFormSubmit = async (data) => {
		setShowUploadProgressModal(true);
		const product = { ...data };
		if (isUpdatingRecord) {
			product.id = selectedProduct.id;
		}
		if (isUpdatingRecord) {
			await dispatch(
				updateProductAsync({
					formData: { ...product, ...formData },
					notify,
					uploadProgress: (progressEvent) => {
						const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total) * 100);
						setProcessingStatus(percentCompleted);
					},
				})
			).then(({ payload }) => payload?.id && setShowAddModal(false));
		} else {
			await dispatch(
				createProductAsync({
					formData: { ...product, ...formData },
					notify,
					uploadProgress: (progressEvent) => {
						const percentCompleted = Math.round((progressEvent.loaded / progressEvent.total) * 100);
						setProcessingStatus(percentCompleted);
					},
				})
			).then(({ payload }) => payload?.id && setShowAddModal(false));
		}
		reset();
		setShowUploadProgressModal(false);
		setProcessingStatus(null);
	};
	const handleLoadMore = () => {
		setPage((prevPage) => prevPage + 1);
		dispatch(fetchAllProductsAsync({ formData: { page: page + 1, limit: limit }, notify }));
	};

	const handleCancelButton = () => {
		window.location.reload();
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
									<ProductCard
										product={product}
										handleEditItemButton={handleEditItemButton}
										handleDeleteItemButton={handleDeleteItemButton}
									/>
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
									<div className="fv-row mb-7">
										<label className="required fw-bold fs-6 mb-2">Upload Product</label>
										<input
											type="file"
											className="form-control form-control-solid mb-3 mb-lg-0"
											placeholder="Product Title"
											multiple
											accept={ALLOWED_MEDIA_TYPES}
											onChange={handleUploadMedia}
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

				{showUploadProgressModal && (
					<ProgressModal
						showModal={showUploadProgressModal}
						setShowModal={setShowUploadProgressModal}
						handleSubmit={handleCancelButton}
						heading={processingStatus}
						description="Please wait for the process to complete, do not close browser."
					/>
				)}
			</div>
		</>
	);
};
export default User;
