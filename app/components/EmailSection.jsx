"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function EmailSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setloading] = useState(false);
  // console.log(errors);
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      sendmail();

      setFormData({
        name: "",
        email: "",
        message: "",
      });
      console.log("Form submitted:", formData);
    }
  };

  // console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendmail = async () => {
    setloading(true);

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    setloading(false);
    toast.success("Message sent successfully");

    console.log(await response.json());
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Feel free to reach out to me for any inquiries, collaborations, or
          project discussions. I am always open to exploring new opportunities
          and connecting with like-minded professionals. Whether you have a
          question or just want to say hello, I'd love to hear from you. Let's
          work together to create something amazing!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="mailto:akashpraveen576@gmail.com" target="_blank">
            <Image src="/images/mail.png" width={50} height={50} alt="gmail" />
          </Link>
          <Link
            href="https://in.linkedin.com/in/akash-praveen"
            className="ml-2"
            target="_blank"
          >
            <Image
              src="/images/linkedin (2).png"
              width={50}
              height={50}
              alt="linkdin"
            />
          </Link>
          <Link
            href="https://github.com/Akashakke"
            className="ml-2"
            target="_blank"
          >
            <Image
              src="/images/skills/github.png"
              width={50}
              height={50}
              alt="github"
              className="p-1"
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="text-white block text-sm mb-2 font-medium"
            >
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"
              onChange={handleChange}
              value={formData.name}
              style={errors.name && { border: "1px solid red" }}
              // required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Name"
            />
            <span
              style={
                errors.name
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              className="text-red-600 text-sm"
            >
              {errors.name || "sample"}
            </span>
          </div>
          <div>
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
              onChange={handleChange}
              value={formData.email}
              style={errors.email && { border: "1px solid red" }}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
            <span
              style={
                errors.email
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              className="text-red-600 text-sm"
            >
              {errors.email || "test"}
            </span>
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              onChange={handleChange}
              value={formData.message}
              style={errors.message && { border: "1px solid red" }}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
            <span
              style={
                errors.message
                  ? { visibility: "visible" }
                  : { visibility: "hidden" }
              }
              className="text-red-600 text-sm"
            >
              {errors.message || "test"}
            </span>
          </div>
          <button
            type="submit"
            style={loading ? { backgroundColor: "black" } : {}}
            // style={{ backgroundColor: "black" }}
            disabled={loading}
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
