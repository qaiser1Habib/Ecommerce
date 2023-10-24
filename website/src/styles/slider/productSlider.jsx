import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function App() {
	const swiperProps = {
		slidesPerView: 4,
		spaceBetween: 15,
		loop: true,
		pagination: {
			el: ".swiper-pagination-trading",
		},
		autoplay: {
			delay: 2000,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 1.5,
			},
			340: {
				slidesPerView: 1,
				centeredSlides: true,
			},
		},
	};

	return (
		<>
			<Swiper navigation={true} modules={[Navigation]} className="mySwiper product-style2" {...swiperProps}>
				<SwiperSlide>
					<div
						className="product-box style-2 wow fadeInUp"
						data-wow-delay="0.1s"
						style={{ backgroundImage: 'url("/assets/images/gym/1.png")' }}
					>
						<div className="product-content">
							<div className="main-content">
								<h2 className="product-name">Home fitness equipment</h2>
								<span className="offer">UP TO 60% OFF</span>
							</div>
							<a href="shop-list.html" className="btn btn-outline-secondary">
								Shop Now
							</a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className="product-box style-2 wow fadeInUp"
						data-wow-delay="0.2s"
						style={{ backgroundImage: 'url("/assets/images/gym/2.png")' }}
					>
						<div className="product-content">
							<div className="main-content">
								<h2 className="product-name">Yoga mats and accessories</h2>
								<span className="offer">UP TO 60% OFF</span>
							</div>
							<a href="shop-list.html" className="btn btn-outline-secondary">
								Shop Now
							</a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className="product-box style-2 wow fadeInUp"
						data-wow-delay="0.3s"
						style={{ backgroundImage: 'url("/assets/images/gym/3.png")' }}
					>
						<div className="product-content">
							<div className="main-content">
								<h2 className="product-name">Plant-based protein supplements</h2>
								<span className="offer">UP TO 60% OFF</span>
							</div>
							<a href="shop-list.html" className="btn btn-outline-secondary">
								Shop Now
							</a>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					{" "}
					<div
						className="product-box style-2 wow fadeInUp"
						data-wow-delay="0.4s"
						style={{ backgroundImage: 'url("/assets/images/gym/4.png")' }}
					>
						<div className="product-content">
							<div className="main-content">
								<h2 className="product-name">Nike Sports shoes</h2>
								<span className="offer">UP TO 60% OFF</span>
							</div>
							<a href="shop-list.html" className="btn btn-outline-secondary">
								Shop Now
							</a>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
}
