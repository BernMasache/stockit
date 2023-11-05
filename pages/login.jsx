import { useState } from "react";
import UseUserStore from "../services/store/user.store";
import Cookies from "js-cookie";
import Router from "next/router";

const useUser = new UseUserStore();
export default function LoginPage() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const loginDetails = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const checkValidUser = (user, formData) => {
    if (user?.data?.length > 0) {
      let res = user?.data?.filter(
        (us) =>
          us?.username === formData?.username &&
          us?.password === formData?.password
      );
      if (res?.length == 1) {
        Cookies.set("STUD", JSON.stringify({ user: res[0] }));
        return Router.push(`/${res[0]?.role}`);
      } else {
      }
    }
  };

  const loginUser = (e) => {
    e.preventDefault();
    if (
      userData.username == undefined ||
      userData.username == "" ||
      userData.password == undefined ||
      userData.password == ""
    ) {
    } else {
      useUser.login(userData).then((response) => {
        if (response.status === 200) {
          checkValidUser(response, userData);
        }
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8 bg-gray-50 h-[100vh]">
        <div className="w-full max-w-sm space-y-10">
          <div>
            {/* <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            /> */}
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to Stockit
            </h2>
          </div>
          <form className="space-y-6" onSubmit={loginUser}>
            <div className="relative -space-y-px rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
              <div>
                <label htmlFor="username" className="sr-only">
                  Unername
                </label>
                <input
                  onChange={loginDetails}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="relative p-2 block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  onChange={loginDetails}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative p-2 block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-100 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
