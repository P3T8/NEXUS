import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <>
             <nav className="pa3 pa4-ns">
                <div className="tc pb3">
                    <NavLink
                        className="link dim gray f6 f5-ns dib mr3"
                        activeClassName="active"
                        to="/"
                    >
                        Kezdőlap
                    </NavLink>
                    <NavLink
                        className="link dim gray f6 f5-ns dib mr3"
                        activeClassName="active"
                        to="/spaceships"
                    >
                        Űrhajóim
                    </NavLink>
                    <NavLink
                        className="link dim gray f6 f5-ns dib mr3"
                        activeClassName="active"
                        to="/uploadspaceships"
                    >
                        Űrhajóim feltöltés
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Header
