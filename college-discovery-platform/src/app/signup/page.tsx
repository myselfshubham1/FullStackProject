"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Lock, GraduationCap } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleSignup(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Account created successfully!");
        router.push("/login");
      } else {
        alert(data.error || "Signup failed");
      }
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center p-6">
      <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">

        {/* Left Section */}
        <div className="bg-blue-700 text-white p-10 flex flex-col justify-center">
          <GraduationCap size={60} />

          <h1 className="text-4xl font-bold mt-6">
            Join College Discovery
          </h1>

          <p className="mt-4 text-lg text-blue-100">
            Discover, compare and save colleges across India.
          </p>

          <p className="mt-2 text-blue-200">
            Create your account and start exploring.
          </p>
        </div>

        {/* Right Section */}
        <div className="p-10">
          <h2 className="text-3xl font-bold mb-8">
            Create Account
          </h2>

          <form
            onSubmit={handleSignup}
            className="space-y-5"
          >
            <div>
              <label className="block mb-2 font-medium">
                Name
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <User size={18} />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                  className="w-full p-3 outline-none"
                  placeholder="Enter your name"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <Mail size={18} />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full p-3 outline-none"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Password
              </label>

              <div className="flex items-center border rounded-lg px-3">
                <Lock size={18} />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  className="w-full p-3 outline-none"
                  placeholder="Create password"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>
          </form>

          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}