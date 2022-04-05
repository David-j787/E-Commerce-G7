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
                        This project is an E-commerce for coding bootcamp with the following design and development features:
                        <ul>
                            <li><span>✔️</span>Basic features of e-commerce project like: (CRUD of products, authentication, shop, checkout, etc).</li>
                            <li><span>✔️</span>Payments platform integration (Mercado Pago) for orders pays.</li>
                            <li><span>✔️</span>Emails notifications for Orders and Payments Status (Sendgrid API).</li>
                            <li><span>✔️</span>2FA (Two Factor Authentication) Security option for user with verification code send via Email (Sendgrid API).</li>
                            <li><span>✔️</span>Google Authentication for register and login on website.</li>
                            <li><span>✔️</span>Management of Orders, Physical Shop Stores, Products to sell and Products stock.</li>
                            <li><span>✔️</span>Management of Users, posibility of granting admin permisions, force password resets, edit account data.</li>
                            <li><span>✔️</span>Discounts deals system based on weekdays and product categories.</li>
                        </ul>
                    </p>
                </div>

                    <h3 className="about__title">Tecnologies</h3>

                    <div className="about__tecnologies">
                        <div className="frontend">
                            <h5 className="about__subtitle">Frontend</h5>
                            <ul>
                                <li>HTML 5</li>
                                <li>CSS 3</li>
                                <li>Javascript</li>
                                <li>ReactJS</li>
                                <li>Redux</li>
                                <li>SASS</li>
                                <li>UI/UX Material</li>
                                <li>Google Maps React</li>
                                <li>LocalStorage</li>
                                <li>SessionStorage</li>
                            </ul>
                        </div>

                        <div className="backend">
                            <h5 className="about__subtitle">Backend</h5>
                            <ul>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>Sequelize</li>
                                <li>Google Auth Library</li>
                                <li>JSON Web Token</li>
                                <li>Mercado Pago Integration</li>
                            </ul>
                        </div>

                        <div className="db">
                            <h5 className="about__subtitle">Data Bases</h5>
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