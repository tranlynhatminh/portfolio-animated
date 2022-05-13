import './indexSidebar.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoM from '../../assets/images/logo-m.png'
import LogoSubTitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome , faUser} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGithub, faSkype } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='Nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoM} alt="logo"/>
            {/* <img className="sub-logo" src={LogoSubTitle} alt="slobodan"/> */}
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>

            <li>
                <a 
                    target="_blank"
                    rel="noreferer"
                    href="#"
                >
                    <FontAwesomeIcon icon={faSkype} color="#4d4d4e" />
                </a>
            </li>

            <li>
                <a 
                    target="_blank"
                    rel="noreferer"
                    href="https://www.facebook.com/minhtran223/"
                >
                    <FontAwesomeIcon icon={faFacebookF} color="#4d4d4e" />
                </a>
            </li>
            
            <li>
                <a 
                    target="_blank"
                    rel="noreferer"
                    href="https://github.com/tranlynhatminh"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar