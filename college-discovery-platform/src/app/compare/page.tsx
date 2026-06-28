"use client";

import { useEffect, useState } from "react";

interface College {
  id: string;
  name: string;
  city: string;
  type: string;
  rating: number;
  placements: number;
  fees: number;
}

export default function ComparePage() {
  const [colleges, setColleges] = useState<College[]>([]);
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    async function fetchColleges() {
      const res = await fetch("/api/colleges/all");
      const data = await res.json();

      setColleges(data);
      setLoading(false);
    }

    fetchColleges();
  }, []);

  const college1 = colleges.find((c) => c.id === first);
  const college2 = colleges.find((c) => c.id === second);

  if (loading) {
    return <div className="p-8 text-center">Loading colleges...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Compare Colleges</h1>

      <div className="flex gap-4 mb-8">
        <select
          value={first}
          onChange={(e) => setFirst(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select First College</option>

          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>

        <select
          value={second}
          onChange={(e) => setSecond(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">Select Second College</option>

          {colleges.map((college) => (
            <option key={college.id} value={college.id}>
              {college.name}
            </option>
          ))}
        </select>
      </div>

      {college1 && college2 && (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border p-3">Feature</th>
              <th className="border p-3">{college1.name}</th>
              <th className="border p-3">{college2.name}</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="border p-3">City</td>
              <td className="border p-3">{college1.city}</td>
              <td className="border p-3">{college2.city}</td>
            </tr>

            <tr>
              <td className="border p-3">Type</td>
              <td className="border p-3">{college1.type}</td>
              <td className="border p-3">{college2.type}</td>
            </tr>

            <tr>
              <td className="border p-3">Rating</td>
              <td className="border p-3">⭐ {college1.rating}</td>
              <td className="border p-3">⭐ {college2.rating}</td>
            </tr>

            <tr>
              <td className="border p-3">Placement</td>
              <td className="border p-3">{college1.placements}%</td>
              <td className="border p-3">{college2.placements}%</td>
            </tr>

            <tr>
              <td className="border p-3">Fees</td>
              <td className="border p-3">₹{college1.fees.toLocaleString()}</td>
              <td className="border p-3">₹{college2.fees.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
