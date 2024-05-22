import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className='hero-inner container'>
        <div className="header d-flex justify-content-between">
          <div className='head-img'>
            <img src="./images/logo.png" className='my-3 my-md-5'></img>
          </div>
          <div className='head-hamp d-md-none'>
            <a href="" classname="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbarnav"><i class="bi bi-list text-white fs-1 fw-bold"></i></a>
          </div>
        </div>

        <div className="nav justify-content-center">
          <nav className=" text-white">
            <div class="text-white navbar-collapse collapse text-center" id="navbarnav">
              <ul className="nav flex-column d-md-none">
                <li className="nav-item"><a className="nav-link text-white" href="#home">HOME</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#about">ABOUT</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#education">SERVICES</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#skills">BLOG</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#projects">CONTACT US</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="nav justify-content-center">
          <ul className="nav d-none d-md-flex ">
            <li className="nav-item"><a className="nav-link text-white" href="#home">HOME</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#about">ABOUT</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#education">SERVICES</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#skills">BLOG</a></li>
            <li className="nav-item"><a className="nav-link text-white" href="#projects">CONTACT US</a></li>
          </ul>
        </div>


        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="main text-center">
                <h1 className='text-white mt-5 mb-3'>ADVENTURE</h1>
                <p className='main-para text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
                <div className='main-btn'>
                  <button type="button" className='btn rounded-5 px-4 py-2 mt-4 mb-5 px-md-5 my-md-5'>Get A Quote</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="main text-center">
                <h1 className='text-white mt-5 mb-3'>ADVENTURE</h1>
                <p className='main-para text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
                <div className='main-btn'>
                  <button type="button" className='btn rounded-5 px-4 py-2 mt-4 mb-5 px-md-5 my-md-5'>Get A Quote</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="main text-center">
                <h1 className='text-white mt-5 mb-3'>ADVENTURE</h1>
                <p className='main-para text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have sufferedThere are ma available, but the majority have suffered</p>
                <div className='main-btn'>
                  <button type="button" className='btn rounded-5 px-4 py-2 mt-4 mb-5 px-md-5 my-md-5'>Get A Quote</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

  );
}