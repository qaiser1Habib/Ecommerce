const UserShippingAddress = () => {
	return (
		<div className="tab-pane fade show active">
			<div className="profile__password">
				<form action="#">
					<div className="row">
						<div className="col-xxl-12">
							<div className="tp-profile-input-box">
								<div className="tp-contact-input">
									<input name="old_pass" id="old_pass" type="password" />
								</div>
								<div className="tp-profile-input-title">
									<label htmlFor="old_pass">Old Password</label>
								</div>
							</div>
						</div>
						<div className="col-xxl-6 col-md-6">
							<div className="tp-profile-input-box">
								<div className="tp-profile-input">
									<input name="new_pass" id="new_pass" type="password" />
								</div>
								<div className="tp-profile-input-title">
									<label htmlFor="new_pass">New Password</label>
								</div>
							</div>
						</div>
						<div className="col-xxl-6 col-md-6">
							<div className="tp-profile-input-box">
								<div className="tp-profile-input">
									<input name="con_new_pass" id="con_new_pass" type="password" />
								</div>
								<div className="tp-profile-input-title">
									<label htmlFor="con_new_pass">Confirm Password</label>
								</div>
							</div>
						</div>
						<div className="col-xxl-6 col-md-6">
							<div className="profile__btn">
								<button type="submit" className="tp-btn">
									Update
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default UserShippingAddress;
