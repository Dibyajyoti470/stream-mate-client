import HeroCarousel from "../shared/components/hero-carousel/HeroCarousel";
import SideNav from "../shared/components/side-nav/SideNav";
import "./App.css";

function App() {
  return (
    <div className="main-app">
      <SideNav />
      <main>
        <div className="hero-carousel-root">
          <HeroCarousel />
        </div>
      </main>
    </div>
  );
}

export default App;
