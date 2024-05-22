import './Blog.css';

export default function Blog() {
  return (
    <section className="blog text-center">
      <h1 className='text-white text-center fw-bold container'>See Our Video</h1>
      <p className='text-white mx-4'>many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which</p>
      <button type="button" className='bg-transparent border-0 mt-4 mb-5 '><img src="images/play-icon.png" /></button>
    </section>
  );
}