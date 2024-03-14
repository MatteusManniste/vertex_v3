import Link from "next/link";

import "@/styles/members_online.css";

export const MembersOnline = () => {
  return (
    <section className="members-online">
      <h1 className="members-online-title">Members Online</h1>
      <ul className="members-online-list">
        <li className="member-online">
          <Link className="member-online-user" href="/">
            HeartyWarrior
          </Link>
        </li>
        <li className="member-online">
          <Link className="member-online-user" href="/">
            DownhillFool
          </Link>
        </li>
        <li className="member-online">
          <Link className="member-online-user" href="/">
            SeraphClue
          </Link>
        </li>
        <li className="member-online">
          <Link className="member-online-user" href="/">
            LotusHunt
          </Link>
        </li>
        <li className="member-online">
          <Link className="member-online-user" href="/">
            RavenMiracle
          </Link>
        </li>
        <li className="member-online">
          <Link className="member-online-user" href="/">
            GlowingDonor
          </Link>
        </li>
        <li className="member-online">
          <Link className="member-online-user" href="/">
            AboriginalEye
          </Link>
        </li>
      </ul>
      <span className="members-online-count">Total: 9 (Members: 7, Guests: 2)</span>
    </section>
  );
};
