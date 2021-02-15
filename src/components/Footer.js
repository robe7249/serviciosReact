import React from 'react'
import '../css/footer.css'

export default function Footer() {
    return (
        <div>
            <div class="footer">
                <div class="footer_links">
                    <div class="blocs bloc1">
                        <div class="title">
                            Acerca de Nosotros
        <ul class="list">
                                <li><button onclick="location.href='#'" title="">¿Quiénes somos?</button></li>
                                <li><button onclick="location.href='#'" title="">Nuestro valores</button></li>
                                <li><button onclick="location.href='#'" title="">Politica de derechos de autor</button></li>
                                <li><button onclick="location.href='#'" title="">Terminos y condiciones</button></li>
                            </ul>
                        </div>
                    </div>

                    <div class="blocs bloc1">
                        <div class="title">
                            Ayuda
        <ul class="list">
                                <li><button onclick="location.href='#'" title="">Preguntas frecuentes</button></li>
                                <li><button onclick="location.href='#'" title="">Contactanos</button></li>
                            </ul>
                        </div>
                    </div>

                    <div class="blocs bloc1">
                        <div class="title">
                            Enlaces de interes
        <ul class="list">
                                <li><button onclick="location.href='#'" title="">Trabajando</button></li>
                                <li><button onclick="location.href='#'" title="">Trabajando</button></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
