import React from 'react';
import Script from 'next/script';
const Footer: React.FC = () =>
    {
return (
<> 
<footer>
    <div className="container-fluid p-0">
      <div className="row text-left">
        <div className="col-md-5 col-sm-5">
          <h4 className="text-light">About us</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum maxime ea similique illum corrupti</p>
          <p className="pt-4 text-muted"> This template is made with by
            <span> Milad Nader</span>
          </p>
        </div>
        <div className="col-md-5 col-sm-12">
          <h4 className="text-light">Newsletter</h4>
          <p className="text-muted">Stay Updated</p>
          <form className="form-inline">
            <div className="col pl-0">
              <div className="input-group pr-5">
                <input type="text" className="form-control bg-dark text-white" id="inlineFormInputGroupUsername2" placeholder="Email"/>
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-2 col-sm-12">
          <h4 className="text-light">Follow Us</h4>
          <p className="text-muted">Let us be social</p>
          <div className="column text-light">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </div>
  </footer>

  <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js" strategy="beforeInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" strategy="beforeInteractive" />
      <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="./main.js" strategy="afterInteractive" />

</>
);
};
export default Footer;