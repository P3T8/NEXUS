import { Link } from "react-router-dom";

import "../styles/style.css";

import Header from "../components/Header";
import TypesUp from "../components/TypesUp";

const Types = () => {
    return (
        <>   
            <Header />
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Új spaceship rögzítése</h1>
                </div>
            </div>
            <TypesUp />
        </>
    );
};  

export default Types;