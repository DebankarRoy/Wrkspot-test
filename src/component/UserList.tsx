import { useState } from "react";
import { USER_DATA } from "../mock/mock";
import UseFilteredUsers from "../hooks/useFilteredUsers";
import Filters from "./Filters";
import SearchBar from "./searchBar";
import UserTable from "./UserTable";

const UserList = () => {
	const [search, setSearch] = useState("");
	const [sortField, setSortField] = useState<"name" | "age">("name");
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
	const [role, setRole] = useState("");
	const [status, setStatus] = useState<"active" | "inActive" | "">("");

	const filteredUsers = UseFilteredUsers(USER_DATA, {
		search,
		sortField,
		sortOrder,
		role,
		status,
	});

	return (
		<div>
			<SearchBar search={search} setSearch={setSearch} />
			<Filters
				sortField={sortField}
				setSortField={setSortField}
				sortOrder={sortOrder}
				setSortOrder={setSortOrder}
				role={role}
				setRole={setRole}
				status={status}
				setStatus={setStatus}
			/>
			<UserTable users={filteredUsers} />
		</div>
	);
};

export default UserList;
