import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export default function ProductSlider(props) {
	return (
		<>
			{props?.media?.length > 0 && (
				<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
					{props.media.map((item, index) => (
						<SwiperSlide key={index}>
							<img
								className="w-100 img-fluid h-300px rounded"
								alt="product-img"
								loading="lazy"
								src={`${import.meta.env.VITE_APP_API_URL}/products/media?filename=${item?.filename}&mimetype=${
									item?.mimetype
								}&width=500`}
								style={{ objectFit: "cover" }}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</>
	);
}
