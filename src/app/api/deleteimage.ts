import { NextResponse } from "next/server";
import { UTApi } from "uploadthing/server";

export async function GET(req: Request) {
  try {
    const uti = new UTApi();
    const { searchParams } = new URL(req.url);

    const name = searchParams.get("name") as string;

    const result = await uti.deleteFiles(name);

    return NextResponse.json(
      {
        message: "image deleted successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "there was a error" }, { status: 500 });
  }
}
