"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  MapPin,
  Star,
  Briefcase,
  IndianRupee,
  Bookmark,
  Tag,
} from "lucide-react";

interface College {
  id: string;
  name: string;
  city: string;
  type: string;
  fees: number;
  rating: number;
  placements: number;
  description: string;
}

export default function CollegesPage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  async function fetchColleges() {
    let url = "/api/colleges?";

    if (search) url += `search=${search}&`;
    if (type) url += `type=${type}`;

    const res = await fetch(url);
    const data = await res.json();

    setColleges(data.colleges);
    setTotalPages(data.totalPages);

    setLoading(false);
  }

  const saveCollege = async (collegeId: string) => {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first");
    return;
  }

  const res = await fetch("/api/saved", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ collegeId }),
  });

  const data = await res.json();

  alert(data.message || "College saved");
};

  useEffect(() => {
    async function fetchColleges() {
      try {
        setLoading(true);

        const res = await fetch(`/api/colleges?page=${page}`);

        const data = await res.json();
        console.log("API DATA:", data);

        console.log(data);

        setColleges(data.colleges);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchColleges();
  }, [page]);

  if (loading) {
    return <div className="p-8 text-center">Loading colleges...</div>;
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-6">College Discovery Platform</h1>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Search colleges..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-80"
        />

        <button
          onClick={fetchColleges}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Types</option>
          <option value="IIT">IIT</option>
          <option value="NIT">NIT</option>
          <option value="IIIT">IIIT</option>
          <option value="Medical">Medical</option>
          <option value="Law">Law</option>
          <option value="Private">Private</option>
          <option value="University">University</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {colleges.map((college) => (
          <div key={college.id} className="border rounded-xl p-4 shadow">
            <h2 className="text-xl font-semibold gap-2">{college.name} </h2>

            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{college.city}</span>
              </div>

              <div className="flex items-center gap-2">
                <Tag size={16} />
                <span>{college.type}</span>
              </div>

              <div className="flex items-center gap-2">
                <Star size={16} />
                <span>{college.rating}</span>
              </div>

              <div className="flex items-center gap-2">
                <Briefcase size={16} />
                <span>{college.placements}%</span>
              </div>

              <div className="flex items-center gap-2">
                <IndianRupee size={16} />
                <span>{college.fees.toLocaleString()}</span>
              </div>
            </div>

            <Link
              href={`/colleges/${college.id}`}
              className="bg-blue-600 text-white px-4 py-2 rounded" style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "8px" }}
            >
              View Details
            </Link>
            
            <button
              onClick={() => saveCollege(college.id)}
              className="bg-green-600 text-white px-4 py-2 rounded ml-2" style={{ display: "inline-flex", alignItems: "center", gap: "4px", flexDirection: "row", marginTop: "8px" }}
            >
              <Bookmark size={16} />
              Save
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-2 mt-10">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-2 rounded ${
              page === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
