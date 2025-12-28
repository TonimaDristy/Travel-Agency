"use client";

import { useState } from "react";

export default function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // For now, just log the form data
        console.log({ name, email, password });

        // Example API call (replace with your backend)

        const res = await fetch("/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password }),
        });
        const data = await res.json();
        console.log(data);

    };

    return (
        <main className="mt-10 flex items-center justify-center min-h-screen bg-[#FAF7F2] p-6">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-10">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Sign Up
                </h1>

                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#cbd5e1]"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#cbd5e1]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#cbd5e1]"
                    />
                    <button
                        type="submit"
                        className="bg-[#E0E7FF] text-[#1E40AF] py-3 rounded-full font-semibold hover:bg-[#C7D2FE] transition"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-500">
                    Already have an account?{" "}
                    <a
                        href="/Login"
                        className="text-[#1E40AF] font-semibold hover:underline"
                    >
                        Login
                    </a>
                </p>
            </div>
        </main>
    );
}
