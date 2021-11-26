import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import CartWidget from '../../components/CartWidget/CartWidget.jsx'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/"className="navbar-brand marca-nombre">Alima</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse barra-nav" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/category/tops" className="nav-link">Tops</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/category/bikers" className="nav-link" href="#">Bikers</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/cart" className="nav-link" href="#">Cart</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div>
                    <CartWidget />
                </div>
            </nav>
            
        </header>
    )
}
export default NavBar; 