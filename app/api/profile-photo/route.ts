import { readFile } from "node:fs/promises";
import { NextResponse } from "next/server";

const profilePhotoPath =
  "C:/Users/User/.cursor/projects/c-Users-User-Documents-Projects-Site/assets/c__Users_User_AppData_Roaming_Cursor_User_workspaceStorage_f269066e60e5f2144887a6e486eff230_images_IMG_20260208_215057_848_1_-bb5c0f3e-7757-4b3d-9c09-16c641ed8bf8.png";

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
