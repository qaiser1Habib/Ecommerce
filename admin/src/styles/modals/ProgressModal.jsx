import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const ProgressModal = (props) => {
	return (
		<Modal show={props?.showModal} aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body className="align-items-center justify-content-center">
				<div className="w-100 text-center">
					<div className="row justify-content-center mb-2">
						<div
							className="progress"
							role="progressbar"
							aria-label="Basic example"
							aria-valuenow={props?.heading}
							aria-valuemin="0"
							aria-valuemax="100"
						>
							<div className="progress-bar" style={{width:`${props?.heading}%`}}></div>
						</div>
						<h4 className="text-center mt-3">{props?.heading}</h4>

						<div>
							<label className="required fw-bold fs-6">{props?.description}</label>
						</div>
					</div>

					{props?.handleSubmit && (
						<Button variant="warning text-black rounded-5" onClick={props.handleSubmit}>
							Cancel
						</Button>
					)}
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default ProgressModal;
