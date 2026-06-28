"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, GraduationCap, Bookmark, Scale, LogIn, UserPlus } from "lucide-react";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

 useEffect(() => {
  const checkAuth = () => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  };

  checkAuth();

  const interval = setInterval(checkAuth, 500);

  return () => clearInterval(interval);
}, []);

  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
        <Link href="/" className="flex items-center gap-2 hover:text-blue-600">
          <Home size={18} />
          Home
        </Link>

        <Link
          href="/colleges"
          className="flex items-center gap-2 hover:text-blue-600"
        >
          <GraduationCap size={18} />
          Colleges
        </Link>

        {isLoggedIn && (
          <>
            <Link
              href="/saved"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Bookmark size={18} />
              Saved
            </Link>

            <Link
              href="/compare"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <Scale size={18} />
              Compare
            </Link>

            <LogoutButton />
          </>
        )}

        {!isLoggedIn && (
          <>
            <Link
              href="/login"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <LogIn size={18} />
              Login
            </Link>

            <Link
              href="/signup"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <UserPlus size={18} />
              Signup
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}