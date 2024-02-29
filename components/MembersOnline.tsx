import "@/styles/members_online.css";

export const MembersOnline = () => {
  return (
    <section className="members-online">
      <h1 className="members-online-title">Members Online</h1>
      <ul className="members-online-list">
        <li>HeartyWarrior</li>
        <li>DownhillFool</li>
        <li>SeraphClue</li>
        <li>LotusHunt</li>
        <li>RavenMiracle</li>
        <li>GlowingDonor</li>
        <li>AboriginalEye</li>
      </ul>
      <span className="members-online-count">Total: 7 members</span>
    </section>
  );
};
