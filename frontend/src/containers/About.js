import React, { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Building from '../assets/images/path.jpg';
import About1 from '../assets/images/about.jpg';
import About2 from '../assets/images/about2.jpg';
import Beach from '../assets/images/beach.jpg'

const About = () => {
    const [topSeller, setTopSeller] = useState([]);
    const [realtors, setRealtors] = useState([]);
    window.localStorage.setItem('isHome','false')

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getTopSeller = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/realtors/topseller");
                setTopSeller(res.data);
            }
            catch (err) {

            }
        };

        getTopSeller();
    }, []);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const getRealtors = async () => {
            try {
                const res = await axios.get("http://localhost:8000/api/realtors/");
                setRealtors(res.data);
            }
            catch (err) {

            }
        };

        getRealtors();
    }, []);

    const getAllRealtors = () => {
        let allRealtors = [];
        let results = [];

        realtors.map(realtor => {
            return allRealtors.push(
                <Fragment key={realtor.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={realtor.photo} alt='' />
                    </div>
                    <h3 className='about__realtor'>{realtor.name}</h3>
                    <p className='about__contact'>{realtor.phone}</p>
                    <p className='about__contact'>{realtor.email}</p>
                    <p className='about__about'>{realtor.description}</p>
                </Fragment>
            );
        });

        for (let i = 0; i < realtors.length; i += 3) {
            results.push(
                <div key={i} className='row'>
                    <div className='col-1-of-3'>
                        {allRealtors[i]}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+1] ? allRealtors[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                        {allRealtors[i+2] ? allRealtors[i+2] : null}
                    </div>
                </div>
            );
        }

        return results;
    };  

    const getTopSeller = () => {
        let result = [];

        topSeller.map(seller => {
            return result.push(
                <Fragment key={seller.id}>
                    <div className='about__display'>
                        <img className='about__display__image' src={seller.photo} alt='' />
                    </div>
                    <h3 className='about__topseller'>Vendedor do Mês:</h3>
                    <p className='about__realtor'>{seller.name}</p>
                    <p className='about__contact'>{seller.phone}</p>
                    <p className='about__contact'>{seller.email}</p>
                    <p className='about__about'>{seller.description}</p>
                </Fragment>
            );
        });

        return result;
    };

    return (
        <main className='about'>
            <Helmet>
                <title>Custodio Imobiliaria - Sobre</title>
                <meta
                    name='description'
                    content='About us'
                />
            </Helmet>
          
            <section className='about__info'>
            <div className='about__main'>
                <div className='about__main__background'>
                    <div><img src={Beach}></img></div>
               
                <div className='about__main__over'>
                    <div className='about__main__over__text'>
                    <h3 className='about__main__over__text__title'>Como vamos ajudar você?</h3>
                    <p className='about__main__over__text__paragraph'>The standard Lorem Ipsum passage, used since the 1500s
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                     Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                     <ul className='about__main__over__text__listContainer'>
                         <li className='about__main__over__text__list'>LINK1</li>
                         <li className='about__main__over__text__list'>LINK2</li>
                         <li className='about__main__over__text__list'>LINK3 </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className='about__we'>
                <h1>Conheça quem vai te ajudar</h1>
                <div className='about__we__card'>
                        <div className='about__we__card__first'>
                        <div className='about__we__card__image'><img src={About1}/></div>
                            <h2 className='about__we__card__name'>Joaozinho Custodio</h2>
                            <p className='about__we__card__function'>CEO / Consultor</p>
                            <p className='about__we__card__description'>Joaozinho Custodio é CEO, diretor de criação e especialista residente em cerveja e queijo. 
                                Brian ocupou vários títulos na mídia e na comédia, incluindo redação, edição, gerenciamento de projetos,
                                 desenvolvimento de produtos, criação de estratégias para a web e gerunding. Brian ainda contribui para The Onion,
                                  onde trabalhou anteriormente por quatro anos como vice-editor administrativo coordenando a sala dos escritores por meio da produção de livros, 
                                  vídeos e pedaços físicos de papel colocados em caixas na rua</p>
                        </div>
                        <div className='about__we__card__second'>
                            <div className='about__we__card__image'><img src={About2}/></div>
                            <h2 className='about__we__card__name'>Pedrinho Custodio</h2>
                            <p className='about__we__card__function'>Vice Diretor / Consultor</p>
                            <p className='about__we__card__description'>Pedrinho Custodio é diretor de produto e outdoorsman em geral. Craig atuou como editor gráfico da The Onion e gerente de campanha da campanha
                                 de marketing How To Be Black, contribuindo para o planejamento e implementação da estratégia digital por trás de grande parte do sucesso do livro. 
                                 Ele se formou na New York University, onde atuou como presidente da revista de sátira do campus e, para sua tese, 
                                 projetou uma plataforma eReading.</p>
                        </div>
  
             
                
                      
                </div>
                <hr></hr>
            </div>
          
            </section>
        </main>
    );
};

export default About;