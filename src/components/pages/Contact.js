import React from "react";

const Contact = () => (        
    <React.Fragment>
        <section className="content-contact">
            <div className="contact-us">
                <div className="row">
                    <div className="info">
                        <h2>Entre em Contato</h2>
                        <p>
                            Para qualquer dúvida, sinta-se à vontade para nos enviar uma mensagem <br/>
                            preenchendo os campos ao lado!
                        </p>    
                        <div className="whatsapp">
                            <h5 className="h5-contact">WHATSAPP:</h5>
                            <p className="p-contact">
                                (xx)xxxxxxxxx
                            </p>
                        </div>
                        <div className="email">
                            <h5 className="h5-contact">EMAIL:</h5>
                            <p className="p-contact">
                                xxxxxxxxxxxxxx@mail.com
                            </p> 
                        </div> 
                    </div>    
                </div>

                <div className="row">
                    <form id="contact" action="">
                        <fieldset>
                            <input placeholder="Nome Completo" type="text" tabIndex="1" required autoFocus/>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Email" type="email" tabIndex="3" required/>
                        </fieldset>
                        <fieldset>
                            <input placeholder="Telefone" type="tel" tabIndex="4" required/>
                        </fieldset>
                        <fieldset>
                            <textarea placeholder="Digite Sua Mensagem Aqui..." tabIndex="5" required></textarea>
                        </fieldset>
                        <fieldset>
                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
                        </fieldset>
                    </form>
                </div>
            </div>    
        </section>
    </React.Fragment>
);


export default Contact;