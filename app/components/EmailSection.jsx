"use client";
import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

export default function EmailSection() {
    const handleSubmit = async (e) => {
  e.preventDefault();
  const data = {
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };
  const JSONdata = JSON.stringify(data);
  const endpoint = "/api/send";
  // // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: "POST",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  };
  // const response = await fetch(endpoint, options);
  // const resData = await response.json();
  // if (response.status === 200) {
  //   console.log("Message sent.");
  //   setEmailSubmitted(true);
  // }
    };
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quo
          tempora natus quae labore tenetur neque in omnis doloribus nam.
          Quisquam quaerat, excepturi qui doloremque autem sunt vel repellat
          deserunt.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="github" />
          </Link>
          <Link href="linkdin.com">
            <Image src={LinkedinIcon} alt="linkdin" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
