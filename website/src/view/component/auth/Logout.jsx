import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../../../store/redux/auth";
import { signOut } from "../../../actions/auth";
import { Navigate } from "react-router-dom";
import { useToast } from "../../../store/hooks/useToast";

const Logout = () => {
	const dispatch = useDispatch();
	const user = useSelector(userLoggedIn);
	const { notify } = useToast();

	useEffect(() => {
		dispatch(signOut(notify));
	}, []);

	return <>{!user && <Navigate to="/login" replace={true} />}</>;
};

export default Logout;
