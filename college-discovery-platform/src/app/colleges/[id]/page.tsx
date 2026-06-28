import { prisma } from "@/lib/prisma";
import {
  MapPin,
  Tag,
  Star,
  Briefcase,
  IndianRupee,
} from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CollegePage({
  params,
}: PageProps) {
  const { id } = await params;

  const college = await prisma.college.findUnique({
    where: {
      id,
    },
  });

  if (!college) {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold">
          College Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="bg-white shadow-lg rounded-2xl border p-8">
        <h1 className="text-4xl font-bold mb-6">
          {college.name}
        </h1>

        <div className="grid md:grid-cols-2 gap-4 text-lg">
          <div className="flex items-center gap-3">
            <MapPin size={20} />
            <span>{college.city}</span>
          </div>

          <div className="flex items-center gap-3">
            <Tag size={20} />
            <span>{college.type}</span>
          </div>

          <div className="flex items-center gap-3">
            <Star size={20} />
            <span>{college.rating}</span>
          </div>

          <div className="flex items-center gap-3">
            <Briefcase size={20} />
            <span>{college.placements}% Placement</span>
          </div>

          <div className="flex items-center gap-3">
            <IndianRupee size={20} />
            <span>
              ₹{college.fees.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">
            About College
          </h2>

          <p className="text-gray-700 leading-relaxed">
            {college.description}
          </p>
        </div>
      </div>
    </div>
  );
}