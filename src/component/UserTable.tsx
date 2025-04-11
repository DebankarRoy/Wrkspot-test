import { UserProps } from "../types/type";

const UserTable = ({ users }: UserProps) => (
	<table>
		<thead>
			<tr>
				<th>Name</th>
				<th>Age</th>
				<th>Role</th>
				<th>Status</th>
			</tr>
		</thead>
		<tbody>
			{users.map((user) => (
				<tr key={user.id}>
					<td>{user.name}</td>
					<td>{user.age}</td>
					<td>{user.role}</td>
					<td>{user.isActive ? "Active" : "Not Active"}</td>
				</tr>
			))}
		</tbody>
	</table>
);

export default UserTable;
