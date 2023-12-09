const UserDetail = (props) => {
	const user = props?.user;
	return (
		<div className="tab-pane fade show active">
			<div className="profile__info">
				<h3 className="profile__info-title">Personal Details</h3>
				<div className="profile__info-content">
					<form action="#">
						<div className="row">
							<div className="col-xxl-6 col-md-6">
								<div className="profile__input-box">
									<div className="profile__input">
										<input type="text" placeholder="Enter your username" defaultValue={user.name} />
										<span>
											<svg width={17} height={19} viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M15.5 17.6C15.5 14.504 12.3626 12 8.5 12C4.63737 12 1.5 14.504 1.5 17.6"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className="col-xxl-6 col-md-6">
								<div className="profile__input-box">
									<div className="profile__input">
										<input type="email" placeholder="Enter your email" defaultValue={user.email} />
										<span>
											<svg width={18} height={16} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M13 14.6H5C2.6 14.6 1 13.4 1 10.6V5C1 2.2 2.6 1 5 1H13C15.4 1 17 2.2 17 5V10.6C17 13.4 15.4 14.6 13 14.6Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeMiterlimit={10}
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													d="M13 5.3999L10.496 7.3999C9.672 8.0559 8.32 8.0559 7.496 7.3999L5 5.3999"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeMiterlimit={10}
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
									</div>
								</div>
							</div>

							<div className="col-xxl-6 col-md-6">
								<div className="profile__input-box">
									<div className="profile__input">
										<input type="text" placeholder="Enter your number" defaultValue={user.phone} />
										<span>
											<svg width={15} height={18} viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M13.9148 5V13C13.9148 16.2 13.1076 17 9.87892 17H5.03587C1.80717 17 1 16.2 1 13V5C1 1.8 1.80717 1 5.03587 1H9.87892C13.1076 1 13.9148 1.8 13.9148 5Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													opacity="0.4"
													d="M9.08026 3.80054H5.85156"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
												<path
													opacity="0.4"
													d="M7.45425 14.6795C8.14522 14.6795 8.70537 14.1243 8.70537 13.4395C8.70537 12.7546 8.14522 12.1995 7.45425 12.1995C6.76327 12.1995 6.20312 12.7546 6.20312 13.4395C6.20312 14.1243 6.76327 14.6795 7.45425 14.6795Z"
													stroke="currentColor"
													strokeWidth="1.5"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className="col-xxl-6 col-md-6">
								<div className="profile__input-box">
									<div className="profile__input">
										<select style={{ display: "none" }}>
											<option>Male</option>
											<option>Female</option>
											<option>Others</option>
										</select>
										<div className="nice-select" tabIndex={0}>
											<span className="current">Male</span>
											<ul className="list">
												<li data-value="Male" className="option selected">
													Male
												</li>
												<li data-value="Female" className="option">
													Female
												</li>
												<li data-value="Others" className="option">
													Others
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="col-xxl-12">
								<div className="profile__input-box">
									<div className="profile__input">
										<input type="text" placeholder="Enter your address" defaultValue="3304 Randall Drive" />
										<span>
											<svg width={16} height={18} viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path
													d="M7.99377 10.1461C9.39262 10.1461 10.5266 9.0283 10.5266 7.64946C10.5266 6.27061 9.39262 5.15283 7.99377 5.15283C6.59493 5.15283 5.46094 6.27061 5.46094 7.64946C5.46094 9.0283 6.59493 10.1461 7.99377 10.1461Z"
													stroke="currentColor"
													strokeWidth="1.5"
												/>
												<path
													d="M1.19707 6.1933C2.79633 -0.736432 13.2118 -0.72843 14.803 6.2013C15.7365 10.2663 13.1712 13.7072 10.9225 15.8357C9.29079 17.3881 6.70924 17.3881 5.06939 15.8357C2.8288 13.7072 0.263493 10.2583 1.19707 6.1933Z"
													stroke="currentColor"
													strokeWidth="1.5"
												/>
											</svg>
										</span>
									</div>
								</div>
							</div>
							<div className="col-xxl-12">
								<div className="profile__input-box">
									<div className="profile__input">
										<textarea placeholder="Enter your bio" defaultValue={"Hi there, this is my bio..."} />
									</div>
								</div>
							</div>
							<div className="col-xxl-12">
								<div className="profile__btn">
									<button type="submit" className="tp-btn">
										Update Profile
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default UserDetail;
