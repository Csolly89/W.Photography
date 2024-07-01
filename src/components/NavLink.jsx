import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
    return (
        <Link to={href} className="">
            {title}
        </Link>
    )
}

export default NavLink