import emojis from "@/lib/emojis.js";
import { NextResponse } from "next/server.js";

export function GET(request, response) {
  const { emojiId } = response.params;
  console.log(`emojiId is ${emojiId} of type ${typeof emojiId}`);
  if (!emojiId) {
    return NextResponse.json({
      success: false,
      error: "Client request did not include Emoji Id.",
    });
  }
  const emojiFound = emojis.filter((emoji) => emoji.id === +emojiId)[0];
  if (!emojiFound) {
    return NextResponse.json({ success: false, error: "Emoji Id not found." });
  }
  try {
    return NextResponse.json({ success: true, emoji: emojiFound });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

// export function DELETE(request, response) {
//   const { emojiId } = response.params;
//   console.log(`emojiId is ${emojiId} of type ${typeof emojiId}`);
//   if (!emojiId) {
//     return NextResponse.json({
//       success: false,
//       error: "Client request did not include Emoji Id.",
//     });
//   }
//   const deletedEmoji = emojis.filter((emoji) => emoji.id !== +emojiId);
//   if (!deletedEmoji) {
//     return NextResponse.json({ success: false, error: "Emoji Id not found." });
//   }
//   try {
//     return NextResponse.json({ success: true, emoji: emojiFound });
//   } catch (error) {
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }
