// src/components/Layout.jsx
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-green-400 font-mono">
      <Navbar />
      <main className="flex-grow container mx-auto px-6 py-10">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;

