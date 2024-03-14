export interface MessageBody {
  author: string;
  message: string;
}

export interface Message extends MessageBody {
  id: string;
  timestamp: Date;
}

export interface ShoutboxMessageProps extends Message {
  formattedTimestamp: string;
  onTagActionClick: (author) => void;
}
