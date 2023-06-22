// CreateUser Component for add new user

// Import Modules
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UserForm from "./UserForm";
import configData  from "../config.json";
// CreateUser Component
const CreateUser = () => {
    let navigate = useNavigate();	
    const [formValues] =
        useState({ nume: '',prenume:'', email: '',  telefon: '', cnp:'', datanastere:'' })
    // onSubmit handler
    const onSubmit = userObject => {
        axios.post(
            configData.SERVER_URL,
            userObject)
            .then(res => {
                if (res.status === 200){
                    alert('User successfully created');
                    navigate("/user-list");
                }
                else
                    Promise.reject()
            })
            .catch(err => alert('Something went wrong'))
    }

    // Return user form
    return (
        <UserForm initialValues={formValues}
            onSubmit={onSubmit}
            enableReinitialize >
            Create User bbbbb
        </UserForm>
    )
}

// Export CreateUser Component
export default CreateUser