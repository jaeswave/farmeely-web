const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-opacity-[90%] text-white py-2 text-center">
      <div className="flex justify-center items-center gap-2">
        <img src="/logo.png" alt="Logo" className="h-8" />
        <span className="text-lg font-semibold">MailMeQuran</span>
      </div>
      <p className="text-sm mt-2">
        &copy; {new Date().getFullYear()} MailMeQuran. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
