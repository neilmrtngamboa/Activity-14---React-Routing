import { Outlet, Link } from "react-router-dom";
function Layout() {

    return (
      <main className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg bg-danger">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fs-2" to='/'>React Routing</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to='about'>About</Link>
                        <Link className="nav-link" to='contact'>Contact</Link>
                        <Link className="nav-link" to='services'>Services</Link>
                    </div>
                </div>
            </div>
        </nav>

        <div className="container-fluid p-5">
            <Outlet />
        </div>

        <footer className="bg-danger text-center text-black p-3 mt-auto">
                <h5 className="fw-bold">Activity 14 - React Routing</h5>
                <small className="fw-light">Neil Martin Gamboa - BASE404™</small>

        </footer>
      </main>
      
    )
  }
  
  export default Layout
  