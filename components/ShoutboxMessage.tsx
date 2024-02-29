"use client";

import Link from "next/link";

import type { ShoutboxMessageProps } from "@/types";

export const ShoutboxMessage = ({
  author,
  message,
  timestamp,
  formattedTimestamp,
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
      <span
        className="shoutbox-message-timestamp"
        title={new Date(timestamp).toLocaleString()}
      >
        {formattedTimestamp}
      </span>
    </li>
  );
};
