import "@/styles/home.css";
import { Banner } from "@/components/Banner";
import { Shoutbox } from "@/components/Shoutbox";
import { RecentThreads } from "@/components/RecentThreads";
import { Topics } from "@/components/Topics";
import { MembersOnline } from "@/components/MembersOnline";

const Home = () => {
  return (
    <main>
      <Banner />
      <div className="wrapper">
        <div className="container">
          <Shoutbox />
          <Topics />
        </div>
        <div className="container2">
          <RecentThreads />
          <MembersOnline />
        </div>
      </div>
    </main>
  );
};

export default Home;
