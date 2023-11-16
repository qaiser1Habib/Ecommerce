import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import useToast from "../store/hooks/useToast";
// import { useLoading } from "../store/hooks/useLoading";
// import { createBanner, deleteBanner, getBanners, updateBanner } from "../actions/banners";

import Modal from "react-bootstrap/Modal";
import { InputSwitch } from "primereact/inputswitch";
import { Link } from "react-router-dom";
import BreadCrumb from "../../partials/breadCrumb";
import DeleteModal from "../../../styles/modals/deleteModal";

const Content = () => {
	// const dispatch = useDispatch();
	// const { notify } = useToast();
	// const { isFetchingApi, setIsFetchingApi } = useLoading();
	// const hiddenImageFileInput = useRef();
	const [pickedFileName, setPickedFileName] = useState("");
	const [checked, setChecked] = useState(false);
	const [formData, setFormData] = useState();

	const [showAddModal, setShowAddModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const handleInput = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.valueAsNumber || e.target.value,
		});
	};

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

	return (
		<>
			<div className="fade-in">
				<BreadCrumb pageNames={["MY FILE"]} />

				<div className="container-fluid px-0">
					<div>
						<div className="container-xxl">
							<div className="row">
								<div className="d-flex flex-wrap flex-stack pt-3">
									<div className="d-flex flex-wrap flex-stack">
										<div className="fw-bolder fs-4 p-4">All FILE</div>
										<span className="badge badge-square badge-success">1</span>
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
																onClick={() => setShowAddModal(true)}
															>
																<i className="las la-plus fs-2 me-4" />
																Create Folder
															</button>
														</span>
													</li>
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
																onClick={() => setShowAddModal(true)}
															>
																<i className="las la-plus fs-2 me-4" />
																Upload File
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
							<div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex ">
								<div className="card shadow-sm mb-6 mb-xl-9 d-flex flex-column w-100">
									<div className="card-body py-3 px-3 card-scroll">
										<div className="text-center mb-2">
											<img
												className="w-100 img-fluid h-300px rounded"
												alt=""
												loading="lazy"
												src={"/assets/adminPanel/media/pages/1.jpg"}
												style={{ objectFit: "cover" }}
											/>
										</div>
										<div className="banner text-dark fw-bold text-center fs-4">Cloud Storage</div>
									</div>

									<div className="card-footer p-1 px-4 flex w-100 text-start mt-auto">
										<i
											className="fas fa-edit svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer"
											onClick={() => setShowAddModal(true)}
										/>

										<div className="float-end">
											<i
												className="fas fa-trash svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer"
												onClick={() => setShowDeleteModal(true)}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex ">
								<div className="card shadow-sm mb-6 mb-xl-9 d-flex flex-column w-100">
									<div className="card-body py-3 px-3 card-scroll">
										<div className="text-center mb-2">
											<img
												className="w-100 img-fluid h-300px rounded"
												alt=""
												loading="lazy"
												src={"/assets/adminPanel/media/pages/2.jpg"}
												style={{ objectFit: "cover" }}
											/>
										</div>
										<div className="banner text-dark fw-bold text-center fs-4">Tape Storage Pdf</div>
									</div>

									<div className="card-footer p-1 px-4 flex w-100 text-start mt-auto">
										<i
											className="fas fa-edit svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer"
											onClick={() => setShowAddModal(true)}
										/>

										<div className="float-end">
											<i
												className="fas fa-trash svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer"
												onClick={() => setShowDeleteModal(true)}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex ">
								<div className="card shadow-sm mb-6 mb-xl-9 d-flex flex-column w-100">
									<div className="card-body py-3 px-3 card-scroll">
										<div className="text-center mb-2">
											<img
												className="w-100 img-fluid h-300px rounded"
												alt=""
												loading="lazy"
												src={"/assets/adminPanel/media/pages/3.jpg"}
												style={{ objectFit: "cover" }}
											/>
										</div>
										<div className="banner text-dark fw-bold text-center fs-4">Network Storage</div>
									</div>

									<div className="card-footer p-1 px-4 flex w-100 text-start mt-auto">
										<i
											className="fas fa-edit svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer"
											onClick={() => setShowAddModal(true)}
										/>

										<div className="float-end">
											<i
												className="fas fa-trash svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer"
												onClick={() => setShowDeleteModal(true)}
											/>
										</div>
									</div>
								</div>
							</div>
							<div className="col-12 col-sm-6 col-lg-4 col-xl-3 d-flex ">
								<div className="card shadow-sm mb-6 mb-xl-9 d-flex flex-column w-100">
									<div className="card-body py-3 px-3 card-scroll">
										<div className="text-center mb-2">
											<img
												className="w-100 img-fluid h-300px rounded"
												alt=""
												loading="lazy"
												src={"/assets/adminPanel/media/pages/4.png"}
												style={{ objectFit: "cover" }}
											/>
										</div>
										<div className="banner text-dark fw-bold text-center fs-4">Network Word</div>
									</div>

									<div className="card-footer p-1 px-4 flex w-100 text-start mt-auto">
										<i
											className="fas fa-edit svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer"
											onClick={() => setShowAddModal(true)}
										/>

										<div className="float-end">
											<i
												className="fas fa-trash svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer"
												onClick={() => setShowDeleteModal(true)}
											/>
										</div>
									</div>
								</div>
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
												</label>{" "}
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

							<div className="d-flex flex-column scroll-y me-n7 pe-7" style={{ maxHeight: 1044 }}>
								<div className="fv-row mb-7">
									<label className="required fw-bold fs-6 mb-2">Title</label>
									<input
										type="text"
										name="title"
										className="form-control form-control-solid mb-3 mb-lg-0"
										placeholder="Banner Title"
										value={formData?.title || ""}
										onChange={(e) => handleInput(e)}
									/>
								</div>
								<div className="fv-row mb-7">
									<label className="required fw-bold fs-6 mb-2">Description</label>
									<textarea
										className="form-control form-control-solid mb-3 mb-lg-0"
										name="description"
										value={formData?.description || ""}
										onChange={(e) => handleInput(e)}
									/>
								</div>
							</div>
						</>
					</Modal.Body>
					<Modal.Footer>
						<div className="w-100 d-flex justify-content-between flex-wrap flex-row-reverse">
							<button className="btn btn-primary ms-10">
								<span className="indicator-label ">Submit</span>
							</button>
							<button type="button" className="btn btn-light" onClick={() => setShowAddModal(false)}>
								Close
							</button>
						</div>
					</Modal.Footer>
				</Modal>

				<DeleteModal showModal={showDeleteModal} setShowModal={setShowDeleteModal} />
			</div>
		</>
	);
};
export default Content;
