import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

const ListingForm = (props) => {
    const [formData, setFormData] = useState({
        tipo_venda: 'A venda',
        preco: 'R$100.000,00+',
        quartos: '0+',
        tipo_casa: 'Casa',
        banheiros: '0+',
        m2: '1000+',
        days_listed: '1 or menos',
        has_photos: '1+',
        keywords: ''
    });

    const { tipo_venda, preco, quartos, tipo_casa, banheiros, m2, days_listed, has_photos, keywords } = formData;

    const [loading, setLoading] = useState(false);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        setLoading(true);
        axios.post("http://localhost:8000/api/listings/search", { tipo_venda, preco, quartos, tipo_casa, banheiros, m2, days_listed, has_photos,  keywords }, config)
        .then(res => {
            setLoading(false);
            props.setListings(res.data);
            window.scrollTo(0, 0);
        })
        .catch(err => {
            setLoading(false);
            window.scrollTo(0, 0);
        })
    };

    return (
        <form className='listingform' onSubmit={e => onSubmit(e)}>
            <div className='row'>
                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='tipo_venda'>Pagamento</label>
                        <select className='listingform__select' name='tipo_venda' onChange={e => onChange(e)} value={tipo_venda}>
                            <option>A venda</option>
                            <option>Aluguel</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='m2'>m²</label>
                        <select className='listingform__select' name='m2' onChange={e => onChange(e)} value={m2}>
                            <option>20+</option>
                            <option>50+</option>
                            <option>100+</option>
                            <option>200+</option>
                            <option>300+</option>
                            <option>400+</option>
                            <option>500+</option>
                            <option>600+</option>
                            <option>700+</option>
                            <option>800+</option>
                            <option>900+</option>
                            <option>1000+</option>
                            <option>1200+</option>
                            <option>1500+</option>
                            <option>2000+</option>
                            <option>Qualquer</option>
                        </select>
                    </div>
                </div>

                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='preco'>Preço Mín</label>
                        <select className='listingform__select' name='preco' onChange={e => onChange(e)} value={preco}>
                            
                            <option>R$100.000,00+</option>
                            <option>R$200.000,00+</option>
                            <option>R$400.000,00+</option>
                            <option>R$600.000,00+</option>
                            <option>R$800.000,00+</option>
                            <option>R$1.000.000,00+</option>
                            <option>R$1.200.000,00+</option>
                            <option>R$1.500.000,00+</option>
                            <option>Qualquer</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='days_listed'>Data</label>
                        <select className='listingform__select' name='days_listed' onChange={e => onChange(e)} value={days_listed}>
                            <option>Postado em 1 dia ou menos</option>
                            <option>Postado em 2 dias ou menos</option>
                            <option>Postado em 5 dias ou menos</option>
                            <option>Postado em 10 dias ou menos</option>
                            <option>Postado em 20 dias ou menos</option>
                            <option>Qualquer data</option>
                        </select>
                    </div>
                </div>

                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='quartos'>Quartos</label>
                        <select className='listingform__select' name='quartos' onChange={e => onChange(e)} value={quartos}>
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='has_photos'>Fotos</label>
                        <select className='listingform__select' name='has_photos' onChange={e => onChange(e)} value={has_photos}>
                            <option>1+</option>
                            <option>3+</option>
                            <option>5+</option>
                            <option>10+</option>
                            <option>15+</option>
                        </select>
                    </div>
                </div>

                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='tipo_casa'>Tipo</label>
                        <select className='listingform__select' name='tipo_casa' onChange={e => onChange(e)} value={tipo_casa}>
                            <option>Casa</option>
                            <option>Condomíno</option>
                            <option>Apartamento</option>
                        </select>
                    </div>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='keywords'>Palavra</label>
                        <input className='listingform__input' name='keywords' type='text' onChange={e => onChange(e)} value={keywords} />
                    </div>
                </div>

                <div className='col-1-of-6'>
                    <div className='listingform__section'>
                        <label className='listingform__label' htmlFor='banheiros'>Banheiros</label>
                        <select className='listingform__select' name='banheiros' onChange={e => onChange(e)} value={banheiros}>
                            <option>0+</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                        </select>
                    </div>
                    <div className='listingform__altsection'>
                    {/* 
                        <label className='listingform__label' htmlFor='open_house'>Open Houses</label>
                        <input className='listingform__checkbox' name='open_house' type='checkbox' onChange={e => onChange(e)} value={open_house} />
                    */}
                    </div>
                </div>

                <div className='col-1-of-6'>
                    {loading ?
                        <div className='listingform__loader'>
                            <Loader
                                type="Oval"
                                color="#fc7609"
                                height={50}
                                width={50}
                            />
                        </div> : 
                        <button className='listingform__button listingform__button--primary'>Salvar</button>
                    }
                </div>
            </div>
        </form>
    );
};

ListingForm.propTypes = {
    setListings: PropTypes.func.isRequired
};

export default ListingForm;