import { verifyToken } from "@/lib/jwt";

export async function GET(req: Request) {
  try {
    const authHeader =
      req.headers.get("authorization");

    if (!authHeader) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyToken(token);

    return Response.json({
      success: true,
      user: decoded,
    });
  } catch {
    return Response.json(
      { error: "Invalid token" },
      { status: 401 }
    );
  }
}