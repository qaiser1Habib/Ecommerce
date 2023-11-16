import { LottieIcon } from "../icons/LottieIcon";
import Modal from "react-bootstrap/Modal";

const DeleteModal = (props) => {
	return (
		<>
			<Modal
				show={props?.showModal}
				onHide={() => props?.setShowModal(false)}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered>
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">
						<h5 className="modal-title">Are You sure ?</h5>
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="d-flex flex-column scroll-y me-n7 pe-7 text-center">
						<div className="row justify-content-center">
							<LottieIcon iconType="delete" style={{ width: "200px", height: "200px" }} />
						</div>

						<div className="fv-row mb-7">
							<label className="required fw-bold fs-6 mb-2">Do you really want to delete this record?</label>

							<label className="required fw-bold fs-6 mb-2">
								Deleting this, is a permanent action and cannot be undone. All associated data will also be permanently
								deleted.
							</label>
						</div>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<div className="w-100 d-flex justify-content-between flex-wrap flex-row-reverse">
						<button type="button" className="btn btn-danger ms-10" onClick={props?.handleDelete}>
							<span className="indicator-label">Delete</span>
							<span className="indicator-progress">
								Please wait...
								<span className="spinner-border spinner-border-sm align-middle ms-2" />
							</span>
						</button>
						<button type="button" className="btn btn-light" onClick={() => props?.setShowModal(false)}>
							Close
						</button>
					</div>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default DeleteModal;
