import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

export async function POST(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.replace("Bearer ", "");

    const decoded = verifyToken(token) as {
      userId: string;
      email: string;
    };

    const { collegeId } = await req.json();

    // Check if already saved
    const existing = await prisma.savedCollege.findUnique({
      where: {
        userId_collegeId: {
          userId: decoded.userId,
          collegeId,
        },
      },
    });

    if (existing) {
      return Response.json(
        {
          success: false,
          message: "College already saved",
        },
        {
          status: 400,
        }
      );
    }

    const saved = await prisma.savedCollege.create({
      data: {
        userId: decoded.userId,
        collegeId,
      },
    });

    return Response.json({
      success: true,
      message: "College saved successfully",
      saved,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        error: "Failed to save college",
      },
      {
        status: 500,
      }
    );
  }
}

export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return Response.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const token = authHeader.replace("Bearer ", "");

    const decoded = verifyToken(token) as {
      userId: string;
      email: string;
    };

    const savedColleges =
      await prisma.savedCollege.findMany({
        where: {
          userId: decoded.userId,
        },
        include: {
          college: true,
        },
      });

    return Response.json({
      success: true,
      savedColleges,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error: "Failed to fetch saved colleges",
      },
      {
        status: 500,
      }
    );
  }
}