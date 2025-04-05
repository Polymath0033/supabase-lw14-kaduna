import { AppButton } from "../components/AppButton";
import AppInput from "../components/AppInput";
import { AuthWrapper } from "../components/AuthWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { supabase } from "../libs/supabase";
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    setLoading(true);
    const response = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    setLoading(false);
    const data = response.data;
    console.log("data", data);
    if (response.error) {
      setError(response.error.message);
      return;
    } else {
      setError("");
      // Navigate to home page or any other page
      navigate("/");
    }
   }

  return (
    <AuthWrapper>
      <h6 className="text text-text-preset-5 text-center text-neutral-300 ">
        Please log in to continue
      </h6>
      <form onSubmit={submitHandler}  className="flex flex-col items-center self-stretch gap-4">
        <AppInput
          id="email"
          type="email"
          label="Email Address"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AppInput
          id="password"
          type={showPassword ? "text" : "password"}
          label="Password"
          placeholder="Enter your password"
          hasRightIcon={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        >
          <button
            type="button"
            className="relative text-white !right-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "hide" : "show"}
          </button>
        </AppInput>
        <AppButton type="submit" value="" >
          {loading ? "Loading..." : "Login"}
        </AppButton>
      </form>
      {error && (
        <p className="text text-text-preset-5 text-center text-red-500 ">
          {error}
        </p>
      )}
      <p className="text text-text-preset-5 text-center text-neutral-300 ">
        No account yet?{" "}
        <Link to="/signup" className="text-white">
          Signup
        </Link>
      </p>
    </AuthWrapper>
  );
};
