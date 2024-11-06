// Signup.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      // Mock signup function - replace with actual signup logic
      console.log("User signed up:", data);
      navigate('/login');
    } catch (error) {
      console.error("Signup failed", error);
    }
    setLoading(false);
  };

  return (
    <div className="user">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label>Username:</label>
        <input
          type="text"
          {...register("username", { required: "Username is required" })}
        />
        <p>{errors.username?.message}</p>

        <label>Email:</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email",
            },
          })}
        />
        <p>{errors.email?.message}</p>

        <label>Password:</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Min 6 characters" },
          })}
        />
        <p>{errors.password?.message}</p>

        <button disabled={loading} type="submit">
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
