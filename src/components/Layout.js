import Header from './Header';

const Layout = ({ children }) => (
  <div className="bg-gray-100 min-h-screen">
    <Header />
    <main className="container mx-auto px-4 py-6">
      {children}
    </main>
  </div>
);

export default Layout;