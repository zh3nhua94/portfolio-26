import { readFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

const profilePhotoPath = path.join(process.cwd(), "public", "profile-photo.png");

export async function GET() {
  try {
    const bytes = await readFile(profilePhotoPath);

    return new NextResponse(bytes, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json(
      { error: "Profile photo not found." },
      { status: 404 }
    );
  }
}
