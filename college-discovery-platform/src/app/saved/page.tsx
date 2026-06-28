"use client";

import { useEffect, useState } from "react";
import { MapPin, Tag, Star, Briefcase, IndianRupee } from "lucide-react";

interface SavedCollege {
  id: string;
  college: {
    id: string;
    name: string;
    city: string;
    type: string;
    rating: number;
    placements: number;
    fees: number;
  };
}

export default function SavedPage() {
  const [savedColleges, setSavedColleges] = useState<SavedCollege[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSaved() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setLoading(false);
          return;
        }

        const res = await fetch("/api/saved", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        console.log(data);

        if (data.success) {
          setSavedColleges(data.savedColleges);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchSaved();
  }, []);

  if (loading) {
    return <h1 className="p-8">Loading...</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Saved Colleges</h1>

      {savedColleges.length === 0 ? (
        <p>No saved colleges yet.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {savedColleges.map((item) => (
            <div key={item.id} className="border rounded-xl p-4 shadow">
              <h2 className="text-xl font-semibold">{item.college.name}</h2>

              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>{item.college.city}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Tag size={16} />
                  <span>{item.college.type}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Star size={16} />
                  <span>{item.college.rating}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Briefcase size={16} />
                  <span>{item.college.placements}%</span>
                </div>

                <div className="flex items-center gap-2">
                  <IndianRupee size={16} />
                  <span>{item.college.fees.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
