import { useMemo } from "react";
import { FilteredParams, User } from "../types/type";

const UseFilteredUsers = (data: User[], param: FilteredParams) => {
	const { search, sortField, sortOrder, role, status } = param;
	return useMemo(() => {
		let users = data;
		if (search.trim()) {
			users = users.filter((user) => user.name.toLowerCase().includes(search));
		}
		if (role) {
			users = users.filter((user) => user.role === role);
		}
		if (status) {
			users = users.filter((user) =>
				status === "active" ? user.isActive : !user.isActive
			);
		}
		return [...users].sort((a: User, b: User) => {
			if (a[sortField] < b[sortField]) return sortOrder === "asc" ? -1 : 1;
			if (a[sortField] > b[sortField]) return sortOrder === "asc" ? 1 : -1;
			return 0;
		});
	}, [data, search, sortOrder, sortField, status, role]);
};

export default UseFilteredUsers;
