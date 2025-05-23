import Announcements from "./_components/Announcements";
import Articles from "./_components/article/Articles";
import FeaturedPhotos from "./_components/FeaturedPhotos";
import GarbageSchedules from "./_components/GarbageSchedules";
import HappeningToday from "./_components/HappeningToday";
import HomepageHero from "./_components/HomepageHero";
import Hotlines from "./_components/Hotlines";

function HomePage() {
  return (
    <div className="space-y-4">
      <HomepageHero />
      <div className="px-8 grid gap-2">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Hotlines />
          </div>
          <div>
            <Announcements />
          </div>
        </div>
      </div>
      <Articles />
    </div>
  );  
}

export default HomePage;
