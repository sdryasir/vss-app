import ssl from '../ssl.png'
import cash from '../cash.png'
import bank from '../bank.png'
import jazz from '../jazz.png'
function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="payment-methods">
                <div className="container">
                    <ul>
                        <li><a href="#"><img src={ssl} alt="" /></a></li>
                        <li><a href="#"><img src={cash} alt="" /></a></li>
                        <li><a href="#"><img src={bank} alt="" /></a></li>
                        <li><a href="#"><img src={jazz} alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="credit-privacy">

            </div>
        </div>
    )
}
export default Footer;