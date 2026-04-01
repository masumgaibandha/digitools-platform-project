import React from "react";
import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const Pricing = () => {
  return (
    <div className="py-5 md:w-7xl md:mx-auto px-6">
      <div className="text-center space-y-3">
        <h2 className="text-2xl md:text-5xl font-bold md:font-extrabold">Get Started in 3 Steps</h2>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>
      <div className="
      
      grid md:grid-cols-3 justify-between items-center gap-5 py-10
      
      
      ">
        <div className="card bg-base-100 shadow-md border border-gray-200 pb-10">
          <div className=" flex justify-end pr-5 pt-5">
            <span className="w-10 h-10 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full text-2xl flex justify-center items-center p-6">
              01
            </span>
          </div>
          <div className="card-body h-[250px] ">
            <div className="flex justify-center">
              <div className="bg-[#F2E8FE] rounded-full w-29 h-29 p-6 ">
                <img src={userImg} alt="" className="w-16 h-16 mx-auto " />
              </div>
            </div>

            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold">Create Account</h2>
              <p className="text-[#627382]">
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md border border-gray-200 pb-10">
          <div className=" flex justify-end pr-5 pt-5">
            <span className="w-10 h-10 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full text-2xl flex justify-center items-center p-6">
              02
            </span>
          </div>
          <div className="card-body h-[250px] ">
            <div className="flex justify-center">
              <div className="bg-[#F2E8FE] rounded-full w-29 h-29 p-6 ">
                <img src={packageImg} alt="" className="w-16 h-16 mx-auto " />
              </div>
            </div>

            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold">Choose Products</h2>
              <p className="text-[#627382]">
                Browse our catalog and select the toolsthat fit your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-md border border-gray-200 pb-10">
          <div className=" flex justify-end pr-5 pt-5">
            <span className="w-10 h-10 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full text-2xl flex justify-center items-center p-6">
              03
            </span>
          </div>
          <div className="card-body h-[250px] ">
            <div className="flex justify-center">
              <div className="bg-[#F2E8FE] rounded-full w-29 h-29 p-6 ">
                <img src={rocketImg} alt="" className="w-16 h-16 mx-auto " />
              </div>
            </div>

            <div className="text-center space-y-3">
              <h2 className="text-2xl font-bold">Start Creating</h2>
              <p className="text-[#627382]">
                Download and start using your premium tools immediately.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-3 my-10">
        <h2 className="text-2xl md:text-5xl font-extrabold">Simple, Transparent Pricing</h2>
        <p className="text-[#627382]">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="card bg-base-100 shadow-sm border-2 border-gray-200">
          <div className="card-body ">

            <div className="space-y-3">
                <h2 className="text-3xl font-bold">Starter</h2>
                <p>Perfect for getting started</p>
            </div>

            <div className="">
              
              <span className="text-xl">$0/mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>High-resolution image generation</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Customizable style templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Batch processing capabilities</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>AI-driven image enhancements</span>
              </li>
              <li className="opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-base-content/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="line-through">Seamless cloud integration</span>
              </li>
              <li className="opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-base-content/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="line-through">
                  Real-time collaboration tools
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-full">Get Started Free</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm border-2 border-gray-200 bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white">
          <div className="card-body relative">
            <div className="flex justify-center absolute right-[100px] top-[-10px]">
                <span className="badge badge-xs badge-warning py-3 px-10">Most Popular</span>
            </div>

            <div className="space-y-3">
                <h2 className="text-3xl font-bold">Pro</h2>
                <p>Best for professionals</p>
            </div>

            <div className="">
              
              <span className="text-xl">$29/mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>High-resolution image generation</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Customizable style templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Batch processing capabilities</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>AI-driven image enhancements</span>
              </li>
              <li className="opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-base-content/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="line-through">Seamless cloud integration</span>
              </li>
              <li className="opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-base-content/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="line-through">
                  Real-time collaboration tools
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn bg-white w-full">Get Started Free</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm border-2 border-gray-200">
          <div className="card-body ">

            <div className="space-y-3">
                <h2 className="text-3xl font-bold">Enterprise</h2>
                <p>For teams and businesses</p>
            </div>

            <div className="">
              
              <span className="text-xl">$99/mo</span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-xs">
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>High-resolution image generation</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Customizable style templates</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Batch processing capabilities</span>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-success"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>AI-driven image enhancements</span>
              </li>
              <li className="opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-base-content/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="line-through">Seamless cloud integration</span>
              </li>
              <li className="opacity-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 me-2 inline-block text-base-content/50"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="line-through">
                  Real-time collaboration tools
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white w-full">Get Started Free</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
