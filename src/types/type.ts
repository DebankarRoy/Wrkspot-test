export interface User {
	id: number;
	name: string;
	age: number;
	role: string;
	isActive: boolean;
}
export interface FilterProps {
	sortField: "name" | "age";
	setSortField: (value: "name" | "age") => void;
	sortOrder: "asc" | "desc";
	setSortOrder: (value: "asc" | "desc") => void;
	role: string;
	setRole: (value: string) => void;
	status: "active" | "inActive" | "";
	setStatus: (value: "active" | "inActive" | "") => void;
}
export interface UserProps {
	users: User[];
}
export interface SearchProps {
	search: string;
	setSearch: (value: string) => void;
}
export interface FilteredParams {
	search: string;
	sortOrder: "asc" | "desc";
	sortField: "name" | "age";
	role: string;
	status: "active" | "inActive" | "";
}
