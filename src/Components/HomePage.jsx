import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png'; 

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
  textContainer: {
    textAlign: 'center',
    marginTop: '20px',
  },
  navbar: {
    background: 'linear-gradient(to right, #6666, #99ff99, #6666)',
    marginTop: '20px',
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <img src={logo} alt="SDFC BANK Logo" style={styles.logo} />
      <div style={styles.textContainer}>
        <h1>SDFC BANK</h1>
        <h2>Extraordinary Services</h2>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light" style={styles.navbar}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">SDFC</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active" to="/newaccount">New Account</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/balance">Balance</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/deposit">Deposit</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/withdraw">Withdraw</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/transfor">Transfor</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/closeaccount">Close A/C</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" to="/aboutus">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomePage;
