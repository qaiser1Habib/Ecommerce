const userOrders = (props) => {
	return (
		<div className="tab-pane fade show active">
			<div className="profile__ticket table-responsive">
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Order Id</th>
							<th scope="col">Product Title</th>
							<th scope="col">Status</th>
							<th scope="col">View</th>
						</tr>
					</thead>
					<tbody>
						{props?.orders?.map((order, index) => (
							<tr key={index}>
								<th scope="row"> #{order.id}</th>
								<td data-info="title">
									{order?.items?.map((item, itemIndex) => (
										<span key={itemIndex}>
											{item.product?.title}
											{itemIndex < order.items.length - 1 && ", "}
										</span>
									))}
								</td>

								<td
									className={`status ${order.status === "pending" && "pending"} ${
										order.status === "delivered" && "delivered"
									} ${order.status === "dispatch" && "dispatch"} ${order.status === "hold" && "hold"} ${
										order.status === "cancel" && "cancel"
									}`}
									data-info={`status ${order.status}`}
								>
									{order.status}
								</td>
								<td>
									<a href="#" className="tp-logout-btn">
										Invoice
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default userOrders;
