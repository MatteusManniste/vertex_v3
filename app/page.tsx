import "@/styles/home.css";
import { Banner } from "@/components/Banner";
import { Shoutbox } from "@/components/Shoutbox";
import { RecentThreads } from "@/components/RecentThreads";
import { Topics } from "@/components/Topics";
import { MembersOnline } from "@/components/MembersOnline";
import { getServiceStatus } from "@/library/data";

const Home = async () => {
  const shoutboxStatus = await getServiceStatus("shoutbox");

  return (
    <main>
      <Banner />
      <div className="wrapper">
        <div className="container">
          <Shoutbox disabled={!shoutboxStatus} />
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
