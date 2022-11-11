import Image from "next/image";
import BlueVoyage from "../../public/images/logo/blue-voyage-logo.png";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationArrow,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-custom-gray2 text-white">
      <div className="container py-14 px-4">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-start">
          <div className="flex flex-col self-center lg:self-start">
            <div className="lg:mt-5 w-[200px]">
              <Image src={BlueVoyage} alt="blue voyage logo" />
            </div>

            <div className="mt-2 flex justify-center gap-6 text-2xl text-white">
              <span>
                <a
                  href="https://www.facebook.com/DnataBD/"
                  aria-label="facebook"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a
                  href="https://www.twitter.com/DnataBD/"
                  aria-label="twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </span>
              <span>
                <a
                  href="https://www.instagram.com/DnataBD/"
                  aria-label="instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
              </span>
            </div>
          </div>

          {/* <div className="mt-10 lg:mt-0 flex flex-col gap-4 w-full lg:w-[600px]">
            <p className="text-white text-lg font-bold">We Accept:</p>
            <div className="relative w-full h-[40px] lg:h-[65px]">
              <Image
                src="/images/footer/footer-payment-method.png"
                alt="payment method"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div> */}

          <div className="mt-10 lg:mt-0 flex flex-col gap-5 text-sm font-bold ">
            <p className="">Contact Information</p>
            <div className="flex flex-col gap-3 ">
              <div>
                <span>
                  <FaPhone className="inline mr-2" />
                </span>
                <a
                  href="tel:+8802-9848304"
                  className="hover:text-gray-300 transition duration-300"
                >
                  (+8802) 9848304
                </a>
                &nbsp;|&nbsp;
                <a
                  href="tel:+8802-8831804"
                  className="hover:text-gray-300 transition duration-300"
                >
                  8831804
                </a>
                <p className="ml-6">
                  <a
                    href="tel:+8802-9847893"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    9847893
                  </a>
                  &nbsp;|&nbsp;
                  <a
                    href="tel:+8802-9842924"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    9842924
                  </a>
                  -
                  <a
                    href="tel:+8802-9842925"
                    className="hover:text-gray-300 transition duration-300"
                  >
                    5
                  </a>
                </p>
              </div>
              <div className="flex">
                <span>
                  <FaEnvelope className="inline mr-2" />
                </span>
                <a
                  href="mailto:info@dnatabd.com"
                  className="hover:text-gray-300 transition duration-300"
                >
                  info@dnatabd.com
                </a>
              </div>
              <div className="flex">
                <span>
                  <FaLocationArrow className="inline mr-2" />
                </span>
                <p className="hover:text-gray-300 transition duration-300">
                  The Florida Castle (3rd Floor), Suite- C1, House- 07
                  <br /> Road - 23/ A, Gulshan -1, Dhaka-1212
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 text-sm ">
          <p>&copy; 2022 Blue Voyage. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
