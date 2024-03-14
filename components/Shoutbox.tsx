"use client";

import { useRef, useState, useLayoutEffect } from "react";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa6";

import "@/styles/shoutbox.css";
import type { Message } from "@/types";
import { formatTimestamp } from "@/helpers/formatTimestamp";

export const Shoutbox = ({ disabled }: { disabled?: boolean }) => {
  const shoutboxInputRef = useRef<HTMLInputElement>(null);
  const [shoutboxMessages, setShoutboxMessages] = useState<Message[]>([]);

  const fetchShoutboxMessages = async () => {
    let shoutboxMessages: Message[] = [];
    const response = await fetch("/api/shoutbox/messages");

    if (response.ok) {
      shoutboxMessages = await response.json();

      // converting the timestamp back to a Date object after receiving it as string from the response
      shoutboxMessages.forEach((message) => {
        message.timestamp = new Date(message.timestamp);
      });
    }

    return shoutboxMessages;
  };

  useLayoutEffect(() => {
    (async function () {
      // initializing the shoutbox messages as soon as the component mounts
      setShoutboxMessages(await fetchShoutboxMessages());
    })();

    // polling for new shoutbox messages every 5 seconds
    const interval = setInterval(async () => {
      setShoutboxMessages(await fetchShoutboxMessages());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSendingMessage = async (e: React.FormEvent) => {
    // TODO: get author from auth context

    e.preventDefault();

    if (shoutboxInputRef.current) {
      const response = await fetch("/api/shoutbox/messages", {
        method: "post",
        body: JSON.stringify({
          author: "admin123",
          message: shoutboxInputRef.current.value,
        }),
      });

      if (response.ok) {
        // update the shoutbox after user sent a message
        setShoutboxMessages(await fetchShoutboxMessages());
        shoutboxInputRef.current.value = "";
        return;
      }

      shoutboxInputRef.current?.classList.add("shoutbox-message-error");
    }
  };

  const handleTagging = (author: string) => {
    if (shoutboxInputRef.current) {
      const inputValue = shoutboxInputRef.current.value;
      shoutboxInputRef.current.value = `@${author} ${inputValue}`;
      shoutboxInputRef.current.focus();
    }
  };

  return (
    <section className="shoutbox">
      <h1 className="shoutbox-title">Shoutbox</h1>
      <ul className="shoutbox-messages">
        {shoutboxMessages.map(({ id, author, message, timestamp }) => {
          return (
            <li className="shoutbox-message" key={id}>
              <span onClick={() => handleTagging(author)} className="shoutbox-tag-action">
                @
              </span>
              <Link className="shoutbox-message-author" href="/">
                {author}
              </Link>
              {message}
              <span className="shoutbox-message-timestamp" title={timestamp.toLocaleString()}>
                {formatTimestamp(timestamp)}
              </span>
            </li>
          );
        })}
      </ul>
      <form className="shoutbox-form" action="" method="post" onSubmit={(e) => handleSendingMessage(e)}>
        <input
          onInput={() => shoutboxInputRef.current?.classList.remove("shoutbox-message-error")}
          className="shoutbox-input"
          type="text"
          placeholder={disabled ? "Shoutbox is disabled." : "Write a message..."}
          autoComplete="off"
          ref={shoutboxInputRef}
          disabled={disabled}
        />
        <button className="shoutbox-button" type="submit" title={disabled ? "Shoutbox is disabled." : "Send message"} disabled={disabled}>
          <FaPaperPlane />
        </button>
      </form>
    </section>
  );
};
