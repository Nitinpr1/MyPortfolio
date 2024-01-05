import { useRef } from "react";
import emailjs from "@emailjs/browser";

import toast, { Toaster } from "react-hot-toast";

const ContactMe = ({ onClose }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_t58tocg",
        "template_aqylm6a",
        form.current,
        "CjipO77BC-NtkrB9Z"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully !!");
          setTimeout(() => {
            onClose();
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="fixed inset-0 top-0 left-0 w-full h-full flex justify-center items-center bg-black dark:bg-white dark:bg-opacity-5 bg-opacity-50 z-10">
      <Toaster />
      <div className="bg-red-50 p-6 rounded shadow-md   font-montserrat dark:bg-slate-900 dark:text-coral-red">
        <h2 className="text-2xl text-coral-red text-center font-montserrat font-semibold mb-4">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col gap-4">
            <div className="m-1 flex flex-col">
              <label
                htmlFor="inputname"
                className="text-gray-700 dark:text-white mb-2 ml-2"
              >
                Name :
              </label>
              <input
                type="text"
                className="outline-none bg-slate-200 h-10 p-2 rounded-lg"
                id="inputname"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="m-1 flex flex-col">
              <label
                htmlFor="inputemail"
                className="text-gray-700 dark:text-white mb-2 ml-2"
              >
                Email :
              </label>

              <input
                type="email"
                id="inputemail"
                name="email"
                className="outline-none bg-slate-200 h-10 p-2 rounded-lg"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="m-1 flex flex-col">
              <label
                htmlFor="inputmsg"
                className="text-gray-700  dark:text-white mb-2 ml-2"
              >
                Message :
              </label>
              <textarea
                type="text"
                name="message"
                rows={4}
                id="inputmsg"
                className="outline-none bg-slate-200 p-2 rounded-lg"
                placeholder="Enter your message"
                required
              />
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center mt-3">
            <button
              type="submit"
              className="bg-coral-red text-gray-200 px-4 py-2 rounded-full w-40 shadow-lg"
            >
              Send
            </button>

            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-full w-40 shadow-lg"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
