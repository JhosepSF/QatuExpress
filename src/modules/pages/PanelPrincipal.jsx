import React from "react";
import { Navbar } from "../../components/Navbar.jsx";
import "../../styles/panelprincipal.css";

export function PanelPrincipal() {
  return (
    <div>
      <Navbar />
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            
            {/* Producto 1 */}
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Producto 1" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $40.00 - $80.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/producto">Ver</a></div>
                </div>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Producto 2" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">$20.00</span>
                    $18.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/producto">Ver</a></div>
                </div>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Producto 3" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through">$50.00</span>
                    $25.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/producto">Ver</a></div>
                </div>
              </div>
            </div>

            {/* Producto 4 */}
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Producto 4" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Popular Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/producto">Ver</a></div>
                </div>
              </div>
            </div>

            {/* Producto 5 */}
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Producto 5" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sale Item</h5>
                    <span className="text-muted text-decoration-line-through">$50.00</span>
                    $25.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/producto">Ver</a></div>
                </div>
              </div>
            </div>

            {/* Producto 6 */}
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Producto 6" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Fancy Product</h5>
                    $120.00 - $280.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/producto">Ver</a></div>
                </div>
              </div>
            </div>

            {/* Producto 7 */}
            <div className="col mb-5">
              <div className="card h-100">
                <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Producto 7" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Special Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    <span className="text-muted text-decoration-line-through">$20.00</span>
                    $18.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/producto">Ver</a></div>
                </div>
              </div>
            </div>

            {/* Producto 8 */}
            <div className="col mb-5">
              <div className="card h-100">
                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="Producto 8" />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Popular Item</h5>
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    $40.00
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="/producto">Ver</a></div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </div>
  );
}