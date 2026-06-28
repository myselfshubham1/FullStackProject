"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Mail,
  Lock,
  GraduationCap,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("token", data.token);

        router.push("/colleges");

        setTimeout(() => {
          window.location.reload();
        }, 100);
      } else {
        alert(data.error || "Login failed");
      }
    } catch {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid md:grid-cols-2">
        
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center bg-blue-600 text-white p-12">
          <GraduationCap size={60} />

          <h1 className="text-5xl font-bold mt-6 mb-4">
            Welcome Back
          </h1>

          <p className="text-lg text-blue-100">
            Login to access your saved colleges,
            comparisons and personalized discovery experience.
          </p>
        </div>

        {/* Right Side */}
        <div className="p-10 md:p-14">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Login
          </h2>

          <form
            onSubmit={handleLogin}
            className="space-y-6"
          >
            <div>
              <label className="block mb-2 text-gray-700">
                Email
              </label>

              <div className="flex items-center border rounded-xl px-3">
                <Mail
                  size={18}
                  className="text-gray-500"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 outline-none"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-gray-700">
                Password
              </label>

              <div className="flex items-center border rounded-xl px-3">
                <Lock
                  size={18}
                  className="text-gray-500"
                />

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 outline-none"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-8 text-gray-600">
            Don't have an account?{" "}
            <Link
              href="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}