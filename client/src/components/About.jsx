import React from "react";

export function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="register">
                    <h1 className="register__title">About Us</h1>
                </div>

                <div className="about__description">
                    <h3 className="about__title first">Description</h3>
                    <p>
                        E-commerce con diseño y desarrollo de las siguientes features:
                        <ul>
                            <li><span>✔️</span>Features básicas de e-commerce (CRUD de productos, auth, catálogo, checkout, etc)</li>
                            <li><span>✔️</span>Integración pasarela de Pago (Mercado pago)</li>
                            <li><span>✔️</span>Envio de emails transaccionales (nodemail)</li>
                            <li><span>✔️</span>Authenticación con Google</li>
                            <li><span>✔️</span>Administración de carrito de compras y órdenes de producto</li>
                            <li><span>✔️</span>Administración de usuarios, gestión de claves</li>
                            <li><span>✔️</span>Ofertas y un sistema de productos recomendados</li>
                        </ul>
                    </p>
                </div>

                    <h3 className="about__title">Tecnologías utilizadas</h3>

                    <div className="about__tecnologies">
                        <div className="frontend">
                            <h5 className="about__subtitle">Frontend</h5>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Javascript</li>
                                <li>ReactJS</li>
                                <li>Redux</li>
                                <li>Sass</li>
                                <li>MaterialUI</li>
                                <li>React google maps</li>
                                <li>Axios</li>
                            </ul>
                        </div>

                        <div className="backend">
                            <h5 className="about__subtitle">Backend</h5>
                            <ul>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>Sequelize</li>
                                <li>Google auth library</li>
                                <li>JWT</li>
                                <li>Mercado Pago</li>
                            </ul>
                        </div>

                        <div className="db">
                            <h5 className="about__subtitle">Base de datos</h5>
                            <ul>
                                <li>PostgreSQL</li>
                            </ul>
                        </div>

                        <div className="deploy">
                            <h5 className="about__subtitle">Deploy</h5>
                            <ul>
                                <li>Vercel</li>
                                <li>Heroku</li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default About;