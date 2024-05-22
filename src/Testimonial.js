import './Testimonial.css';

import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial(props) {

  const test_items = props.test_data;
  return (
    <section className="testimonial container">
      <h1 className="fw-bold my-5 text-center">Testimonial</h1>

      <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          {
            test_items.map(function (item) {

              var settings = {
                infinite: true,
                speed: 200,
                slidesToShow: 1,
                slidesToScroll: 1,
              };
              return (
                <Slider {...settings}>
                  <div>
                    <div className='testo-border mb-4 rounded-5 p-3 d-md-flex'>
                      <>  <div className="Test-para m-2  ">
                        <p className="border border-1 border-dark rounded-5 p-3 text-center">{item.para}</p>
                      </div>
                        <div className="client d-flex m-2 ">
                          <div className="client-img my-5">
                            <img src={item.test_photo} className="img-fluid" />
                          </div>
                          <div className="client-info my-auto ms-4 my-md-5">
                            <h2 className='fw-bold'>{item.test_heading}</h2>
                            <h3 className='fw-bold'>{item.test_text}</h3>
                          </div>
                        </div></>
                    </div>
                  </div>

                  <div>
                    <div className='testo-border mb-4 rounded-5 p-3 d-md-flex'>
                      <>  <div className="Test-para m-2  ">
                        <p className="border border-1 border-dark rounded-5 p-3 text-center">{item.para}</p>
                      </div>
                        <div className="client d-flex m-2 ">
                          <div className="client-img my-5">
                            <img src={item.test_photo} className="img-fluid" />
                          </div>
                          <div className="client-info my-auto ms-4 my-md-5">
                            <h2 className='fw-bold'>{item.test_heading}</h2>
                            <h3 className='fw-bold'>{item.test_text}</h3>
                          </div>
                        </div></>
                    </div>
                  </div>

                  <div>
                    <div className='testo-border mb-4 rounded-5 p-3 d-md-flex'>
                      <>  <div className="Test-para m-2  ">
                        <p className="border border-1 border-dark rounded-5 p-3 text-center">{item.para}</p>
                      </div>
                        <div className="client d-flex m-2 ">
                          <div className="client-img my-5">
                            <img src={item.test_photo} className="img-fluid" />
                          </div>
                          <div className="client-info my-auto ms-4 my-md-5">
                            <h2 className='fw-bold'>{item.test_heading}</h2>
                            <h3 className='fw-bold'>{item.test_text}</h3>
                          </div>
                        </div></>
                    </div>
                  </div>
                </Slider>

              );

            })
          }
        </div>
      </div>
    </section>
  );
}