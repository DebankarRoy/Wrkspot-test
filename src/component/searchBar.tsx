import { SearchProps } from "../types/type";

const SearchBar = ({ search, setSearch }: SearchProps) => (
	<input
		type="text"
		placeholder="Search by name"
		value={search}
		onChange={(e) => setSearch(e.target.value)}
	/>
);

export default SearchBar;
