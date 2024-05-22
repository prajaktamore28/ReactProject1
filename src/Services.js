import './Services.css';

export default function Services(props) {
  const items = props.data;
  return (
    <section className="services container">
      <h1 className='fw-bold mt-5 mb-3 '>Services</h1>
      <p className='mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>

      <div className='row'>
        {
          items.map(function (item) {
            return (
              <div className="services1 col-12 col-md-4">
                <div className="service1-img text-center">
                  <img src={item.photoname} className="img-fluid" />
                </div>
                <div className="service1-btn text-center my-5">
                  <button type="button" className="btn text-white fw-bold px-5 py-2 rounded-5">{item.buttonname}</button>
                </div>
              </div>
            );
          })
        }
      </div>
    </section>

  );
}
