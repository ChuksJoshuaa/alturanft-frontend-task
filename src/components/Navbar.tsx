import { imageLogo } from "../utils/imageLogo";

const Navbar = () => {
  return (
    <nav className="navbar bg-light p-0">
      <div className="container">
        <div
          className="d-flex justify-content-start py-2 align-items-center text-decoration-none text-secondary"
          style={{ fontFamily: "Lobster Two" }}
        >
          <img
            src={imageLogo}
            alt="alturanft-logo"
            height={60}
            width={60}
            className="rounded"
          />
          <h3 className="px-2 fs-1 font-weight-bold">Alturanft</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
