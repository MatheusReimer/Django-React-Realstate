import React, { Fragment } from 'react';

import image from '../assets/images/Custodio.png'
import { Helmet } from 'react-helmet';

const footer = () => {

    
    
    return (
    <Fragment>
         <Helmet>
                    <link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
                    
            </Helmet>
         <div className='footer'>
                <div className='footer__socialmedia'>
                    <ul>
                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                      
                    </ul>
                </div>
                <div className='footer__bigblock'>
                    <p className='footer__bigblock__name'>CUSTODIO IMOBILIARIA, RUA 4190 , PIÇARRAS, SC, 88390000, BRASIL</p>
                    <p className='footer__bigblock__direitos'>Casas de Penha | Piçarras | Barra Velha e Região |  Todos os direitos reservados | © 2021  </p>
                    <p className='footer__bigblock__logo'><img src={image}></img>  </p>
                </div>
            </div>    
        
    </Fragment>


    );
};

export default footer;