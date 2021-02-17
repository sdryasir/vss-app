import CategorySlider from "../components/category-slider";
import { categories } from "../data/categories";
import category from '../categories.svg'
function Header() {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <ul className="navbar-left">
                            <li className="nav-item mobile-search">
                                <span><i class="bi bi-distribute-vertical"></i></span>
                            </li>
                            <li className="nav-item mobile-top-price">
                                <h2>VSS.PK</h2>
                            </li>
                        </ul>
                        <ul className="navbar-right">
                            <li className="nav-item mobile-search">
                                <input type="text" className="form-control" />
                            </li>
                            <li className="nav-item mobile-top-price">
                                <i class="bi bi-cart3"></i>
                            </li>
                            <li className="nav-item mobile-top-cart">
                                <button className="btn btn-primary">Rs 100</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="category-slider-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-md-2 col-sm-2 d-flex justify-content-center align-items-center">
                            <div className="category-icon">
                                <img src={category} alt="" />
                            </div>
                        </div>
                        <div className="col-10 col-md-10 col-sm-10">
                            <CategorySlider categories={categories} />
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}
export default Header;