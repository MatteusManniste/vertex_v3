export interface Message {
  author: string;
  message: string;
}

export interface ShoutboxMessageProps extends Message {
  onTagActionClick: (author) => void;
}
