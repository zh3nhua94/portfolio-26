import { promises as fs } from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "linkedin.pdf");
  const fileBuffer = await fs.readFile(filePath);

  return new Response(fileBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Zen-Wong-Resume.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
