// EditUser Component for update user data

// Import Modules
import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import { format, parseISO } from 'date-fns'
import UserForm from "./UserForm";
import configData  from "../config.json";
// EditUser Component
const EditUser = (props) => {
const [formValues, setFormValues] = useState({
	id:"",
	nume: "",
	prenume: "",
	email: "",
    telefon:"",
    cnp:"",
	datanastere:''
});
const { id } = useParams();
console.log(id);
let navigate = useNavigate();	
//onSubmit handler
const onSubmit = (userObject) => {
   
    console.log(userObject);
	axios
	.put(
		configData.SERVER_URL + id,
		userObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("User successfully updated");
		navigate("/user-list");
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong" +err));
};

// Load data from server and reinitialize user form
useEffect(() => {
	axios
	.get(
		configData.SERVER_URL + id
	)
	.then((res) => {
        console.log(res);
		const { id, nume, prenume, email,telefon,cnp} = res.data['users'];
		const mydate = res.data['users'].datanastere;
		let datanastere = format(parseISO(mydate),'yyyy-MM-dd');
		
		setFormValues({ id, nume, prenume, email,telefon,cnp,datanastere });
	})
	.catch((err) => console.log(err));
},[id]);

// Return user form
return (
	<UserForm
	initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize
	>
	Update User
	</UserForm>
);
};

// Export EditUser Component
export default EditUser;