import { FaBullhorn, FaLightbulb, FaRegCircleQuestion } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

import "@/styles/topics.css";

export const Topics = () => {
  return (
    <section className="topics">
      <h1 className="topics-title">Important</h1>
      <div className="topics-wrapper">
        <div className="topic">
          <FaBullhorn className="topic-icon" />
          <div className="topic-info">
            <Link className="topic-title" href="/">
              Announcements
            </Link>
            <span className="topic-description">The latest forum news and updates can be found here.</span>
          </div>
          <div className="topic-stats">
            <div className="topic-stats-threads">
              <span>141</span>
              <span>Threads</span>
            </div>
            <div className="topic-stats-posts">
              <span className="topic-stats-posts-count">324</span>
              <span className="topic-stats-posts-text">Posts</span>
            </div>
            <div className="latest-thread">
              <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
                <Image src="https://picsum.photos/200" alt="" width={32} height={32} style={{ borderRadius: "50%", marginTop: "0.25rem" }} />
              </Link>
              <div className="latest-thread-content">
                <Link className="latest-thread-title" href="/">
                  We now have an official Discord server
                </Link>
                <div className="latest-thread-author-wrapper">
                  <span className="latest-thread-timestamp">16 Jan, 2023</span>
                  <Link className="latest-thread-author" href="/">
                    Syntax91
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topic">
          <FaLightbulb className="topic-icon" />
          <div className="topic-info">
            <Link className="topic-title" href="/">
              Suggestions & Feedback
            </Link>
            <span className="topic-description">Leave your suggestions and feedback here.</span>
          </div>
          <div className="topic-stats">
            <div className="topic-stats-threads">
              <span>141</span>
              <span>Threads</span>
            </div>
            <div className="topic-stats-posts">
              <span className="topic-stats-posts-count">324</span>
              <span className="topic-stats-posts-text">Posts</span>
            </div>
            <div className="latest-thread">
              <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
                <Image src="https://picsum.photos/200" alt="" width={32} height={32} style={{ borderRadius: "50%", marginTop: "0.25rem" }} />
              </Link>
              <div className="latest-thread-content">
                <Link className="latest-thread-title" href="/">
                  We now have an official Discord server
                </Link>
                <div className="latest-thread-author-wrapper">
                  <span className="latest-thread-timestamp">16 Jan, 2023</span>
                  <Link className="latest-thread-author" href="/">
                    Syntax91
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topic">
          <FaRegCircleQuestion className="topic-icon" />
          <div className="topic-info">
            <Link className="topic-title" href="/">
              Support
            </Link>
            <span className="topic-description">Find solutions to common issues here.</span>
          </div>
          <div className="topic-stats">
            <div className="topic-stats-threads">
              <span>141</span>
              <span>Threads</span>
            </div>
            <div className="topic-stats-posts">
              <span className="topic-stats-posts-count">324</span>
              <span className="topic-stats-posts-text">Posts</span>
            </div>
            <div className="latest-thread">
              <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
                <Image src="https://picsum.photos/200" alt="" width={32} height={32} style={{ borderRadius: "50%", marginTop: "0.25rem" }} />
              </Link>
              <div className="latest-thread-content">
                <Link className="latest-thread-title" href="/">
                  We now have an official Discord server
                </Link>
                <div className="latest-thread-author-wrapper">
                  <span className="latest-thread-timestamp">16 Jan, 2023</span>
                  <Link className="latest-thread-author" href="/">
                    Syntax91
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="topics-title">General</h1>
      <div className="topics-wrapper">
        <div className="topic">
          <FaBullhorn className="topic-icon" />
          <div className="topic-info">
            <Link className="topic-title" href="/">
              Announcements
            </Link>
            <span className="topic-description">The latest forum news and updates can be found here.</span>
          </div>
          <div className="topic-stats">
            <div className="topic-stats-threads">
              <span>141</span>
              <span>Threads</span>
            </div>
            <div className="topic-stats-posts">
              <span className="topic-stats-posts-count">324</span>
              <span className="topic-stats-posts-text">Posts</span>
            </div>
            <div className="latest-thread">
              <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
                <Image src="https://picsum.photos/200" alt="" width={32} height={32} style={{ borderRadius: "50%", marginTop: "0.25rem" }} />
              </Link>
              <div className="latest-thread-content">
                <Link className="latest-thread-title" href="/">
                  We now have an official Discord server
                </Link>
                <div className="latest-thread-author-wrapper">
                  <span className="latest-thread-timestamp">16 Jan, 2023</span>
                  <Link className="latest-thread-author" href="/">
                    Syntax91
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topic">
          <FaLightbulb className="topic-icon" />
          <div className="topic-info">
            <Link className="topic-title" href="/">
              Suggestions & Feedback
            </Link>
            <span className="topic-description">Leave your suggestions and feedback here.</span>
          </div>
          <div className="topic-stats">
            <div className="topic-stats-threads">
              <span>141</span>
              <span>Threads</span>
            </div>
            <div className="topic-stats-posts">
              <span className="topic-stats-posts-count">324</span>
              <span className="topic-stats-posts-text">Posts</span>
            </div>
            <div className="latest-thread">
              <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
                <Image src="https://picsum.photos/200" alt="" width={32} height={32} style={{ borderRadius: "50%", marginTop: "0.25rem" }} />
              </Link>
              <div className="latest-thread-content">
                <Link className="latest-thread-title" href="/">
                  We now have an official Discord server
                </Link>
                <div className="latest-thread-author-wrapper">
                  <span className="latest-thread-timestamp">16 Jan, 2023</span>
                  <Link className="latest-thread-author" href="/">
                    Syntax91
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="topic">
          <FaRegCircleQuestion className="topic-icon" />
          <div className="topic-info">
            <Link className="topic-title" href="/">
              Support
            </Link>
            <span className="topic-description">Find solutions to common issues here.</span>
          </div>
          <div className="topic-stats">
            <div className="topic-stats-threads">
              <span>141</span>
              <span>Threads</span>
            </div>
            <div className="topic-stats-posts">
              <span className="topic-stats-posts-count">324</span>
              <span className="topic-stats-posts-text">Posts</span>
            </div>
            <div className="latest-thread">
              <Link className="recent-thread-avatar" href="/" tabIndex={-1}>
                <Image src="https://picsum.photos/200" alt="" width={32} height={32} style={{ borderRadius: "50%", marginTop: "0.25rem" }} />
              </Link>
              <div className="latest-thread-content">
                <Link className="latest-thread-title" href="/">
                  We now have an official Discord server
                </Link>
                <div className="latest-thread-author-wrapper">
                  <span className="latest-thread-timestamp">16 Jan, 2023</span>
                  <Link className="latest-thread-author" href="/">
                    Syntax91
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
