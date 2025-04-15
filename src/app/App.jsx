import Carousel from "../shared/components/carousel/Carousel";
import HeroCarousel from "../shared/components/hero-carousel/HeroCarousel";
import { movies } from "../shared/components/hero-carousel/movie-data";
import SideNav from "../shared/components/side-nav/SideNav";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles["main-app"]}>
      <SideNav />
      <main>
        <div className={styles["hero-carousel-root"]}>
          <HeroCarousel />
          <Carousel heading="Continue Watching" items={movies} />
          <Carousel heading="Latest Releases" items={movies} />
          <Carousel heading="Top Rated" items={movies} />
        </div>
      </main>
    </div>
  );
}

export default App;
