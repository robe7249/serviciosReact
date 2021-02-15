import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'


export default function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
        alert("Incio de sesion Correctamente")
    }


    return (
        <div>
            <div className="row justify-content-center">
                <Form className="col-sm-4 mt-4" onSubmit={onSubmitForm}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label className="row justify-content-center" >Inicio de Sesion</Form.Label>
                        <Form.Control type="email" placeholder="email" onChange={onChangeEmail} />
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Contraseña" onChange={onChangePassword} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Iniciar Sesion
  </Button>

                </Form>
            </div>
        </div>
    )
}
