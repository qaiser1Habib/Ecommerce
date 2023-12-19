import { useDispatch, useSelector } from "react-redux";
import BannerSlider from "../styles/slider/BannerSlider";
import { useEffect, useState } from "react";
import Products from "./component/home/Products";
import Categories from "./component/home/Categories";
import { fetchAllProductsAsync } from "../actions/productSlice";
import { selectAllProducts, selectTotalItems } from "../store/redux/products";
import Pagination from "../styles/pagination/Pagination";
import { useToast } from "../store/hooks/useToast";

const Home = () => {
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	const products = useSelector(selectAllProducts);
	const totalItems = useSelector(selectTotalItems);
	const { notify } = useToast();

	const limit = 12;
	const handlePage = (page) => {
		setPage(page);
	};
	useEffect(() => {
		dispatch(fetchAllProductsAsync({ formData: { page: page, limit: limit }, notify }));
	}, [dispatch, page]);

	

	return (
		<>
			<section className="tp-slider-area p-relative z-index-1">
				<BannerSlider />
			</section>

			<section className="tp-product-category pt-60 pb-15">
				<Categories />
			</section>

			<section className="tp-product-area pb-55">
				<div className="container">
					<Products products={products} />
					{products.length > 0 && (
						<Pagination
							totalItems={totalItems}
							limit={limit}
							page={page}
							setPage={setPage}
							handlePage={handlePage}
						></Pagination>
					)}
				</div>
			</section>
		</>
	);
};

export default Home;
