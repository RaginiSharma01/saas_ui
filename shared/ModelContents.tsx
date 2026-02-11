"use client";
import React, { useState } from "react";

const ModelContents = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log({ email, password });
    
  };

  return (

    // <div className="bg-card-bg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400">Email</label>
        <input
          type="email"
          placeholder="xyz@email.com"
          className="px-3 py-2 rounded-lg bg-text-primary-200 border-gray-700 text-card-bg focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm text-gray-400">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="px-3 py-2 rounded-lg bg-text-primary-200 border-gray-700 text-card-bg focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="mt-2 bg-bg-primary transition rounded-lg py-2 text-white font-medium"
      >
        Login
      </button>
    </form>
    //</div>
  );
};

export default ModelContents;
