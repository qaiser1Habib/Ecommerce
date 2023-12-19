import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { FreeMode, Thumbs } from "swiper/modules";
import { useLocation } from "react-router-dom";

export default function App(props) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	const handleSlideChange = (swiper) => {
		setActiveSlideIndex(swiper.realIndex);
		if (thumbsSwiper && !thumbsSwiper.destroyed) {
			thumbsSwiper.slideTo(swiper.realIndex);
		}
	};

	const location = useLocation();

	return (
		<>
			<Swiper
				loop={true}
				spaceBetween={10}
				navigation={false}
				thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
				modules={[FreeMode, Thumbs]}
				className="w-100 mb-2"
				onSlideChange={handleSlideChange}
			>
				{props.images.map((item, index) => (
					<SwiperSlide className="w-100 border" key={index}>
						<img
							className="w-100"
							src={`${import.meta.env.VITE_APP_API_URL}/products/media?filename=${item?.filename}&mimetype=${
								item?.mimetype
							}&width=500`}
							alt="product images"
							style={{ objectFit: "contain", height: location.pathname === "/product-detail" ? "600px" : "400px" }}
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
					<SwiperSlide
						key={index}
						className={`${index === activeSlideIndex ? "active-slide" : "border"}`}
						style={{ width: "150px", height: "100px" }}
					>
						<img
							src={`${import.meta.env.VITE_APP_API_URL}/products/media?filename=${item?.filename}&mimetype=${
								item?.mimetype
							}&width=500`}
							className="w-100 h-100"
							alt="product images"
							style={{ objectFit: "contain" }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}
