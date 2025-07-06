const Footer = () => {
  return (
    <footer className="flex justify-center items-center mt-10 mb-5 ">
      <p className="text-slate-gray font-montserrat">
       {`${new Date().getFullYear()}`} © Nitin Prajapati | Crafting Exquisite
        Digital Experiences.
      </p>
    </footer>
  );
};

export default Footer;
