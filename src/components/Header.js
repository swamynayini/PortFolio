import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Header = ()=>{
    return(
        <div>
            <ul className=" md:p-4 m-4 flex justify-end space-x-4 cursor-pointer font-medium">
                <li><Link to ="/">Home</Link></li>
                <li ><Link to="/about">About</Link></li>
                <li><Link to ="/contact">Contact </Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects </Link></li>
                <li> <Link to="/resume">Resume </Link></li>
            </ul>
            
        </div>
    )
}
export default Header;
