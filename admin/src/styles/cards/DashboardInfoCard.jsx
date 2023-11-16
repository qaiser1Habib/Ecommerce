import { Link } from "react-router-dom";

const DashboardInfoCard = (props) => {
	return (
		<Link className="col-md-3" to={props?.link}>
			<div className="bg-gray-100 bg-opacity-70 rounded-2 px-6 py-5 ">
				<div className="d-flex justify-content-between">
					{/*begin::Symbol*/}
					<div className="symbol symbol-30px me-5 mb-8">
						<span className="symbol-label">
							{/*begin::Svg Icon | path: icons/duotune/medicine/med005.svg*/}
							<span className="fs-2qx fa fa-window-restore  text-primary"></span>
							{/*end::Svg Icon*/}
						</span>
					</div>
					{/*end::Symbol*/}
					{/*begin::Symbol*/}
					<div className="symbol   me-5 mb-8">
						<span className="text-dark fw-bold d-block fs-2qx lh-1 mb-1">{props?.count}</span>
					</div>
					{/*end::Symbol*/}
				</div>
				{/*begin::Stats*/}
				<div className=" mt-10">
					{/*begin::Number*/}
					<span className="text-gray-700 fw-bold fs-2">{props?.title}</span>
					{/*end::Number*/}
				</div>
				{/*end::Stats*/}
			</div>
		</Link>
	);
};

export default DashboardInfoCard;
