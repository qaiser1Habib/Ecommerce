import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailSlider from "../slider/ProductDetailSlider";
import { addToCartAsync } from "../../actions/cart";
import { useToast } from "../../store/hooks/useToast";
import { selectItems } from "../../store/redux/cart";
import { userLoggedIn } from "../../store/redux/auth";

const QuickViewModal = (props) => {
	const product = props?.product;

	const dispatch = useDispatch();
	const { notify } = useToast();
	const [quantity, setQuantity] = useState(1);
	const items = useSelector(selectItems);
	const loggedIn = useSelector(userLoggedIn || false);
	const rating = product?.rating;

	const handleClose = () => {
		props.setProductQuickView(null);
		props.SetShow(false);
	};

	const stars = Array.from({ length: 5 }, (_, index) => {
		if (index < Math.ceil(rating)) {
			return <i key={index} className="fa-solid fa-star" style={{ color: "#FFB21D" }} />;
		}
	});

	const increaseQuantity = () => {
		if (loggedIn) {
			setQuantity(quantity + 1);
		}
	};

	const decreaseQuantity = () => {
		if (quantity > 0 && loggedIn) {
			setQuantity(quantity - 1);
		}
	};

	const handleCart = () => {
		if (items.findIndex((item) => item.product.id === product.id) < 0) {
			dispatch(addToCartAsync({ formData: { product: product.id, quantity: quantity }, notify }));
		} else {
			notify("error", "Product Already in Cart.");
		}
	};

	const handleNavigate = () => {
		notify("warning", "Login first to access this feature.");
	};

	return (
		<Modal show={props.show} centered size="xl" onHide={() => handleClose()}>
			<Modal.Body>
				<div className="tp-product-modal-content d-lg-flex align-items-start">
					<button type="button" className="tp-product-modal-close-btn" onClick={() => handleClose()}>
						<i className="fa-regular fa-xmark" />
					</button>
					<div className="row">
						<div className="col-5">{product?.media && <ProductDetailSlider images={product?.media} />}</div>
						<div className="col-7">
							<div className="tp-product-details-wrapper">
								<div className="tp-product-details-category">
									<span>{product?.category}</span>
								</div>
								<h3 className="tp-product-details-title">{product?.title}</h3>

								<div className="tp-product-details-inventory d-flex align-items-center mb-10">
									<div className="tp-product-details-stock mb-10">
										<span>In Stock</span>
									</div>
									<div className="tp-product-details-rating-wrapper d-flex align-items-center mb-10">
										<div className="tp-product-details-rating">{stars}</div>
										<div className="tp-product-details-reviews">{rating !== 0 && <span>{rating}</span>}</div>
									</div>
								</div>
								<p>{product?.description}</p>

								<div className="tp-product-details-price-wrapper mb-20">
									<span className="tp-product-details-price old-price me-2">$ {product?.price}</span>
									<span className="tp-product-details-price new-price">
										${Math.round(product?.price * (1 - product?.discountPercentage / 100))}
									</span>
								</div>

								<div className="tp-product-details-action-wrapper">
									<h3 className="tp-product-details-action-title">Quantity</h3>
									<div className="tp-product-details-action-item-wrapper d-flex align-items-center">
										<div className="tp-product-details-quantity">
											<div className="tp-product-quantity mb-15 mr-15">
												<a type="button" className="tp-cart-minus" onClick={decreaseQuantity}>
													<i className="fa fa-minus" aria-hidden="true"></i>
												</a>
												<input className="tp-cart-input" type="text" value={quantity} readOnly />
												<a type="button" className="tp-cart-plus" onClick={increaseQuantity}>
													<i className="fa fa-plus" aria-hidden="true"></i>
												</a>
											</div>
										</div>
										<div className="tp-product-details-add-to-cart mb-15 w-100">
											{loggedIn ? (
												<button onClick={() => handleCart()} className="tp-product-details-add-to-cart-btn w-100">
													Add To Cart
												</button>
											) : (
												<button onClick={() => handleNavigate()} className="tp-product-details-add-to-cart-btn w-100">
													Add To Cart
												</button>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal.Body>
		</Modal>
	);
};

export default QuickViewModal;
