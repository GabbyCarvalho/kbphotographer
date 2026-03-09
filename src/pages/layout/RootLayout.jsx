import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import br from "../../assets/logos/br.jpg";
import us from "../../assets/logos/us.png";


export default function RootLayout () {
    return (
        <>
    <header className="header">
        <div className="topBar">
            <nav className="navbar">
              <Link to="/" className="logo">
              <img src={logo} alt="Karina Bittencourt Photographer" />
              </Link>
            <div className="navLinks">
                <Link to="/about">ABOUT</Link>
                <Link to="/galleries">GALLERIES</Link>
                <Link to="/contact">CONTACT</Link>
                <Link to="/faq">FAQ</Link>
                <Link to="/engagements">ENGAGEMENTS</Link>
                <Link to="/ski">SKI</Link>
                <Link to="/headshots">HEADSHOTS</Link>
                <Link to="/blog">BLOG</Link>
                <Link to="/store">STORE</Link>
            </div>

            <div className="flags">
                <img src={br} alt="br" />
                <img src={us}alt="us" />
            </div>
            </nav>
        </div>
</header>

        <main className="mainContent">
          <Outlet />
        </main>
       <footer className="footer">
  <div className="footerContainer">
    <div className="footerNav">

      <div>
        <Link to="/about" className="titleFooter">About</Link>
        <div className="regularText">
          <p>Latina Owned</p>
          <p>Speaks English | Português</p>
          <p>All bodies are beautiful</p>
          <p>All humans celebrated here</p>
        </div>
      </div>

      <div>
        <p className="titleFooter">Resources</p>
        <Link to="/store">Buy Art Work & Products</Link>
        <Link to="/blog">Visit Blog</Link>
        <Link to="/faq">Faq</Link>
        <Link to="/vendors-list">Vendor List</Link>
        <Link to="/become-vendor">Become a Vendor</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>

      <div>
        <p className="titleFooter">Client Area</p>
        <Link to="/galleries">View Galleries</Link>
        <a href="https://kbphotographer.hbportal.co/app/login" target="_blank">Client Portal</a>
        <Link to="/blog">Visit Blog</Link>
      </div>

      <div>
        <p className="titleFooter">Powered By</p>
        <p className="regularText">Pic-time & HoneyBook</p>
      </div>

      <div>
        <p className="titleFooter">Stay in Touch</p>
        <div className="socialIcons">
          <a href="https://br.pinterest.com/karinabittencourtphotographer/?actingBusinessId=1077064204541947953" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-pinterest"></i>
          </a>
          <a href="https://www.instagram.com/bittencourt_k" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://www.facebook.com/KarinaBittencourtPhotographer" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>

    </div>
  </div>
</footer>

        </>
    )
}