import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'

export default function Publish() {
    return (
        <div>
            <h4 className="text-center">¿Requieres del servicio de alguien?</h4>

            <CardGroup className="mt-5 mb-5">
                <Card border='light'>

                    <Card.Body>
                        <Card.Title>Solicita un trabajo</Card.Title>
                        <Card.Text>
                            Selecciona en la categoria el tipo de trabajador que requieres y describe el tipo de trabajo.
    </Card.Text>
                    </Card.Body>
                </Card >
                <Card border='light'>

                    <Card.Body>
                        <Card.Title>Elige un trabajador</Card.Title>
                        <Card.Text>
                            Utiliza la opcion selecionar trabajador para escoger al trabajador de tu interes o permite que la herramienta aleatoria te sugiera alguno.
                        </Card.Text>
                    </Card.Body>

                </Card>
                <Card border='light'>

                    <Card.Body>
                        <Card.Title>Chatea con los empleados</Card.Title>
                        <Card.Text>
                            Utiliza nuestro chat para ponerte en contacto con el trabajador, revisar a detalle el trabajo requerido y solicitar una cotizacion.
    </Card.Text>
                    </Card.Body>

                </Card>
                <Card border='light'>

                    <Card.Body>
                        <Card.Title>Realiza tu pago</Card.Title>
                        <Card.Text>
                            Tu metodo de pago es seguro a traves de las multiples opciones de pago.
    </Card.Text>
                    </Card.Body>

                </Card>
            </CardGroup>

        </div>
    )
}
