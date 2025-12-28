export default function Login() {
    return (
        <main className="flex items-center justify-center h-screen bg-[#FAF7F2]">
            <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6">Login</h1>
                <form className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email"
                        className="border p-3 rounded"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="border p-3 rounded"
                    />
                    <button className="bg-[#193555] text-white py-3 rounded hover:bg-blue-900 transition">
                        Login
                    </button>
                </form>
            </div>
        </main>
    );
}
