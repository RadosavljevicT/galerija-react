import { useState } from 'react'
import Galerije from './Galerije';
import Navigacija from './Navigacija';

function Search() {

    const galerijePocetni = [
        { galerija_id: 1, naziv: 'Louvre', adresa: 'Paris street 75001', grad: 'Paris', email: 'louvre@gmail.com', sajt: 'www.louvre.fr' },
        { galerija_id: 2, naziv: 'Narodni muzej Srbije', adresa: 'Trg Republike 1a', grad: 'Beograd', email: 'muzej@gmail.com', sajt: 'www.muzej.rs' },
        { galerija_id: 3, naziv: 'Uffizi Gallery', adresa: 'Piazzale degli Uffizi 6', grad: 'Firenze', email: 'uffizi@gmail.com', sajt: 'www.uffizi.it' },
        { galerija_id: 4, naziv: 'Museum of Modern Art', adresa: '11 W 53rd St', grad: 'New York', email: 'moma@gmail.com', sajt: 'www.moma.ny' },
        { galerija_id: 5, naziv: 'Acropolis Museum', adresa: 'Dionis Street', grad: 'Athenes', email: 'acropolis@gmail.com', sajt: 'www.acropolis.gr' },
        { galerija_id: 6, naziv: 'State Hermitage', adresa: 'Palace Square 2', grad: 'St Petersburg', email: 'hermitage@gmail.com', sajt: 'www.hermitage.ru' },
        { galerija_id: 7, naziv: 'Rikjsmuseum', adresa: 'Museumstraat 1', grad: 'Amsterdam', email: 'museum@gmail.com', sajt: 'www.museum.nl' },
        { galerija_id: 8, naziv: 'Tate modern', adresa: 'Bankside', grad: 'London', email: 'tate@gmail.com', sajt: 'www.tatemodern.rs' },
        { galerija_id: 9, naziv: 'National museum', adresa: 'Reforma s/n', grad: 'Mexico City', email: 'nationale@gmail.com', sajt: 'www.nationale.ms' },
        { galerija_id: 10, naziv: 'Getty Center', adresa: 'Getty Center Dr', grad: 'Los Angeles', email: 'getty@gmail.com', sajt: 'www.getty.rs' },
        { galerija_id: 11, naziv: 'Apartheid museum', adresa: 'Southdale', grad: 'Johannesburg', email: 'apartheid@gmail.com', sajt: 'www.apartheid.sa' },
        { galerija_id: 12, naziv: 'The Louisiana', adresa: 'Gl Strandvej 13', grad: 'Denmark', email: 'museum@gmail.com', sajt: 'www.museum.dk' },
        { galerija_id: 13, naziv: 'Secret Gallery', adresa: 'O u 12', grad: 'Budapest', email: 'secret@gmail.com', sajt: 'www.secret.hu' },
        { galerija_id: 14, naziv: 'Kiasma', adresa: 'Mennerheiminaukio 2', grad: 'Helsinki', email: 'kiasma@gmail.com', sajt: 'www.kiasma.fi' },
        { galerija_id: 15, naziv: 'Galerija Matice Srpske', adresa: 'Trg galerije 1', grad: 'Novi Sad', email: 'galerija@gmail.com', sajt: 'www.galerija.rs' }
    ];

    const [searchvalue, setSearchvalue] = useState('')
    const [galerije, setGalerije] = useState(galerijePocetni)

    function handleSearch(e) {
        setSearchvalue(e.target.value)
    }

    function search() {
        const niz = []

        for (let i = 0; i < galerijePocetni.length; i++) {
            if (galerijePocetni[i].naziv.includes(searchvalue))
                niz.push(galerijePocetni[i])
        }

        setGalerije(niz)
    }


    return (
        <div>

            <Navigacija />

            <div className="searchfields">
                <input type="text" id="inputsearch" onChange={handleSearch} />
                <button onClick={search} className="btn btn-light">Search</button>
            </div>

            <Galerije galerije={galerije} />

        </div>
    )
}

export default Search;