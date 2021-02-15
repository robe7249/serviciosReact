import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from "react-router-dom";


export default function SignIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    function onChangeEmail(event) {
        setEmail(event.target.value)
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }

    function onSubmitForm(event) {
        event.preventDefault();
        console.log(email, password)
        let user = {
            email: email,
            password: password
        }


        alert("Usuario Creado Correctamente")

        // fetch("www.mybackend.com", {
        //     method: "POST",
        //     body: JSON.stringify(user),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         if (data.errors) {
        //             console.log(data.errors);
        //             alert("Ocurrió un error");
        //         } else {
        //             alert("Bienvenido!");

        //             // Guardar el "token de la sesión" para usarlo posteriormente
        //             localStorage.setItem("token", data.user.token);
        //             localStorage.setItem("userName", data.user.username);

        //             history.push("/employ");
        //         }
        //     });

    }


    return (
        <div>
            <div className="row justify-content-center">
                <Form className="col-sm-4 mt-4" onSubmit={onSubmitForm}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="row justify-content-center" >Registrar Nuevo Usuario</Form.Label>
                        <Form.Control type="email" placeholder="email" onChange={onChangeEmail} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña" onChange={onChangePassword} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Crear Cuenta
                    </Button>

                </Form>
            </div>
        </div>
    )
}
