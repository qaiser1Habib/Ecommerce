import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedIn } from "../../../store/redux/auth";
import { signOut } from "../../../actions/auth";
import { Navigate } from "react-router-dom";
import { useToast } from "../../../store/hook/useToast";

const Logout = () => {
	const dispatch = useDispatch();
	const user = useSelector(userLoggedIn);
	const { notify } = useToast();

	useEffect(() => {
		const handleSignOut = async () => {
			try {
				await dispatch(signOut(notify));
				window.location.reload();
			} catch (error) {
				notify("error", "Failed to sign out. Please try again.");
			}
		};

		handleSignOut();
	}, [dispatch, notify]);

	return <>{!user && <Navigate to="/login" replace={true} />}</>;
};

export default Logout;
