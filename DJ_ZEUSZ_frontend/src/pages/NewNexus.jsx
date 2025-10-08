
import { Link } from "react-router-dom";

import "../styles/style.css";

import Header from "../components/Header";
import NewNexusPage from "../components/NewNexusPage";

const NewNexus = () => {
    return (
        <div>
            <Header />
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Egy új spaceship rögzítése</h1>
                </div>
            </div>
            <NewNexusPage />
        </div>
    );
};

export default NewNexus;