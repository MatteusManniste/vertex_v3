// import { NextRequest, NextResponse } from "next/server";
// import { randomUUID } from "crypto";

// import { getSortedShoutboxMessages } from "@/library/data";
// import type { Message } from "@/types";
// import { db } from "@/library/server";
// import { z } from "zod";

// export const GET = async (): Promise<NextResponse<Message[]>> => {
//   const messages = await getSortedShoutboxMessages();
//   return NextResponse.json(messages);
// };

// export const POST = async (request: NextRequest) => {
//   try {
//     const data = await request.json();

//     const messageSchema = z.object({ message: z.string().min(1).max(256) });

//     const { message } = messageSchema.parse({
//       message: data.message,
//     });

//     const success = await db.shoutbox.create({
//       data: {
//         id: randomUUID(),
//         author: "test",
//         message: message,
//       },
//     });

//     console.log(success);

//     if (success) {
//       return new NextResponse("Successfully uploaded message.");
//     }

//     throw new Error("Internal error.");
//   } catch (error: any) {
//     console.log(error);
//     return new NextResponse("Internal error.", { status: 500 });
//   }
// };
