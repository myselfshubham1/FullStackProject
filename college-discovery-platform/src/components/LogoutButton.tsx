"use client";

export default function LogoutButton() {
  return (
    <button
      onClick={() => {
        localStorage.removeItem("token");
        window.location.reload();
      }}
      className="bg-red-500 text-white px-3 py-2 rounded"
    >
      Logout
    </button>
  );
}