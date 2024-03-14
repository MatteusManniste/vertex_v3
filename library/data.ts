import { randomUUID } from "crypto";

import { db } from "./server";
import type { Message, MessageBody } from "@/types";
import { messageBodySchema } from "@/library/schemas";

export const getSortedShoutboxMessages = async (): Promise<Message[]> => {
  return await db.shoutbox.findMany({
    orderBy: { timestamp: "desc" },
    take: 200,
  });
};

export const postShoutboxMessage = async (shoutboxMessage: MessageBody) => {
  const { author, message } = messageBodySchema.parse(shoutboxMessage);

  return !!(await db.shoutbox.create({
    data: {
      id: randomUUID(),
      author: author,
      message: message,
      timestamp: new Date(),
    },
  }));
};

export const getServiceStatus = async (service: string) => {
  const serviceStatus = await db.services.findFirst({
    where: {
      service: service,
    },
    select: {
      status: true,
    },
  });

  if (serviceStatus) {
    const { status } = serviceStatus;
    return status;
  }

  return false;
};
