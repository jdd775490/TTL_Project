import {useNavigate} from "react-router-dom";
import {logout} from "../auth/auth.js";

function NavBar(){

        const navigate = useNavigate()

        const handleLogout = () => {
            logout();
            navigate("/login");  // redirect to login page
        };

    return(
        <div className="container mt-5">
            <nav className="navbar navbar-expand-lg bg-primary fixed-top">    
            <div className="container-fluid">
                {/* <a class="navbar-brand" href="#">Navbar</a> */}
                <img src="https://www.purppledesigns.com/wp-content/uploads/2023/11/download-4.png" alt="Bootstrap" width="30" height="24"></img>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">   
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>   
                    <li className="nav-item">
                    <a className="nav-link" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                    <li>
                        <button className="btn btn-outline-dark" type="submit" onClick={handleLogout}>LogOut</button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    )
}

export {NavBar};