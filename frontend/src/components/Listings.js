import React from 'react';
import Card from './Card';

const listings = ({ listings }) => {
    const getListings = () => {
        let listingsOnPage = [];
        let result = [];

        listings.map(listing => {
            return listingsOnPage.push(
                <Card
                    titulo={listing.titulo}
                    endereco={listing.endereco}
                    cidade={listing.cidade}
                    estado={listing.estado}
                    preco={listing.preco}
                    tipo_venda={listing.tipo_venda}
                    tipo_casa={listing.tipo_casa}
                    quartos={listing.quartos}
                    banheiros={listing.banheiros}
                    m2={listing.m2}
                    photo_main={listing.photo_main}
                    slug={listing.slug}
                />
            );
        });

        for (let i = 0; i < listings.length; i += 3) {
            result.push(
                <div className='row'>
                    <div className='col-1-of-3'>
                        {listingsOnPage[i]}
                    </div>
                    <div className='col-1-of-3'>
                    {listingsOnPage[i+1] ? listingsOnPage[i+1] : null}
                    </div>
                    <div className='col-1-of-3'>
                    {listingsOnPage[i+2] ? listingsOnPage[i+2] : null}
                    </div>
                </div>
            );
        }

        return result;
    };

    return (
        <div>
            {getListings()}
        </div>
    );
}

export default listings;