const UserActivity = () => {
	return (
		<div className="tab-pane fade show active">
			<div className="profile__notification">
				<div className="profile__notification-top mb-30">
					<h3 className="profile__notification-title">My activity settings</h3>
					<p>
						Stay up to date with notification on activity that involves you including mentions, messages, replies to your
						bids, new items, sale and administrative updates{" "}
					</p>
				</div>
				<div className="profile__notification-wrapper">
					<div className="profile__notification-item mb-20">
						<div className="form-check form-switch d-flex align-items-center">
							<input className="form-check-input" type="checkbox" role="switch" id="like" defaultChecked="" />
							<label className="form-check-label" htmlFor="like">
								Like &amp; Follows Notifications
							</label>
						</div>
					</div>
					<div className="profile__notification-item mb-20">
						<div className="form-check form-switch d-flex align-items-center">
							<input className="form-check-input" type="checkbox" role="switch" id="post" defaultChecked="" />
							<label className="form-check-label" htmlFor="post">
								Post, Comments &amp; Replies Notifications
							</label>
						</div>
					</div>
					<div className="profile__notification-item mb-20">
						<div className="form-check form-switch d-flex align-items-center">
							<input className="form-check-input" type="checkbox" role="switch" id="new" defaultChecked="" />
							<label className="form-check-label" htmlFor="new">
								New Product Notifications
							</label>
						</div>
					</div>
					<div className="profile__notification-item mb-20">
						<div className="form-check form-switch d-flex align-items-center">
							<input className="form-check-input" type="checkbox" role="switch" id="sale" defaultChecked="" />
							<label className="form-check-label" htmlFor="sale">
								Product on sale Notifications
							</label>
						</div>
					</div>
					<div className="profile__notification-item mb-20">
						<div className="form-check form-switch d-flex align-items-center">
							<input className="form-check-input" type="checkbox" role="switch" id="payment" defaultChecked="" />
							<label className="form-check-label" htmlFor="payment">
								Payment Notifications
							</label>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserActivity;
