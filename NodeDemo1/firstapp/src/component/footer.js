import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <div className="container my-5">
      <footer className="text-center text-lg-start text-white" style={{backgroundColor: "#45526e"}}>
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">SunriseSolar</h6>
                <p>
                Working towards a greener planet and free electricity for all.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

            

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                <p>
                  <a href="#!" className="text-white">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Help</a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Gokhale Nagar, Pune</p>
                <p><i className="fas fa-envelope mr-3"></i> pratikgawali2000@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> +91 9028525955</p>
                <p><i className="fas fa-print mr-3"></i> +91 8625058858</p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2024 Copyright:
                  <a className="text-white" href="https://SunriseSolar/">SunriseSolar</a>
                </div>
              </div>

              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button"><i className="fab fa-google"></i></a>
                <a className="btn btn-outline-light btn-floating m-1 text-white" role="button"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}
