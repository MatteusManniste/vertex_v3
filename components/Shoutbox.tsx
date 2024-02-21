"use client";

import { FaPaperPlane } from "react-icons/fa6";
import { useRef, useState } from "react";
import { ShoutboxMessage } from "./ShoutboxMessage";
import type { Message } from "@/types";

import "@/styles/shoutbox.css";

export const Shoutbox = () => {
  const shoutboxInputRef = useRef<HTMLInputElement>(null);
  const [shoutboxMessages, setShoutboxMessages] = useState<Message[]>([]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (shoutboxInputRef.current) {
      const newMessage: Message = {
        author: "test",
        message: shoutboxInputRef.current.value.trim(),
      };

      setShoutboxMessages([...shoutboxMessages, newMessage]);
      shoutboxInputRef.current.value = "";
    }
  };

  const handleTagging = (author: string) => {
    if (shoutboxInputRef.current) {
      shoutboxInputRef.current.value =
        `@${author} ` + shoutboxInputRef.current.value;
      shoutboxInputRef.current.focus();
    }
  };

  return (
    <section className="shoutbox">
      <h1 className="shoutbox-title">Shoutbox</h1>
      <ul className="shoutbox-messages">
        {shoutboxMessages.map(({ author, message }, index) => {
          return (
            <ShoutboxMessage
              key={index}
              author={author}
              message={message}
              onTagActionClick={handleTagging}
            />
          );
        })}
      </ul>
      <form
        className="shoutbox-form"
        action=""
        onSubmit={(e) => handleFormSubmit(e)}
      >
        <input
          className="shoutbox-input"
          type="text"
          placeholder="Write a message..."
          autoComplete="off"
          name="shoutboxInput"
          ref={shoutboxInputRef}
        />
        <button className="shoutbox-button" type="submit">
          <FaPaperPlane />
        </button>
      </form>
    </section>
  );
};
