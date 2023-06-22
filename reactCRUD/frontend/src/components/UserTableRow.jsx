import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format, parseISO } from 'date-fns'
import axios from "axios";
import configData  from "../config.json";
const UserTableRow = (props) => {
	//console.log(props.obj);
const { id, nume, prenume, email,  telefon, cnp,datanastere,dataadaugare } = props.obj;

const deleteUser = () => {
	axios
	.delete(configData.SERVER_URL + id)
	.then((res) => {
		if (res.status === 200) {
		alert("User successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{nume}</td>
    <td>{prenume}</td>
	<td>{email}</td>
	<td>{telefon}</td>
	<td>{cnp}</td>
	<td>{format(parseISO(datanastere),'yyyy-MM-dd')}</td>
	<td>{format(parseISO(dataadaugare),'yyyy-MM-dd')}</td>
	<td>
		<Link className="edit-link"
		to={"/edit-user/" + id}>
		Edit
		</Link>
		<Button onClick={deleteUser}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default UserTableRow;