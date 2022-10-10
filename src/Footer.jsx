import React, { memo } from "react";

function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="container">
            <div className="footer-content">
                <div className="flex flex-row">
                    <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                        <div className="logo-widget footer-widget">
                            <figure className="h-40 logo-box w-60"><a><img src="https://media.discordapp.net/attachments/933654325127938101/1025607932768960613/Logo4.png?width=789&height=492" alt="..." /></a></figure>
                            <div className="text">
                                <p>This website provides you a better quality of products, here you an buy any kind of product. This is @42Shopping the better ecommerce website near you....!</p>
                            </div>
                            <ul className="footer-social">
                                <li><a><i className="fab fa-facebook-f"></i></a></li>
                                <li><a><i className="fab fa-twitter"></i></a></li>
                                <li><a><i className="fab fa-vimeo-v"></i></a></li>
                                <li><a><i className="fab fa-google-plus-g"></i></a></li>
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
