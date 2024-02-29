import { db } from "./server";
import { Message } from "@/types";

export const getSortedShoutboxMessages = async (): Promise<Message[]> => {
  try {
    const success = await db.shoutbox.findMany({
      orderBy: { timestamp: "desc" },
    });

    if (!success) {
      throw new Error("Attempt to fetch Shoutbox messages failed.");
    }

    return success;
  } catch (error: any) {
    console.log(error);
    return [];
  }
};
