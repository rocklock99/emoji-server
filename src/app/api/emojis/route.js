import emojis from "@/lib/emojis.js";
import { NextResponse } from "next/server.js";

export function GET() {
  try {
    return NextResponse.json({ success: true, emojis });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}

export async function POST(request, response) {
  const { name, character } = await request.json();
  if (!name) {
    return NextResponse.json({
      success: false,
      error: "No name was provided.",
    });
  }
  if (!character) {
    return NextResponse.json({
      success: false,
      error: "No character was provided.",
    });
  }
  const emoji = { id: emojis.length + 1, name, character };
  emojis.push(emoji);
  try {
    return NextResponse.json({ success: true, emoji });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
