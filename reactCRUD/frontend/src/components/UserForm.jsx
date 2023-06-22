import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button } from "react-bootstrap";

const UserForm = (props) => {
    const validationSchema = Yup.object().shape({
        nume: Yup.string().required("Camp obligatoriu!"),

        prenume: Yup.string().required("Camp obligatoriu!"),

        email: Yup.string()
            .email("Adresa de email invalida!")
            .required("Camp obligatoriu!"),
        
        telefon: Yup.string()
            .matches(/^[0-9]+$/, "Doar cifre")
            .min(10, 'De lungime 10')
            .max(10, 'De lungime 10')
            .required("Camp obligatoriu!"),
        cnp: Yup.string()
            .matches(/^[0-9]{13}$/, "CNP corect de 13 cifre")
            .required("Camp obligatoriu!"),
        datanastere: Yup.string().required("Camp obligatoriu!"),
    });
    //console.log(props);
    return (
        <div className="form-wrapper">
            <Formik {...props} validationSchema={validationSchema}>
                <Form>
                    <FormGroup>
                        <label htmlFor="nume">Nume</label>
                        <Field name="nume" type="text"
                            className="form-control" placeholder="Nume" />
                        <ErrorMessage
                            name="nume"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="prenume">Prenume</label>
                        <Field name="prenume" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="prenume"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                    <label htmlFor="email">Adresa de email</label>
                        <Field name="email" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="email"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                
                    <FormGroup>
                        <label htmlFor="telefon">Telefon</label>
                        <Field name="telefon" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="telefon"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="cnp">CNP</label>
                        <Field name="cnp" type="text"
                            className="form-control" />
                        <ErrorMessage
                            name="cnp"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="datanastere">Data nastere</label>
                        <Field name="datanastere" type="date"
                            className="form-control" />
                        <ErrorMessage
                            name="datanastere"
                            className="d-block invalid-feedback"
                            component="span"
                        />
                    </FormGroup>
                    <Field name="id" type="hidden"
                            className="form-control" />
                    <Button variant="danger" size="lg" className="mt-3"
                        block="block" type="submit">
                        {props.children}
                    </Button>
                </Form>
            </Formik>
        </div>
    );
};

export default UserForm;