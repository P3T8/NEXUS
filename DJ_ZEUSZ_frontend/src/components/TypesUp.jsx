import React from "react";
import {Link} from "react-router-dom";
import { useState, useEffect } from "react";

const TypesUp = () => {
  const [spaceships, setSpaceships] = useState([]);
  const [type, setType] = useState([]);

    useEffect(() => {
        const fetchSpaceships = async () => { 
            try {
                const response = await fetch("http://localhost:3000/spaceships");
                const data = await response.json();
                setSpaceships(data);
            } catch (error) {
                console.error("Hiba történt a spaceships lekérdezésekor:", error);
            }
        };
        
        const fetchType = async () => { 
            try {
                const response = await fetch("http://localhost:3000/type");
                const data = await response.json();
                setType(data);
            } catch (error) {
                console.error("Hiba történt a típusok lekérdezésekor:", error);
            }
};

        fetchSpaceships();
        fetchType();
    }, []);

    return (
        <>
        <div className="row p-5">

            {spaceships.map((spaceship) => (
                <div key={spaceship.id} className="col-12 offset-md-1 col-md-10 offset-lg-0 col-lg-6 ">
                <div className="card border-light mb-3">
                    <div className="card-header" style={{ backgroundColor: 'rgb(108, 82, 253)' }}>
                        <span className="fw-bold">{spaceship.nev}</span>
                        <span className="float-end">
                            {type.find(stilus => stilus.id === spaceship.stilus_id)?.stilus_neve}
                        </span>
                    </div>
                    <div className="card-body">
                        <p className="card-text"> 
                            <p>Évek: {spaceship.evek}</p>
                            <p>Stílus: {type.find(stilus => stilus.id === spaceship.stilus_id)?.stilus_neve}</p>
                           
                        </p>
                    </div>
                    <img className="card-img-bottom p-2 img-fluid" alt="" src={spaceship.kep_url}/>
                    <div className="card-footer text-center">
                        <button> 
                            id="gomb" 
                            className="btn btn-outline-secondary px-4" 
                            onClick={() => {
                                window.location.href = `/details/${spaceship.id}`;

                            }}
                        </button>
                    </div>
                </div>
            </div>
            ))}
            
 
        </div>
        </>
    );
};

export default TypesUp;
