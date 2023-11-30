import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputSwitch } from "primereact/inputswitch";
import { useLocation } from "react-router";

const PlainDataTable = (props) => {
	const location = useLocation();

	const [tableData, setTableData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [globalFilterValue, setGlobalFilterValue] = useState("");

	useEffect(() => {
		setTableData(props?.data || []);
	}, [props?.data]);

	const onGlobalFilterChange = (e) => {
		const value = e.target.value;
		setGlobalFilterValue(value);
	};

	// const arr = [1, 4, 5, 6, 7];
	// const newarr = arr.reduce((acc, curr) => {
	// 	if (curr > acc) {
	// 		acc = curr;
	// 	}
	// 	return acc;
	// }, 0);

	// console.log(newarr);

	const renderColumnBody = (rowData, columnField) => {
		const columnValue = columnField.split(".").reduce((obj, key) => {
			if (Array.isArray(obj)) {
				// If the current object is an array, return the value of the specified index
				return obj.map((item) => {
					return item[key];
				})[0];
			} else {
				// Otherwise, return the value of the key in the object
				return obj && obj[key];
			}
		}, rowData);

		if (columnField === "items.product.thumbnail") {
			const columnValue = columnField.split(".").reduce((obj, key) => {
				if (Array.isArray(obj)) {
					return obj.map((item) => {
						return item[key];
					})[0];
				} else {
					return obj && obj[key];
				}
			}, rowData);
			return (
				<img
					className=""
					style={{ objectFit: "cover", width: "100px", height: "70px" }}
					src={columnValue}
					alt="Image"
					loading="lazy"
				/>
			);
		} else if (columnField === "isActive") {
			return (
				<div className="text-center">
					<InputSwitch checked={columnValue} onChange={(e) => props.handleSwitch(e, rowData)} />
				</div>
			);
		} else if (columnField === "createdAt" || columnField === "updatedAt") {
			// Assuming "date" is the field for date columns
			const date = new Date(columnValue);
			return date.toLocaleString("en-US", { timeZone: "UTC" }); // Convert to localized format
		} else {
			return columnValue;
		}
	};

	const renderColumns = () => {
		const columns = props.fieldsToShow.map((columnField) => {
			let bodyClassName = null;

			if (columnField === "status") {
				bodyClassName = (rowData) => {
					const status = rowData[columnField];

					switch (status) {
						case "delivered":
							return "delivered-status";
						case "dispatch":
							return "dispatch-status";
						case "hold":
							return "hold-status";
						case "cancel":
							return "cancel-status";
						case "pending":
							return "pending-status";
						default:
							return null;
					}
				};
			}

			return (
				<Column
					key={columnField}
					field={columnField}
					header={columnField}
					body={(e) => <div style={{ wordBreak: "break-word" }}>{renderColumnBody(e, columnField)}</div>}
					sortable
					bodyClassName={bodyClassName} // Apply the bodyClassName for the "status" column
				/>
			);
		});

		columns.push(
			<Column
				key="actions"
				field="actions"
				header="Actions"
				body={(rowData) => (
					<div className="d-flex">
						<i
							className="fas fa-edit svg-icon svg-icon-5 svg-icon-gray-500 p-2 pe-5 pb-3 pt-3 cursor-pointer "
							onClick={() => props?.edit(rowData)}
						/>
						<i
							className="bi bi-trash-fill svg-icon svg-icon-5 svg-icon-gray-500 pb-3 pt-3 cursor-pointer"
							onClick={() => props?.delete(rowData)}
						/>
					</div>
				)}
			/>
		);

		return columns;
	};

	return (
		<div className="card">
			<DataTable
				value={tableData}
				paginator
				removableSort
				showGridlines
				rows={10}
				loading={loading}
				dataKey="_id"
				globalFilter={globalFilterValue}
				header={
					<div className="p-d-flex p-jc-between p-ai-center">
						<span className="p-input-icon-left">
							<i className="pi pi-search" />
							<InputText value={globalFilterValue} onChange={onGlobalFilterChange} placeholder="Keyword Search" />
						</span>
					</div>
				}
				emptyMessage="No record found."
			>
				{renderColumns()}
			</DataTable>
		</div>
	);
};

export default PlainDataTable;
