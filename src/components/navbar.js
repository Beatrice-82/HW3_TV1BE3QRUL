function Navbar() {
    return (
        <nav className="navbar">
        <div className="container">
          <a href="#">Hulk</a>
          <a href="#" className="logo is-active">Mavel</a>
          <a href="#">Venom</a>
        </div>
           <style jsx>{`
           .navbar {
  width: 100%;
  height: 8rem;
  background-color: var(--color-secondary);
  color: #ffffff;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.5);
}

.navbar .container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.navbar a {
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
  text-align: center;

  height: 100%;
  padding: 2rem;

  display: grid;
  place-content: center;
}

.navbar a.is-active {
  border-bottom: 4px solid #ffffff;
}

@media (max-width: 768px) {
  .navbar a {
    font-size: 1.4rem;
  }
}`}</style>
      </nav>
    );
}
export default Navbar