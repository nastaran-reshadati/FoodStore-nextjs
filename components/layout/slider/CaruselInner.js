import React from 'react'

const CaruselInner = () => {
  return (
    <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-6">
            <div className="detail-box">
              <h3>تجربه غذایی اصیل و ایرانی به سبک ارکیده</h3>
              <div className="btn-box my-5">
                <a href="" className="btn1">
                  سفارش
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-6">
            <div className="detail-box">
              <h3>کیک کن و قصه پیتزا دل ما رو بشنو...</h3>
              <div className="btn-box my-5">
                <a href="" className="btn1">
                  سفارش
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-lg-6">
            <div className="detail-box">
              <h3>چیکن چیز محصولی با طعم باورنکردنی </h3>
              <div className="btn-box my-5">
                <a href="" className="btn1">
                  سفارش
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CaruselInner