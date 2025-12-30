"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authApi } from "../api/auth";
import Image from "next/image";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const checkAuth = () => {
      if (authApi.isAuthenticated()) {
        router.replace("/dashboard");
      }
    };
    
    checkAuth();
  }, [router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await authApi.login({ email, password });

      if (response.status === "success") {
        setTimeout(() => {
          router.replace("/dashboard");
        }, 100);
      } else {
        setError(response.message || "Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex ">
      {/* Left Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative ">
        {/* Background image with reduced height */}
        <div className="absolute top-10 bottom-10 left-10 right-10 bg-[url('/login.svg')] bg-no-repeat bg-right rounded-xl bg-cover " />

        {/* Foreground image */}
        {/* <Image
          src="/loginImg2.jpg"
          alt="Image"
          className="relative z-10 max-w-md rounded-xl"
          width={400}
          height={400}
        /> */}
      </div>

      {/* Login Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center min-h-screen bg-gray-50 p-8">
        <div className="w-full max-w-md rounded-2xl bg-white shadow-xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/1click-logo.png"
              alt="Logo"
              className="h-20 w-auto"
              width={140}
              height={70}
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-extrabold text-center text-gray-900">
            Sign in to <span className="text-blue-600">1ClickPolicy</span>
          </h2>

          {/* Tagline */}
          <p className="mt-2 mb-6 text-center text-gray-600 text-sm">
            Secure your future with just one click.
          </p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none 
            placeholder:text-gray-400 text-gray-900 transition"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none 
            placeholder:text-gray-400 text-gray-900 transition"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center py-2.5 rounded-lg font-semibold transition 
          ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } 
          text-white shadow-md`}
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <p className="text-red-600 text-sm mt-4 text-center font-medium">
              {error}
            </p>
          )}

          {/* Extra Links */}
          {/* <div className="mt-6 text-center text-sm text-gray-600">
            <p>
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign up
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
