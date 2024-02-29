"use client";

import { FaPaperPlane } from "react-icons/fa6";
import { useRef, useState, useOptimistic, useEffect } from "react";

import "@/styles/shoutbox.css";
import type { Message } from "@/types";
import { ShoutboxMessage } from "./ShoutboxMessage";
import { handleTimestamps } from "@/helpers/handleTimestamps";
import { getSortedShoutboxMessages } from "@/library/data";

export const Shoutbox = () => {
  // const shoutboxInputRef = useRef<HTMLInputElement>(null);
  // const [shoutboxMessages, setShoutboxMessages] = useState<Message[]>([]);

  // const getShoutboxMessage = async (): Promise<Message[]> => {
  //   const response = await fetch("/api/shoutbox/messages");
  //   const shoutboxMessageResponse = await response.json();

  //   const messages: Message[] = shoutboxMessageResponse.map((message: any) => ({
  //     ...message,
  //     timestamp: new Date(message.timestamp),
  //   }));

  //   return messages;
  // };

  // useEffect(() => {
  //   setInterval(async () => {
  //     setShoutboxMessages(await getShoutboxMessage());
  //   }, 3000);
  // }, []);

  // FIXME: bugged rn
  // const [optimisticMessages, addOptimisticMessage] = useOptimistic<Message[]>(
  //   messages,
  //   (state: Message[], newMessage: Message) => [
  //     ...state,
  //     { ...newMessage, pending: true },
  //   ]
  // );

  // const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const response = await fetch("/api/shoutbox/messages", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       message: shoutboxInputRef.current?.value,
  //     }),
  //   });

  //   if (!response.ok) {
  //     // TODO: finish this and handle send button disabling as well
  //     shoutboxInputRef.current?.classList?.add("shoutbox-message-error");
  //   } else {
  //     if (shoutboxInputRef.current) {
  //       shoutboxInputRef.current.value = "";
  //     }
  //   }

  //   // if (shoutboxInputRef.current) {
  //   //   const newMessage: Message = {
  //   //     author: "test",
  //   //     message: shoutboxInputRef.current.value.trim(),
  //   //     timestamp: new Date(Date.now()),
  //   //   };

  //   //   setShoutboxMessages([...shoutboxMessages, newMessage]);
  //   //   addOptimisticMessage(newMessage);
  //   //   shoutboxInputRef.current.value = "";
  //   // }
  // };

  // useEffect(() => {
  //   console.log(optimisticMessages);
  // }, [optimisticMessages]);

  // const handleTagging = (author: string) => {
  //   if (shoutboxInputRef.current) {
  //     shoutboxInputRef.current.value =
  //       `@${author} ` + shoutboxInputRef.current.value;
  //     shoutboxInputRef.current.focus();
  //   }
  // };

  return (
    <section className="shoutbox">
      <h1 className="shoutbox-title">Shoutbox</h1>
      <ul className="shoutbox-messages">
        <li className="shoutbox-message">
          <span className="shoutbox-tag-action">@</span>
          <span className="shoutbox-message-author">user652</span>
          thanks. its nice to be here!
          <span className="shoutbox-message-timestamp">a moment ago</span>
        </li>
        <li className="shoutbox-message">
          <span className="shoutbox-tag-action">@</span>
          <span className="shoutbox-message-author">admin</span>
          welcome everyone!
          <span className="shoutbox-message-timestamp">2 minutes ago</span>
        </li>
        {/* {shoutboxMessages.map(({ id, author, message, timestamp }) => {
          const formattedTimestamp = handleTimestamps(timestamp);
          return (
            <ShoutboxMessage
              key={id}
              id={id}
              author={author}
              message={message}
              timestamp={timestamp}
              formattedTimestamp={formattedTimestamp}
              onTagActionClick={handleTagging}
            />
          );
        })} */}
      </ul>
      <form className="shoutbox-form">
        <input
          className="shoutbox-input"
          type="text"
          placeholder="Write a message..."
          autoComplete="off"
          name="shoutboxInput"
          // ref={shoutboxInputRef}
          // onInput={() =>
          //   shoutboxInputRef.current?.classList?.remove(
          //     "shoutbox-message-error"
          //   )
          // }
        />
        <button className="shoutbox-button" type="submit" title="Send message">
          <FaPaperPlane />
        </button>
      </form>
    </section>
  );
};
