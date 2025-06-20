import React from "react";

const Login = () => {
  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        <button className="w-full py-2 bg-pink-500 text-white rounded hover:bg-pink-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;