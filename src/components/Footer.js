import React from 'react'

function Footer() {
  return (
    <>
<footer className="py-5 bg-dark border-top">
  <div className="container text-light">
    <div className="row ">
      <div className="col-lg-3 ">
        <h5>Stay in touch </h5>
        <p className="text-uppercase  text-light">Subscribe to our New Product Arrivel !</p>
        <input type="email" className="form-control text-muted" aria-describedby="emailHelp" placeholder="Enter e-mail address" />
        <div className=" py-4 ">
          <a href="#" ><i class="bi bi-instagram text-light me-2 "></i></a>
          <a href="#"><i className="bi bi-facebook text-light me-2 " /></a>
          <a href="#"><i className="bi bi-whatsapp text-light me-2 " /></a>
          <a href="#"><i className="bi bi-skype text-light me-2 " /></a>
          <a href="#"><i className="bi bi-youtube text-light me-2 " /></a>
        </div>
      </div>
      <div className="col-lg-3 text-white">
        <h5>my account</h5>
        <ul className=''>
          <li className=''> <a href="#">Sign in</a></li>
          <li> <a href="#"> Create account</a></li>
          <li> <a href="#">Orders</a></li>
          <li> <a href="#">Wish list</a></li>
          <li> <a href="#">Comparison list</a></li>
        </ul>
      </div>
      <div className="col-lg-3">
        <h5>Shop</h5>
        <ul>
          <li> <a href="#">About us</a></li>
          <li> <a href="#"> Blog</a></li>
          <li> <a href="#">FAQ</a></li>
          <li> <a href="#"> Reward points</a></li>
          <li> <a href="#">Gift certificates</a></li>
          <li> <a href="#">Sitemap</a></li>
        </ul>      
      </div>
      <div className="col-lg-3">
        <h5>Lee Collection</h5>
        <ul>
          <li> <a href="#">Contact Us</a></li>
        </ul>
      </div>
    </div>
  </div>    
  <section className="btm py-0">
    <div className="container text-white">
      <p >© 2023 Lee Collection.  Genuine n Quality Product — <a href="#" className='text-white'>© Lee Collection</a> </p>   
    </div>
  </section>      
</footer>
  </>
  )
}

export default Footer;