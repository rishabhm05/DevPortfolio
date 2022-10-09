import React from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zdfdc5r",
        "template_r6grk7a",
        e.target,
        "TngweLCvQPZFdr5tQ"
      )
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <div
      id="contacts"
      className="w-full bg-[#14182c] mx-auto flex justify-start items-center py-10 "
    >
      <div className="max-w-[1000px] w-[70%] mx-auto ">
        <p className="text-white font-bold text-3xl underline">Contact</p>
        <p className="text-gray-300 py-4 text-xl">
          Connect with me by filling this form or contact me on email
          mehtarishabh60@gmail.com.
        </p>

        <form className="flex flex-col max-w-[600px]" onSubmit={handlesubmit}>
          <input
            className="my-2 px-2 py-4 bg-[transparent] border-white rounded border-2"
            type="text"
            placeholder="Name"
            name="name"
          ></input>
          <input
            className="my-2 px-2 py-4 bg-[transparent] border-white rounded border-2"
            type="email"
            placeholder="Email"
            name="user_email"
          ></input>
          <textarea
            type="text"
            className="my-2 py-12 border-white rounded border-2 bg-[transparent] px-2"
            placeholder="Message"
            row="10"
            name="message"
          ></textarea>
          <button className=" mr-auto bg-[transparent] group flex items-center border-white border-2 px-6 py-4 rounded text-white my-6 hover:bg-pink-500 hover:border-pink-500">
            Let's Connect
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
