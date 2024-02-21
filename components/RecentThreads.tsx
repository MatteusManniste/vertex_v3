import Image from "next/image";
import Link from "next/link";

import "@/styles/recent_threads.css";

export const RecentThreads = () => {
  return (
    <section className="recent-threads">
      <h1 className="recent-threads-title">Recent Threads</h1>
      <ul className="recent-threads-feed">
        <li className="recent-thread">
          <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
            <Image
              src="https://picsum.photos/200"
              alt=""
              width={32}
              height={32}
              style={{ borderRadius: "100%", marginTop: "0.25rem" }}
            />
          </Link>
          <div className="recent-thread-wrapper">
            <Link className="recent-thread-title" href="/">
              how to rob a bank (EASY, FAST, MEGA PROFIT) CLICK NOW!
            </Link>
            <Link className="recent-thread-author" href="/">
              MarkT1
            </Link>
            <span className="recent-thread-timestamp">6 minutes ago</span>
          </div>
        </li>
        <li className="recent-thread">
          <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
            <Image
              src="https://picsum.photos/200"
              alt=""
              width={32}
              height={32}
              style={{ borderRadius: "100%", marginTop: "0.25rem" }}
            />
          </Link>
          <div className="recent-thread-wrapper">
            <Link className="recent-thread-title" href="/">
              how to rob a bank (EASY, FAST, MEGA PROFIT) CLICK NOW!
            </Link>
            <Link className="recent-thread-author" href="/">
              MarkT1
            </Link>
            <span className="recent-thread-timestamp">6 minutes ago</span>
          </div>
        </li>
        <li className="recent-thread">
          <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
            <Image
              src="https://picsum.photos/200"
              alt=""
              width={32}
              height={32}
              style={{ borderRadius: "100%", marginTop: "0.25rem" }}
            />
          </Link>
          <div className="recent-thread-wrapper">
            <Link className="recent-thread-title" href="/">
              how to rob a bank (EASY, FAST, MEGA PROFIT) CLICK NOW!
            </Link>
            <Link className="recent-thread-author" href="/">
              MarkT1
            </Link>
            <span className="recent-thread-timestamp">6 minutes ago</span>
          </div>
        </li>
        <li className="recent-thread">
          <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
            <Image
              src="https://picsum.photos/200"
              alt=""
              width={32}
              height={32}
              style={{ borderRadius: "100%", marginTop: "0.25rem" }}
            />
          </Link>
          <div className="recent-thread-wrapper">
            <Link className="recent-thread-title" href="/">
              how to rob a bank (EASY, FAST, MEGA PROFIT) CLICK NOW!
            </Link>
            <Link className="recent-thread-author" href="/">
              MarkT1
            </Link>
            <span className="recent-thread-timestamp">6 minutes ago</span>
          </div>
        </li>
        <li className="recent-thread">
          <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
            <Image
              src="https://picsum.photos/200"
              alt=""
              width={32}
              height={32}
              style={{ borderRadius: "100%", marginTop: "0.25rem" }}
            />
          </Link>
          <div className="recent-thread-wrapper">
            <Link className="recent-thread-title" href="/">
              how to rob a bank (EASY, FAST, MEGA PROFIT) CLICK NOW!
            </Link>
            <Link className="recent-thread-author" href="/">
              MarkT1
            </Link>
            <span className="recent-thread-timestamp">6 minutes ago</span>
          </div>
        </li>
      </ul>
    </section>
  );
};
