import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto my-10 md:my-20">
      <div className="divider"></div>

      <div className="flex flex-col md:flex-row gap-40 my-10 md:my-16">
        <div className="space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
          <div>
            <img src={Logo} alt="Logo" className="mx-auto md:mx-0" />
            <p className="text-[#64748B] mt-4">
              Curated tools, technologies, and resources for developers
              <br className="hidden md:inline" /> building modern software.
            </p>
          </div>
          <ul className="flex gap-4 font-semibold text-[#64748B]">
            <li>
              <a href="" className="hover:text-black">
                GitHub
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black">
                Twitter
              </a>
            </li>
            <li>
              <a href="" className="hover:text-black">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 text-center md:text-left">
          <div>
            <h2 className="font-semibold mb-4">PRODUCT</h2>
            <ul className="text-[#64748B] space-y-2">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Technologies</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">COMPANY</h2>
            <ul className="text-[#64748B] space-y-2">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h2 className="font-semibold mb-4">LEGAL</h2>
            <ul className="text-[#64748B] space-y-2">
              <li>
                <a href="">Privacy Policy</a>
              </li>
              <li>
                <a href="">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 my-6 text-center">
        <h2 className="text-sm text-gray-500">
          &copy; 2026 Dev Stack. All rights reserved.
        </h2>

        <ul className="flex gap-4 text-[#64748B]">
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Terms</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
