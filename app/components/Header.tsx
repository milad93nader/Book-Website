
import React from 'react';
import Book from '../assets/header-img.png';
import Image from 'next/image';
const Header: React.FC = () => {
  return (
    <>
  <header>
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="#">
          <i className="fas fa-book-reader fa-2x mx-3"></i>Books</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fas fa-align-right text-light"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mr-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">HOME
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">COURSE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PRICE</a>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <a href="#" className="nav-link">PAGES</a>
                <div className="dropdown-content">
                  <a href="#">Generic</a>
                  <a href="#">Element</a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FACT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">ABOUT</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div className="container text-center">
      <div className="row">
        <div className="col-md-7 col-sm-12  text-white">
          <h6>AUTHOR: DAILY TUITION</h6>
          <h1>EXCITING ADVENTURE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere accusamus eum dignissimos ipsa sequi expedita.
          </p>
          <button className="btn btn-light px-5 py-2 primary-btn">
            By now for $5.99
          </button>
        </div>
        <div className="col-md-5 col-sm-12  h-25">
          <Image src={Book.src} width={300} height={600} alt="Book" />
        </div>
      </div>
    </div>
  </header>
  </>
  );
};

export default Header;
