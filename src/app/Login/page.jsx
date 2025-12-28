"use client";

export default function Login() {
    return (
        <main className="flex items-center justify-center min-h-screen bg-[#FAF7F2] p-6">
            <div className="bg-white rounded-2xl shadow-lg w-full max-w-md p-10">
                <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Login</h1>
                <form className="flex flex-col gap-6">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#cbd5e1]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border border-gray-300 rounded-full py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#cbd5e1]"
                    />
                    <button className="bg-[#E0E7FF] text-[#1E40AF] py-3 rounded-full font-semibold hover:bg-[#C7D2FE] transition">
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-gray-500">
                    Don't have an account?{" "}
                    <a href="/Signup" className="text-[#1E40AF] font-semibold hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </main>
    );
}
