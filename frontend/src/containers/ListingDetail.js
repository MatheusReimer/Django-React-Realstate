import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

import Carousel from 'react-elastic-carousel';
import CarouselModel from '../components/Carousel';
import image from '../assets/images/Custodio.png'

const ListingDetail = (props) => {
    const [listing, setListing] = useState({});
    const [realtor, setRealtor] = useState({});
    const [preco, setpreco] = useState(0);

    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    

    useEffect(() => {
        const slug = props.match.params.id;

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        axios.get(`http://localhost:8000/api/listings/${slug}`, config)
        .then(res => {
            setListing(res.data);
            setpreco(numberWithCommas(res.data.preco));
        })
        .catch(err => {

        });
    }, [props.match.params.id]);

    useEffect(() => {
        const id = listing.realtor;

        const config = {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        };

        if (id) {
            axios.get(`http://localhost:8000/api/realtors/${id}`, config)
            .then(res => {
                setRealtor(res.data);
            })
            .catch(err => {

            });
        }
    }, [listing.realtor]);
    

    const displayInteriorImages = () => {
        let images = [];
        if(listing.photo_1){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_1 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_1} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_2){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_2 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_2} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_3){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_3 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_3} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if (listing.photo_4){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_4 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_4} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_5){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_5 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_5} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_6){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_6 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_6} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_7){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_7 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_7} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_8){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_8 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_8} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_9){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_9 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_9} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_10){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_10 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_10} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_11){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_11 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_11} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_12){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_12 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_12} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_13){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_13 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_13} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_14){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_14 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_14} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_15){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_15 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_15} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_16){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_16 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_16} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_17){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_17 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_17} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_18){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_18 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_18} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_19){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_19 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_19} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
        )}
        if(listing.photo_20){
        images.push(
            <div  className='itemWrapper' >
                <div className='item'id="item">
                    {
                        listing.photo_20 ? (
                            <div className='listingdetail__display'>
                                <img className='listingdetail__display__image' src={listing.photo_20} alt='' />
                            </div>
                        ) : null
                    }
                </div>
            </div>
            
        )}
       
        
        return images;
    };

    let images = displayInteriorImages();
    return (
        <div className='listingdetail'>
            <Helmet>
                <title>Galeria - Listagem | {`${listing.titulo}`}</title>
                <meta
                    name='descricao'
                    content='Listing detail'
                />
                    <link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
                    <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
                    
            </Helmet>
            <div className='listingdetail__header'>
                <h1 className='listingdetail__title'>{listing.title}</h1>
                <p className='listingdetail__location'>{listing.cidade}, {listing.estado}, {listing.CEP}</p>
            </div>
            <div className='breadCrumWrapper'>
                <div className='listingdetail__breadcrumb'>
                    <Link className='listingdetail__breadcrumb__link' to='/'>Home</Link> / {listing.title}
                </div>
            </div>
            {/*         
            <div className='itens-wrapper' id="items-wrapper">
                <div id="items">
                    {displayInteriorImages()}
                </div>
            </div>
             */}
            <div className='listingdetail__carousel'>
                <Carousel >
                {
                    images.map(img => (<CarouselModel autoPlaySpeed="2000" image={img}/>))
                }
            </Carousel>
            </div>
            <div className='listingdetail__info'>
                <div className ='listingdetail__info__title'> <h2>Sobre a Propriedade</h2></div>
              
                <ul className='listingdetail__info__infolist'>
                        <li className='listingdetail__info__infolist__li'>Tipo de casa: {listing.tipo_casa}<i class="fas fa-check"></i></li>
                        <li className='listingdetail__info__infolist__li'>Preço: R${preco}<i class="fas fa-check"></i></li>
                        <li className='listingdetail__info__infolist__li'>Quartos: {listing.quartos}<i class="fas fa-check"></i></li>
                        <li className='listingdetail__info__infolist__li'>Banheiros: {listing.banheiros}<i class="fas fa-check"></i></li>
                        <li className='listingdetail__info__infolist__li'>Metros Quadrados: {listing.m2}<i class="fas fa-check"></i></li>
                        <li className='listingdetail__info__infolist__li'>Tipo de venda: {listing.tipo_venda}<i class="fas fa-check"></i></li>
                        <li className='listingdetail__info__infolist__li'>Endereço: {listing.endereco}<i class="fas fa-check"></i></li>
                        <li className='listingdetail__info__infolist__li'>Cidade: {listing.cidade}<i class="fas fa-check"></i></li>
                        <li className='listingdetail__info__infolist__li'>Estado: {listing.estado}<i class="fas fa-check"></i></li>
                        <li className='listingdetail__info__infolist__li'>CEP: {listing.CEP}<i class="fas fa-check"></i></li>
                    </ul>

            </div>
           
            <div className='listingdetail__details'>
                 <div className ='listingdetail__details__title'> <h2>Detalhes</h2></div>
                 <p className='listingdetail__details__descricao'>{listing.descricao}</p>
            </div>
            <div class='listingdetail__blockseparator' data-block-type="47">
                <hr></hr>
            </div>
            <div class='listingdetail__realtorsTitle'>
                <h2>Corretor responsável pela propriedade</h2>
            </div>
            <div className='listingdetail__realtors'> 
            
            <div className='listingdetail__realtors__left'>
            
            <img className='listingdetail__display__image' src={realtor.foto} alt='Foto do representante da imobiliária sobre a casa' />
            </div>
            <div className='listingdetail__realtors__right'>
            <h3 className='listingdetail__realtorname'>{realtor.nome}</h3>
            <br/>
            <div className='listingdetail__realtors__proffessionalcard'>
            <p >Corretor(a) de Imóveis Licenciado</p>
            <hr></hr>
            </div>
                <ul>
                    <li><p className='listingdetail__contact'>Telefone:   {realtor.telefone}</p></li>
                    <li><p className='listingdetail__contact'>Email:   {realtor.email}</p></li>
                </ul>
              
            </div>
            </div>
            <div>
                
            <p className='listingdetail__descricao'>Descrição</p>
            <br/>
            <p className='listingdetail__about'>{realtor.descricao}</p>
            <div class='listingdetail__blockseparator'>
                <hr></hr>
            </div>
            </div>
           
           
        </div>
        
    );
};





export default ListingDetail;