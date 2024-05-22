export default function Whychoose() {
  return (
    <section className="whychoose container mb-5 mb-md-2 ">
      <h1 className="text-center fw-bold my-5">Why Choose Us</h1>
      <p className="text-center px-3"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All</p>
      <div className="whychoose-btn text-center my-4 mb-5">
        <button type="button" className="btn text-white rounded-5 px-4 py-2">READ MORE</button>
      </div>

      <div className="talk border border-1 border-dark rounded-5 d-md-flex justify-content-between">
        <div className="talk-heading mx-md-5">
          <h1 className="text-center fw-bold mt-4 mt-md-3">Let Start Talk with Us</h1>
        </div>
        <div className="talk-btn text-center ms-md-4 me-lg-4">
          <button type="button" className="btn text-white rounded-5 px-5 py-2 my-3">Get A Quote</button>
        </div>
      </div>
    </section>
  );
}