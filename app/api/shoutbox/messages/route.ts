import { NextRequest, NextResponse } from "next/server";

import { postShoutboxMessage, getSortedShoutboxMessages, getServiceStatus } from "@/library/data";
import type { MessageBody, Message } from "@/types";

export const GET = async (): Promise<NextResponse<Message[]>> => {
  const messages = await getSortedShoutboxMessages();
  return NextResponse.json(messages);
};

export const POST = async (request: NextRequest) => {
  const isShoutboxEnabled = await getServiceStatus("shoutbox");

  if (isShoutboxEnabled) {
    const requestBody: MessageBody = await request.json();

    if (await postShoutboxMessage(requestBody)) {
      return new Response("Successfully added a new message to the shoutbox.");
    }

    return new Response("Error while attempting to add a new message to the shoutbox.", {
      status: 500,
    });
  }

  return new Response("Unable to send message - the shoutbox is disabled.", {
    status: 503,
  });
};
