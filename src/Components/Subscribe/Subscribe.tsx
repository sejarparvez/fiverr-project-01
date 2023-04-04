import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { toast, Toaster } from "react-hot-toast";

export const Subscribe: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get the email input field
    const emailInput = form.current?.querySelector(
      'input[type="email"]'
    ) as HTMLInputElement;

    // Check if the email is valid
    if (emailInput && !emailInput.checkValidity()) {
      toast.error("Please enter a valid email address");
      return;
    }

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current!,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Thank You For Subscribing");
        },
        (error) => {
          console.log(error.text);
          toast.error("Error! Please try again.");
        }
      );
  };

  return (
    <div className="bg-cyan-200 flex px-10 p-12 lg:m-44 mx-2 md:my-20 my-6 flex-col md:flex-row gap-10 md:gap-0 rounded-2xl">
      <div className="md:flex-1 text-4xl md:text-5xl text-white flex items-center justify-center font-bold">
        Subscribe To Our Weekly Newsletter
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex-1 flex items-center justify-center"
      >
        <input
          type="email"
          name=""
          id=""
          placeholder="abc@example.com"
          required
          className="bg-black text-white placeholder:text-white h-12 w-40 md:w-60 pl-4 rounded-l-xl outline-none"
        />
        <button className="bg-white h-12 px-4 rounded-r-xl font-bold">
          Subscribe
        </button>
      </form>
      <Toaster />
    </div>
  );
};
