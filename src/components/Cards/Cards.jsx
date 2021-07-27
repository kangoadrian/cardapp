import React,{useEffect, useState} from 'react';
import './estilos.css';

const Cards = () => {

    const [characters, setCharacter] = useState(null);
    
    const getCharacters = async ()=>{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const responseJson = await response.json()
        console.log(responseJson)
        setCharacter(responseJson.results)
    }

    useEffect( ()=>{
        getCharacters()
    },[]);

    return (
        <div className="row m-0 p-3 bg-gris">
            {
                !characters ? 'Cargando...' :
                characters.map(item=>(
                    <div className="col-md-6 m-0 p-3 card bg-gris">
                        <div className="row m-0 p-0 border-rad-10">
                            <div className="col-md-4 m-0 p-0 height-200 alin-cener">
                                <div className="background"  style={{ backgroundImage: 'url({item.image})' }}></div>
                                <img src={item.image} className="img-fluid rounded-start m-0 p-0" alt="..."/>
                            </div>
                            <div className="col-md-8 m-0 pl-3 height-200">
                                <div className="card-body m-0 p-0">
                                    <h5 className="card-title">{item.name}</h5>
                                    <div className="card-text">
                                        <span>{item.status}</span> - <span>{item.species}</span>
                                    </div>
                                    <div className="card-text">
                                        <p className="text-muted">Last Known location:</p>
                                        {item.location.name}
                                    </div>
                                    <div className="card-text">
                                        <p className="text-muted">Firs seen in:</p>
                                        {item.origin.name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
                    
                 ))
            }
        </div>
    );
};

export default Cards;