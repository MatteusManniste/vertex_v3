"use client";

import Link from "next/link";

import type { ShoutboxMessageProps } from "@/types";

export const ShoutboxMessage = ({
  author,
  message,
  onTagActionClick,
}: ShoutboxMessageProps) => {
  return (
    <li className="shoutbox-message">
      <span
        onClick={() => onTagActionClick(author)}
        className="shoutbox-tag-action"
      >
        @
      </span>
      <Link className="shoutbox-message-author" href="/">
        {author}
      </Link>
      {message}
      <span className="shoutbox-message-timestamp">a moment ago</span>
    </li>
  );
};
