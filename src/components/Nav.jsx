import { navLinks } from "../constants";
import { nplogo } from "../assets";
import Switcher from "./Switcher";

const Nav = () => {
  return (
    <header
      data-aos="fade-down"
      data-aos-duration="2000"
      className="padding-x py-5  absolute z-10 w-full"
    >
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={nplogo} className="md:ml-10" width={50} alt="nitin" />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-red-500"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-5">
          <Switcher />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
