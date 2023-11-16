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
		setTableData(props.data || []);
	}, [props.data]);

	const onGlobalFilterChange = (e) => {
		const value = e.target.value;
		setGlobalFilterValue(value);
	};

	const renderColumnBody = (rowData, columnField) => {
		const columnValue = rowData[columnField];

		if (columnField === "featuredImage") {
			return (
				<img
					className=""
					style={{ height: "70px" }}
					src={`${import.meta.env.VITE_APP_API_URL}/v1${location.pathname}/image?filename=${columnValue}&width=500`}
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
		}

		return columnValue;
	};

	const renderColumns = () => {
		const columns = props.fieldsToShow.map((columnField) => {
			if (columnField !== "_id") {
				return (
					<Column
						key={columnField}
						field={columnField}
						header={columnField}
						body={(e) => <div style={{ wordBreak: "break-word" }}>{renderColumnBody(e, columnField)}</div>}
						sortable
					/>
				);
			}

			return null;
		});

		// Add a custom column for the edit and delete icons
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
