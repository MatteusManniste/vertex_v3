export interface Message {
  id: string;
  author: string;
  message: string;
  timestamp: Date;
}

export interface ShoutboxMessageProps extends Message {
  formattedTimestamp: string;
  onTagActionClick: (author) => void;
}
