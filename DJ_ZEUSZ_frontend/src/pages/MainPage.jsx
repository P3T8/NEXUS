import {Link} from "react-router-dom";

import "../styles/style.css";

import Header from "../components/Header";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <div className="start">
                <h1>Welcome to DJ ZEUSZ home page</h1>
               <div className="row">
                <div className="col-6 flex justify-content-center">
                    <Link class="btn btn-primary" to="/spaceships">Spaceships </Link>
                </div>
                <div className="col-6 flex justify-content-center">
                    <Link class="btn btn-primary" to="/uploadspaceships">Upload Spaceships</Link>
                </div>
            </div>
        </div>
        </div>
    );
};  
export default MainPage;