import React, { FC, useContext } from "react";
import HeadingInView from "@/components/sections/content/HeadingInView";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// components
import Header from "../components/header/Header";

// schema
const schema = z.object({
  username: z.string().nonempty({ message: 'Username cannot be empty' }).trim(),
  password: z.string().nonempty({ message: 'Password cannot be empty' }).min(8, { message: 'Minimum 8 Characters'}).trim(),
}).required();

export type FormData = z.infer<typeof schema>;

// Login:
// login page
const Login: FC = () => {
  // auth context
  const { isAuth, setIsAuth } = useContext(AuthContext);

  // router
  const router = useRouter();

  // form
  const { register, handleSubmit, formState: {errors} } = useForm<FormData>({ resolver: zodResolver(schema) });

  // submit form data
  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    const token = json.token;

    if (token) {
      // save token to local storage
      localStorage.setItem("token", token);

      // set auth state
      setIsAuth(true);

      toast.success('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      // redirect to blog page
      setTimeout(() => {
        router.push("/blog");
      }, 2000);
    } else {
      toast.error('🦄 Denied.', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };

  return (
    <>
      <Header page="login" />
      <main>
        <section className="text-white section-container !pt-[88px] h-screen overflow-scroll flex flex-col">
          <HeadingInView>Login</HeadingInView>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {isAuth === false ? (
              <form className="flex flex-col items-center mx-auto mt-16 w-60" onSubmit={handleSubmit(onSubmit)}>
                <label className="">
                  <span className="text-xl">Username:</span>
                  <input className="w-full px-2 py-1 text-black rounded-sm" type="text" {...register("username", { required: true }) } />
                </label>
                <label className="mt-4">
                  <span className="text-xl">Password:</span>
                  <input className="w-full px-2 py-1 text-black rounded-sm" type="password" {...register("password", { required: true })} />
                </label>
                <button className="mt-8 text-3xl font-bold gradient">Login</button>
                {errors && (
                  <ul className="mt-4 text-red-600">
                    <li>{errors.username?.message}</li>
                    <li>{errors.password?.message}</li>
                  </ul>
                )}
              </form>
            ) : (
              <p className="mt-16 text-3xl font-bold text-center">Logged in!</p>
            )}
          </motion.div>
        </section>
      </main>
    </>
  );
};

export default Login;
