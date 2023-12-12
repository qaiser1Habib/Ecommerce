import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";

export default function App(props) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const handleSlideChange = (swiper) => {
		setActiveSlideIndex(swiper.realIndex);
		if (thumbsSwiper && !thumbsSwiper.destroyed) {
			thumbsSwiper.slideTo(swiper.realIndex);
		}
	};

	return (
		<>
			<Swiper
				loop={true}
				spaceBetween={10}
				navigation={false}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={[FreeMode, Thumbs]}
				className="product-images-slider mb-2"
				onSlideChange={handleSlideChange}
			>
				{props.images.map((item, index) => (
					<SwiperSlide key={index} className="border">
						<img
							className="w-100"
							src={`${import.meta.env.VITE_APP_API_URL}/products/media?filename=${item?.filename}&mimetype=${
								item?.mimetype
							}&width=500`}
							alt="product images"
							style={{ objectFit: "contain", height: "600px" }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				loop={true}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Thumbs]}
				className="mySwiper"
				onSlideChange={handleSlideChange}
			>
				{props.images.map((item, index) => (
					<SwiperSlide key={index} className={index === activeSlideIndex ? "active-slide" : "border"}>
						<div style={{ width: "150px", height: "100px" }}>
							<img
								src={`${import.meta.env.VITE_APP_API_URL}/products/media?filename=${item?.filename}&mimetype=${
									item?.mimetype
								}&width=500`}
								className="w-100 h-100"
								alt="product images"
								style={{ objectFit: "contain" }}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

// import "../../assets/css/product-image-slider.css";
// import PropTypes from "prop-types";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Thumbs } from "swiper/modules";
// import { useState } from "react";

// const  ProductImagesSlider = (props) => {
// 	const [activeThumb, setActiveThumb] = useState();

// 	return (
// 		<>
// 			<Swiper
// 				loop={true}
// 				spaceBetween={10}
// 				navigation={true}
// 				modules={[Navigation, Thumbs]}
// 				grabCursor={true}
// 				thumbs={{ swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null }}
// 				className="product-images-slider"
// 			>
// 				{props.images.map((item, index) => (
// 					<SwiperSlide key={index}>
// 						<img className="img-fluid" src={item} alt="product images" />
// 					</SwiperSlide>
// 				))}
// 			</Swiper>
// 			<Swiper
// 				onSwiper={setActiveThumb}
// 				loop={true}
// 				spaceBetween={10}
// 				slidesPerView={4}
// 				modules={[Navigation, Thumbs]}
// 				className="product-images-slider-thumbs"
// 			>
// 				{props.product?.media.length
// 					? props.product?.media.map((item, index) => (
// 							<SwiperSlide key={index}>
// 								<div className="product-images-slider-thumbs-wrapper">
// 									<img
// 										className="img-fluid"
// 										// src={`${import.meta.env.VITE_APP_API_URL}/products/media?filename=${item?.filename}&mimetype=${
// 										// 	item?.mimetype
// 										// }&width=500`}
// 										src={`${import.meta.env.VITE_APP_API_URL}/products/media?filename=${item?.filename}&mimetype=${
// 											item?.mimetype
// 										}&width=500`}
// 										alt="product images"
// 									/>
// 								</div>
// 							</SwiperSlide>
// 					  ))
// 					: props.product?.images.map((item, index) => (
// 							<SwiperSlide key={index}>
// 								<div className="product-images-slider-thumbs-wrapper">
// 									<img className="img-fluid" src={item} alt="product images" />
// 								</div>
// 							</SwiperSlide>
// 					  ))}
// 			</Swiper>
// 		</>
// 	);
// };

// ProductImagesSlider.propTypes = {
// 	images: PropTypes.array.isRequired,
// };

// export default ProductImagesSlider;
