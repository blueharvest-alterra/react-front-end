import React, { useState } from "react";
import axios from "axios";
import Logo from "../../../assets/blueharvest-logo.png";
import Dotted from "../../../assets/dotted.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

export default function FormSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.post(import.meta.env.VITE_SIGNIN_ADMIN_URL, {
        email,
        password,
      });

      if (response.status === 200) {
        const token = response.data.data.user_token;
        const name = response.data.data.full_name;
        localStorage.setItem ("fullname",name);
        document.cookie = `token=${token}; path=/; secure; SameSite=Strict`;
        setMessage("Berhasil login!");
        navigate('/dashboard')
      } else {
        setMessage(response.data.message || "Invalid email or password");
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setMessage("Input cannot be empty");
        } else if (error.response.status === 401) {
          setMessage("Invalid email or password");
        } else {
          setMessage(
            error.response.data.message || "Terjadi kesalahan, coba lagi."
          );
        }
      } else {
        setMessage("Terjadi kesalahan, coba lagi.");
      }
    }
  };

  return (
    <div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-b from-[#59A3DC] to-[#163B83]"></div>
      <section
        className="absolute"
        style={{
          left: "925px",
          right: "0",
          width: "450px",
          height: "582px",
        }}
      >
        <div
          className="relative flex flex-col items-center justify-center px-2 mb-8 mx-auto h-screen"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 sm:p-8">
              <div className="flex items-center justify-center mt-12 mb-8 text-2xl">
                <img
                  className="relative"
                  style={{ width: "128px", height: "117px" }}
                  src={Logo}
                  alt="logo"
                />
                <p
                  className="text-primary-90 text-[26px] font-bold"
                  style={{ marginLeft: "-15px" }}
                >
                  BlueHarvest
                </p>
              </div>
              <form className="px-4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4 relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Kata Sandi"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className="absolute right-2 top-2 text-gray-600 dark:text-gray-400"
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-90 hover:bg-primary-90 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  style={{ marginBottom: "2rem" }}
                >
                  Masuk
                </button>
                {message && (
                  <p className="text-center text-red-500">{message}</p>
                )}
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="text-[14px] text-center font-[400px] hover:underline dark:text-primary-500"
                    style={{ margin: 0, marginBottom: "5rem" }}
                  >
                    Lupa Kata Sandi?
                  </a>
                </div>
              </form>
            </div>
          </div>
          <img
            src={Dotted}
            alt="Dotted Shape"
            className="absolute"
            style={{
              width: "52px",
              height: "52px",
              top: "95px",
              right: "10px",
            }}
          />
          <img
            src={Dotted}
            alt="Dotted Shape"
            className="absolute"
            style={{
              width: "52px",
              height: "52px",
              bottom: "100px",
              left: "15px",
            }}
          />
        </div>
      </section>
    </div>
  );
}
