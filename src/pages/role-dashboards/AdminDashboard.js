import React from "react";

const Admin = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-red-600 text-white py-4 px-8 shadow-md">
        <h1 className="text-3xl font-semibold text-center">Admin Dashboard</h1>
      </header>

      {/* Content Section */}
      <section className="py-16 px-6 w-full max-w-screen-lg">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
          Welcome, Admin!
        </h2>
        <p className="text-lg text-gray-700 text-center mb-10">
          You have full access to manage the platform.
        </p>
        <div className="flex justify-center">
          <button
            className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition"
            onClick={() => alert("Admin managing platform...")}
          >
            Manage Platform
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-6 text-center">
        <p>© {new Date().getFullYear()} MarketInsyte. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Admin;
