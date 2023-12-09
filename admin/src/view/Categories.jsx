import { useState } from "react";
import BreadCrumb from "./partials/Breadcrumb";
import DeleteModal from "../styles/modals/deleteModal";
// import { useDispatch, useSelector } from "react-redux";
// import useToast from "../store/hooks/useToast";
// import { useLoading } from "../store/hooks/useLoading";

import Modal from "react-bootstrap/Modal";
import PlainDataTable from "../styles/dataTables/PlainDataTable";

const Categories = () => {
	// const dispatch = useDispatch();
	// const { notify } = useToast();
	// const { isFetchingApi, setIsFetchingApi } = useLoading();

	// const [formData, setFormData] = useState();
	// const [isUpdatingRecord, setIsUpdatingRecord] = useState(false);

	const [showAddModal, setShowAddModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const data = [
		{
			createdAt: "2023-09-16T09:17:51.981Z",
			createdBy: "64ddbc3b9139eb0b48d72faf",
			isActive: true,
			title: "Cloud Storage",
			description: "Lorem Ipsum is simply dummy text of the printing ",
			updatedAt: "2023-09-16T09:18:17.426Z",
			updatedBy: "64ddbc3b9139eb0b48d72faf",
		},
		{
			createdAt: "2023-09-16T09:17:51.981Z",
			createdBy: "64ddbc3b9139eb0b48d72faf",
			isActive: true,
			description: "Lorem Ipsum is simply dummy text of the printing ",
			title: "Tape Storage",
			updatedAt: "2023-09-16T09:18:17.426Z",
			updatedBy: "64ddbc3b9139eb0b48d72faf",
		},
		{
			createdAt: "2023-09-16T09:17:51.981Z",
			createdBy: "64ddbc3b9139eb0b48d72faf",
			isActive: true,
			title: "Optical Discs",
			description: "Lorem Ipsum is simply dummy text of the printing ",
			updatedAt: "2023-09-16T09:18:17.426Z",
			updatedBy: "64ddbc3b9139eb0b48d72faf",
		},
		{
			createdAt: "2023-09-16T09:17:51.981Z",
			createdBy: "64ddbc3b9139eb0b48d72faf",
			isActive: true,
			title: "Storage Area Network",
			description: "Lorem Ipsum is simply dummy text of the printing ",
			updatedAt: "2023-09-16T09:18:17.426Z",
			updatedBy: "64ddbc3b9139eb0b48d72faf",
		},
		{
			createdAt: "2023-09-16T09:17:51.981Z",
			createdBy: "64ddbc3b9139eb0b48d72faf",
			isActive: true,
			description: "Lorem Ipsum is simply dummy text of the printing ",
			title: "Enterprise Storage Systems",
			updatedAt: "2023-09-16T09:18:17.426Z",
			updatedBy: "64ddbc3b9139eb0b48d72faf",
		},
		{
			createdAt: "2023-09-16T09:17:51.981Z",
			createdBy: "64ddbc3b9139eb0b48d72faf",
			isActive: true,
			title: "Object Storage",
			description: "Lorem Ipsum is simply dummy text of the printing ",
			updatedAt: "2023-09-16T09:18:17.426Z",
			updatedBy: "64ddbc3b9139eb0b48d72faf",
		},
	];

	const handleEditItemButton = () => {
		setShowAddModal(true);
	};

	const handleDeleteItemButton = () => {
		setShowDeleteModal(true);
	};

	return (
		<>
			<div className="fade-in">
				<BreadCrumb pageNames={["Categories"]} />

				<div className="container-fluid px-0">
					<div>
						<div className="container-xxl">
							<div className="row">
								<div className="d-flex flex-wrap flex-stack pt-3">
									<div className="d-flex flex-wrap flex-stack">
										<div className="fw-bolder fs-4 p-4">All Categories</div>
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
															>
																<i className="las la-plus fs-2 me-4" />
																New Categories
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
							<PlainDataTable
								data={data}
								edit={handleEditItemButton}
								delete={handleDeleteItemButton}
								fieldsToShow={["title", "description", "createdAt", "updatedAt", "isActive"]}
							/>
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
							<div className="d-flex flex-column scroll-y me-n7 pe-7" style={{ maxHeight: 1044 }}>
								<div className="fv-row mb-7">
									<label className="required fw-bold fs-6 mb-2">Title</label>
									<input
										type="text"
										name="title"
										className="form-control form-control-solid mb-3 mb-lg-0"
										placeholder="PhotographyType Title"
									/>
								</div>
								<div className="fv-row mb-7">
									<label className="required fw-bold fs-6 mb-2">Description</label>
									<textarea className="form-control form-control-solid mb-3 mb-lg-0" name="description" />
								</div>
							</div>
						</>
					</Modal.Body>
					<Modal.Footer>
						<div className="w-100 d-flex justify-content-between flex-wrap flex-row-reverse">
							<button className="btn btn-primary ms-10">
								<span className="indicator-label">Submit</span>

								<span className="indicator-progress">
									Please wait...
									<span className="spinner-border spinner-border-sm align-middle ms-2" />
								</span>
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
export default Categories;
