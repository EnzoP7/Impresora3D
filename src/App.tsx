import { Navbar, Hero, HowItWorks, Gallery, Materials, Footer } from './components/sections';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Gallery />
        <Materials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
