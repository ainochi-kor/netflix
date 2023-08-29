import Input from "@/components/input";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface AuthorizationParam {
  email: string;
  name: string;
  password: string;
}

const Authorization = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AuthorizationParam>();

  const [variant, setVariant] = useState("login");
  const isLogin = variant === "login";

  const toggleVariant = () => {
    setVariant((currentVariant) =>
      currentVariant === "login" ? "register" : "login"
    );
  };

  const onSubmit: SubmitHandler<AuthorizationParam> = (data) =>
    console.log(data);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <Image
            src="/images/logo.png"
            alt="Netflex Logo"
            width={177}
            height={48}
          />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 p-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {isLogin ? "Sign in" : "Register"}
            </h2>
            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              {!isLogin && (
                <Input
                  label="Username"
                  onChange={() => {}}
                  id="name"
                  register={register("name", { required: true })}
                />
              )}
              <Input
                label="Email"
                onChange={() => {}}
                id="email"
                type="email"
                register={register("email", { required: true })}
              />
              <Input
                label="Password"
                onChange={() => {}}
                id="password"
                type="password"
                register={register("password", { required: true })}
              />
              <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                {isLogin ? "Login" : "Sign up"}
              </button>
            </form>
            <p className="text-neutral-500 mt-12">
              {isLogin
                ? "First time using Netflix?"
                : "Already have an account?"}
              <button onChange={toggleVariant} type="button">
                <span className="text-white ml-1 hover:underline">
                  {isLogin ? "Create an account" : "Login"}
                </span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
