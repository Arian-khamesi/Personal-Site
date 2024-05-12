import React from 'react'

export default function Slider() {
    return (
        <div class="w-100 fifth-bg">
            <div class="container">
                <div class="row">
                    <div class="col-12 mb-4">
                        <h3 class="text-white fs-1 mb-4 slider">What Clients say</h3>
                    </div>
                    <div class="col-12">
                        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="images/arian2.png" class="d-block w-50 rounded-circle mx-auto mb-slid" alt="slide"/>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5 class="custom-font">Winston Churchill</h5>
                                            <p class="custom-font">Success is not final, failure is not fatal — it is the courage to continue that counts.</p>
                                        </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/arian3.png" class="d-block w-50 rounded-circle mx-auto mb-slid" alt="slide"/>
                                        <div class="carousel-caption d-none d-md-block">
                                            <h5 class="custom-font">Arian Xamesi</h5>
                                            <p class="custom-font">I'd rather regret the things I've done than regret the things I haven't done.</p>
                                        </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="images/arian1.png" class="d-block w-50 rounded-circle mx-auto mb-slid" alt="slide"/>
                                        <div class="carousel-caption d-none d-md-block ">
                                            <h5 class="custom-font">Jim Rohn</h5>
                                            <p class="custom-font">If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.</p>
                                        </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
