// App.jsx
import Layout from './components/Layout';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import EDU from './pages/Edu';
import Works from './pages/Works';
function App() {
  return (
    <Layout>
      <Home />
      <Experience />
      <EDU />
      <Works />
      <Contact />
    </Layout>
  );
}

export default App;
