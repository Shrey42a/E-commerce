import React, { memo } from "react";

function Footer() {
  return (
    <>
      <footer class="main-footer">
        <div class="container">
            <div class="footer-content">
                <div class="flex flex-row">
                    <div class="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div class="logo-widget footer-widget">
                            <figure class="logo-box h-40 w-60"><a><img src="src/Logo1.svg" alt="" /></a></figure>
                            <div class="text">
                                <p>This website provides you a better quality of products, here you an buy any kind of products. This is @42Shopping the better ecommerce website near you....!</p>
                            </div>
                            <ul class="footer-social">
                                <li><a><i class="fab fa-facebook-f"></i></a></li>
                                <li><a><i class="fab fa-twitter"></i></a></li>
                                <li><a><i class="fab fa-vimeo-v"></i></a></li>
                                <li><a><i class="fab fa-google-plus-g"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      
      <div className="flex flex-col items-center justify-center p-3 lg:flex-row lg:justify-around btmfooter">
        <h1 className="text-sm font-light text-white">
          Copyright © 2022 | AKKU
        </h1>
        <h1 className="text-sm font-light text-white">
          Powered by Shrey Kumar
        </h1>
      </div>
    </>
  );
}
const BetterFooter = memo(Footer);
export default BetterFooter;
