import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const { pathname } = useRouter();
  return (
    <header className="bg-[#38220f] text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-lg font-bold">Coffee Diary</div>
        <nav>
          <div className="flex">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link href="/recommendation" className={`nav-link ${pathname === '/recommendation' ? 'active' : ''}`}>Recommendations</Link>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
            <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
          </div>
        </nav>
      </div>
    </header>
  )
};

export default Header;
