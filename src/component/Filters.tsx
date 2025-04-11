import { USER_DATA } from "../mock/mock";
import { FilterProps } from "../types/type";

const Filters = ({
	sortField,
	setSortField,
	sortOrder,
	setSortOrder,
	role,
	setRole,
	status,
	setStatus,
}: FilterProps) => (
	<div>
		<select
			value={sortField}
			onChange={(e) => setSortField(e.target.value as "name" | "age")}
		>
			<option value="name">Sort by name</option>
			<option value="age">Sort by age</option>
		</select>

		<button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
			{sortOrder === "asc" ? "Asc" : "Desc"}
		</button>

		<select value={role} onChange={(e) => setRole(e.target.value)}>
			<option value="">All roles</option>
			{[...new Set(USER_DATA.map((user) => user.role))].map((r) => (
				<option key={r} value={r}>
					{r}
				</option>
			))}
		</select>

		<label>
			<input
				type="radio"
				value=""
				checked={status === ""}
				onChange={() => setStatus("")}
			/>{" "}
			All
		</label>
		<label>
			<input
				type="radio"
				value="active"
				checked={status === "active"}
				onChange={() => setStatus("active")}
			/>{" "}
			Active
		</label>
		<label>
			<input
				type="radio"
				value="inActive"
				checked={status === "inActive"}
				onChange={() => setStatus("inActive")}
			/>{" "}
			Not Active
		</label>
	</div>
);

export default Filters;
