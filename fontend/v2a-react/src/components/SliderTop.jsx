import React from 'react';
import { Carousel } from 'antd';

export default function SliderTop(props) {
    return (
        <>
            <div className="slider-area">
                <Carousel autoplay autoplaySpeed={1000}>
                    <div className='carousel-item-custom'>
                        <img src="/hotsale-samsung-tu-2904-0405-03.jpg" alt="Slide" />
						<div className="caption-group">
							<h2 className="caption title">
								iPhone <span className="primary">6 <strong>Plus</strong></span>
							</h2>
							<h4 className="caption subtitle">Dual SIM</h4>
							<a className="caption button-radius" href="."><span className="icon"></span>Shop now</a>
						</div>
                    </div>
                    <div className='carousel-item-custom'>
                        <img src="/hotsale-samsung-tu-2904-0405-03.jpg" alt="Slide" />
						<div className="caption-group">
							<h2 className="caption title">
								{/* iPhone <span className="primary">6 <strong>Plus</strong></span> */}
							</h2>
							{/* <h4 className="caption subtitle">Dual SIM</h4> */}
							{/* <a className="caption button-radius" href="."><span className="icon"></span>Shop now</a> */}
						</div>
                    </div>
                    <div className='carousel-item-custom'>
                    <img src="/web-xiaomi-1200x382.png" alt="Slide" />
						<div className="caption-group">
							<h2 className="caption title">
								{/* iPhone <span className="primary">6 <strong>Plus</strong></span> */}
							</h2>
							{/* <h4 className="caption subtitle">Dual SIM</h4> */}
							{/* <a className="caption button-radius" href="."><span className="icon"></span>Shop now</a> */}
						</div>
                    </div>
                    <div className='carousel-item-custom'>
                        <img src="/web-xiaomi-1200x382.png" alt="Slide" />
						<div className="caption-group">
							<h2 className="caption title">
								{/* iPhone <span className="primary">6 <strong>Plus</strong></span> */}
							</h2>
							{/* <h4 className="caption subtitle">Dual SIM</h4> */}
							{/* <a className="caption button-radius" href="."><span className="icon"></span>Shop now</a> */}
						</div>
                    </div>
                </Carousel>
            </div>
            <div className="promo-area">
                <div className="zigzag-bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo1">
                                <i className="fa fa-refresh"></i>
                                <p>?????i h??ng trong v??ng 30 ng??y</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo2">
                                <i className="fa fa-truck"></i>
                                <p>Giao h??ng mi???n ph??</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo3">
                                <i className="fa fa-lock"></i>
                                <p>Thanh to??n an to??n</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-promo promo4">
                                <i className="fa fa-gift"></i>
                                <p>S???n ph???m m???i</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
