import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const search = searchParams.get("search") || "";
  const city = searchParams.get("city") || "";
  const type = searchParams.get("type") || "";
  const page = Number(searchParams.get("page")) || 1;

  const limit = 12;
  const skip = (page - 1) * limit;

  const colleges = await prisma.college.findMany({
  where: {
    AND: [
      search
        ? {
            name: {
              contains: search,
              mode: "insensitive",
            },
          }
        : {},

      city
        ? {
            city: {
              equals: city,
              mode: "insensitive",
            },
          }
        : {},

      type
        ? {
            type: type as any,
          }
        : {},
    ],
  },
  skip,
  take: limit,
});

  const total = await prisma.college.count({
    where: {
      AND: [
        search
          ? {
              name: {
                contains: search,
                mode: "insensitive",
              },
            }
          : {},
        city
          ? {
              city: {
                equals: city,
                mode: "insensitive",
              },
            }
          : {},
        type
          ? {
              type: type as any,
            }
          : {},
      ],
    },
  });

  return Response.json({
    colleges,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}