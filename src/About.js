export default function About() {
  return (
    <section className="a container mt-md-5">
      <div className="About mb-5 ms-2 row">
        <div className="About-text col-12 col-md-6">
          <h1 className="fw-bold mb-5 pt-4 pt-md-0 mb-md-3 ">About Us</h1>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use isn't anything embarrassing hidden in the middle of text. All</p>
          <button type="button" className="about-btn btn text-white px-4 py-2 my-4 rounded-5 fw-bold my-md-2">READ MORE</button>
        </div>

        <div className="About-img col-12 col-md-6">
          <img src="images/about-img.jpg" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}