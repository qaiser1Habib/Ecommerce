import { useEffect, useState } from "react";
import BreadCrumb from "./partials/Breadcrumb";
import DeleteModal from "../styles/modals/deleteModal";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "../store/hook/useToast";
// import { useLoading } from "../store/hooks/useLoading";

import Modal from "react-bootstrap/Modal";
import PlainDataTable from "../styles/dataTables/PlainDataTable";
import { fetchAllOrdersAsync, orderUpdateAsync } from "../actions/orders";
import { selectOrders, selectTotalOrders } from "../store/redux/orders";

const Orders = () => {
	const dispatch = useDispatch();
	const { notify } = useToast();
	// const { isFetchingApi, setIsFetchingApi } = useLoading();
	const [formData, setFormData] = useState(null);
	// const [isUpdatingRecord, setIsUpdatingRecord] = useState(false);
	const [showAddModal, setShowAddModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);

	const orders = useSelector(selectOrders);
	const totalOrders = useSelector(selectTotalOrders);

	useEffect(() => {
		dispatch(fetchAllOrdersAsync({ formData: {}, notify }));
	}, [dispatch]);

	const handleEditItemButton = (orderDetail) => {
		setFormData(orderDetail);
		setShowAddModal(true);
	};
	const handleOrderUpdate = (e, order) => {
		e.preventDefault();
		const selectedStatus = e.target.querySelector("select").value;
		if (!selectedStatus) {
			notify("error", "Change Status First.");
			return;
		}
		const updatedOrder = { ...order, status: selectedStatus };
		dispatch(orderUpdateAsync({ formData: { ...updatedOrder }, notify }));
		setFormData(null);
		setShowAddModal(false);
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
										<div className="fw-bolder fs-4 p-4">All Orders</div>
										<span className="badge badge-square badge-success">{totalOrders}</span>
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
								data={orders}
								edit={handleEditItemButton}
								delete={handleDeleteItemButton}
								fieldsToShow={[
									"id",
									"items.product.title",
									"items.product.thumbnail",
									"totalItems",
									"totalPrice",
									"status",
									"selectedAddress.name",
									"selectedAddress.street",
								]}
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
					<form
						onSubmit={(e) => {
							handleOrderUpdate(e, formData);
						}}
					>
						<Modal.Body>
							<div className="d-flex flex-column scroll-y me-n7 pe-7" style={{ maxHeight: 1044 }}>
								<div className="fv-row mb-7">
									<label className="required fw-bold fs-6 mb-2">Status</label>
									<select className="select2-selection select2-selection--single form-select form-select-solid">
										<option value="">chose none</option>
										<option value="delivered">delivered</option>
										<option value="dispatch">dispatch</option>
										<option value="hold">hold</option>
										<option value="cancel">cancel</option>
									</select>
								</div>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<div className="w-100 d-flex justify-content-between flex-wrap flex-row-reverse">
								<button type="submit" className="btn btn-primary ms-10">
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
					</form>
				</Modal>

				<DeleteModal showModal={showDeleteModal} setShowModal={setShowDeleteModal} />
			</div>
		</>
	);
};
export default Orders;
