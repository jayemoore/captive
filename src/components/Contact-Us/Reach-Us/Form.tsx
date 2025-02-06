"use client";

import React, { useState } from "react";

import Button from "@/components/ui/Button";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setphone] = useState("");
  const [loading, setLoading] = useState(false);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contactFrom", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email, firstName, lastName, phone, message }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Email sent successfully!");
        // console.log(data);
        // setFirstName("");
        // setLastName("");
        // setphone("");
        // setEmail("");
        // setMessage("");
      } else {
        throw new Error(data.message || "Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <form action="" className="" onSubmit={submitForm}>
      <input
        type="text"
        className="w-full max-w-[465px] px-[22px] py-3 form-input-shadow rounded-[4px] focus:outline-none"
        placeholder="First Name"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        className="w-full max-w-[465px] px-[22px] py-3 mt-[17px] form-input-shadow rounded-[4px] focus:outline-none"
        placeholder="Last Name"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        className="w-full max-w-[465px] px-[22px] py-3 mt-[17px] form-input-shadow rounded-[4px] focus:outline-none"
        placeholder="Email Address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="w-full max-w-[465px] px-[22px] py-3 mt-[17px] form-input-shadow rounded-[4px] focus:outline-none"
        placeholder="Phone Number"
        required
        value={phone}
        onChange={(e) => setphone(e.target.value)}
      />
      <textarea
        className="w-full max-w-[465px] px-[22px] h-[106px] py-3 mt-[17px] form-input-shadow rounded-[4px] focus:outline-none"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        className="w-full max-w-[465px] rounded-[44px] text-white mt-[18px]"
        type="submit"
      >
        {loading ? "Loading..." : "SUBMIT"}
      </Button>
    </form>
  );
};

export default ContactForm;
