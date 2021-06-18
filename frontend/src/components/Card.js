import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const card = (props) => {
    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };

    return (
        <div className='card'>
            <h3 className='card__title'>{props.titulo}</h3>
            <div className='card__header'>
                <img className='card__header__photo' src={props.photo_main} alt='House' />
            </div>
            <p className='card__location'>{props.endereco}, {props.cidade}, {props.estado}</p>
            <div className='row'>
                <div className='col-2-of-3'>
                    <p className='card__info'>Preço: R${numberWithCommas(props.preco)}</p>
                    <p className='card__info'>Quartos: {props.quartos}</p>
                    <p className='card__info'>Banheiros: {props.banheiros}</p>
                </div>
                <div className='col-1-of-3'>
                    <p className='card__saletype'>{props.tipo_venda}</p>
                    <p className='card__hometype'>{props.tipo_casa}</p>
                    <p className='card__m2'>m²: {props.m2}</p>
                </div>
            </div>
            <Link className='card__link' to={`/listings/${props.slug}`}>Ver galeria</Link>
        </div>
    );
};

card.propTypes = {
    titulo: PropTypes.string.isRequired,
    photo_main: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    quartos: PropTypes.number.isRequired,
    banheiros: PropTypes.string.isRequired,
    tipo_venda: PropTypes.string.isRequired,
    tipo_casa: PropTypes.string.isRequired,
    m2: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
};

export default card;