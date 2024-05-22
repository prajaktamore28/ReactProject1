import './Footer.css';

export default function Footer() {
  return (
    <section className="footer pt-5">
      <div className='footer-inner container'>
        <div className='inputbox d-flex-column d-md-flex'>
          <input type='text' placeholder="Enter your email" className="inputt form-control py-2" />

          <div className="footer-btn text-center my-5 my-md-0">
            <button type="button" className="btn fw-bold px-5 py-2">SUBSCRIBE</button>
          </div>
        </div>

        <p className=" phone text-center mb-1"><i class="bi bi-telephone-fill text-white"></i></p>
        <p className="text-center mb-4"><a href="" className="text-decoration-none text-white">Call +01 1234567890</a></p>

        <p className="mail text-center mb-1"><i class="bi bi-envelope-at-fill text-white"></i></p>
        <p className="text-center "><a href="" className="text-decoration-none text-white">mail@domain.com</a></p>


        <div className="social-btn text-center pb-5 pt-3">
          <a href="" className='me-1'><img src="images/fb-icon.png" className='text-dark' /></a>
          <a href="" className='me-1'><img src="images/twitter-icon.png" className='text-dark' /></a>
          <a href="" className='me-1'><img src="images/linkedin-icon.png" className='text-dark' /></a>
          <a href="" className='me-1'><img src="images/instagram-icon.png" className='text-dark' /></a>
        </div>

      </div>
    </section>

  );
}