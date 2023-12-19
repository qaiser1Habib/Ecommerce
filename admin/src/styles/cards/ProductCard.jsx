import { Link } from "react-router-dom";
import { InputSwitch } from "primereact/inputswitch";
import { discountedPrice } from "../../utils/constants";
import { useState } from "react";
import ProductSlider from "../sliders/ProductSlider";

const ProductCard = (props) => {
	const [checked, setChecked] = useState(false);
	const product = props.product;
	return (
		<>
			{product && (
				<div className="card shadow-sm mb-6 mb-xl-9 d-flex flex-column w-100">
					<div className="card-body py-3 px-3 card-scroll">
						<div className="text-center mb-2">
							<ProductSlider media={product?.media} />
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
						{product?.deleted && <p className="text-danger">Product Deleted</p>}
					</div>

					<div className="card-footer p-1 px-4 flex w-100 text-start mt-auto">
						<i
							className="fas fa-edit svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer"
							onClick={() => props.handleEditItemButton(product)}
						/>
						<i
							className="bi bi-trash-fill svg-icon svg-icon-5 svg-icon-gray-500 pb-3 pt-3 cursor-pointer"
							onClick={() => props.handleDeleteItemButton(product)}
						/>

						<div className="float-end">
							<InputSwitch checked={checked} onChange={(e) => setChecked(e.value)} />
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductCard;
