// components/Header.js

const Header = () => (
  <header className="bg-[#38220f] text-white shadow-md sticky top-0 z-50">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="text-lg font-bold">Coffee Diary</div>
      <nav>
        <ul className="flex">
          <li className="nav-link"><a href="#">Home</a></li>
          <li className="nav-link"><a href="#">Recommendations</a></li>
          <li className="nav-link"><a href="#">About</a></li>
          <li className="nav-link"><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
