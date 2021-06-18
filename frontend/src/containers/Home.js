import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import ListingForm from '../components/ListingForm';
import Listings from '../components/Listings';
import Pagination from '../components/Pagination';
import Video from '../assets/videos/full_Trim.mp4';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from '../components/SidebarData'; 

const Home = (props) => {

    const [listings, setListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [listingsPerPage, setListingsPerPage] = useState(3);
    const [active, setActive] = useState(1);

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = listings.slice(indexOfFirstListing, indexOfLastListing);

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar) 


    const visitPage = (page) => {
        setCurrentPage(page);
        setActive(page);
    };

    const previous_number = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage-1);
            setActive(currentPage-1);
        }
    };

    const next_number = () => {
        if (currentPage !== Math.ceil(listings.length/3)) {
            setCurrentPage(currentPage+1);
            setActive(currentPage+1);
        }
    };

 


    return (
        <main className='home'>
            <Helmet>
                <title>Custodio Imobiliaria</title>
                <meta
                    name='custodio Imobiliaria'
                    content='Realest Estate Home Page'
                />
                <link rel='stylesheet' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
            </Helmet>
            <section className='home__showcase'>
            <header>
                    <h2 className='home__showcase__logo'>Custodio Imobiliaria</h2>
                    
            </header>
            <video src={Video} preload="auto" autoplay="true" loop="loop" muted="muted"></video>
            <div className='home__showcase__overlay'></div>
                <div className='home__showcase__text'>
                    <h2>Vamos encontrar</h2>
                    <h3>A propriedade dos seus sonhos</h3>
                    <p> Se você procura um lugar próximo ao mar, o seu lugar é conosco. Temos casas | apartamentos | condomínios dos mais diferentes valores e localidades e o que não
                        falta é motivação para te ajudar a encontrar o seu.</p>
                   
                    <NavLink className='navbar__bottom__item__link' exact to='/listings'>Explore</NavLink>
                 
                </div>
                <ul className='home__showcase__social'>
                    <li><i class="fab fa-facebook"></i></li>
                    <li><i class="fab fa-youtube"></i></li>
                    <li><i class="fab fa-instagram"></i></li>
                </ul>
                <div className='home__arrowDown'>
                <a href="#form">
                    <FaIcons.FaArrowCircleDown>
                     
                    </FaIcons.FaArrowCircleDown>
                </a>
                </div>
                {/* CRIATION OF TOGGLE ITS BUILT IN THIS PAGE + SIDEBARDATA */}
            <div className='home__navbar'>
          <Link to='#' className='home__navbar__menubars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'home__navmenu active' : 'home__navmenu'}>
          <ul className='home__navmenu__items' onClick={showSidebar}>
            <li className='home__navmenu__navbar-toggle'>
              <Link to='#' className='home__navbar__menubars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

        </nav>

        </section>    
        <section className='home__searchBox'>
            <div className='home__searchBox__Container'>
                <div className='home__searchBox__Container__title'>
                    <h2>Escolha os campos desejados</h2>
                </div>
                <div>
            <section className='home__form' id='form'>
                <ListingForm setListings={setListings} />
            </section>
            <section className='home__listings'>
                <Listings listings={currentListings} />
            </section>
            <section className='home__pagination'>
                <div className='row'>
                    {
                        listings.length !== 0 ? (
                            <Pagination
                                itemsPerPage={listingsPerPage}
                                count={listings.length}
                                visitPage={visitPage}
                                previous={previous_number}
                                next={next_number}
                                active={active}
                                setActive={setActive}
                            />
                        ) : null
                    }
                </div>

            </section>
            </div>
            </div>
        </section> 
        
         
        </main>


      
    );
};


export default Home; 