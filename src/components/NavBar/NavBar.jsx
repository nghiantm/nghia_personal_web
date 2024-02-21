import { useLocation } from "react-router";
import LoggedOutView from "./LoggedOutBar";

const NavBar = () => {
    const location = useLocation();

    return (
        <LoggedOutView pathname={location.pathname}/>
    )
}

export default NavBar;