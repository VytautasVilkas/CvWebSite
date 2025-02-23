// src/components/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
