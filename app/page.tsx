import "@/styles/home.css";
import { Banner } from "@/components/Banner";
import { Shoutbox } from "@/components/Shoutbox";
import { RecentThreads } from "@/components/RecentThreads";
import { Topics } from "@/components/Topics";

const Home = () => {
  return (
    <main>
      <Banner />
      <div className="wrapper">
        <div className="container">
          <Shoutbox />
          <Topics />
        </div>
        <RecentThreads />
      </div>
    </main>
  );
};

export default Home;
