import React from 'react'

function Contact() {
  return (
    <>
    <section class="contact-section bg-black">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5">
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Address</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"> Ads Manager 18-22 ชั้นที่ 2 3 สุขุมวิท ซ. 63 แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-envelope text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Email</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50"><a href="#!">admin@AdsManager.com</a></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-3 mb-md-0">
                        <div class="card py-4 h-100">
                            <div class="card-body text-center">
                                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 class="text-uppercase m-0">Phone</h4>
                                <hr class="my-4 mx-auto" />
                                <div class="small text-black-50">0807965996</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="social d-flex justify-content-center">
                    <a class="mx-2" href="https://twitter.com/adsmanager88"><i class="fab fa-twitter"></i></a>
                    <a class="mx-2" href="https://www.facebook.com/myonlinethailand"><i class="fab fa-facebook-f"></i></a>
                    <a class="mx-2" href="https://www.youtube.com/channel/UCMSh0LMC_RczXmJ6Qtxo4QA"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </section>
      
    </>
  )
}

export default Contact
