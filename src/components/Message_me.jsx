import React from "react";

function MessageMe() {
  return (
    <div className="min-h-screen mt-24 flex flex-col justify-center items-center px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Have a Question?</h1>
      </div>
      <form
        action="https://formspree.io/f/xgvebnoq"
        method="POST"
        className="w-full max-w-lg"
      >
        {/* Full Name */}
        <div className="mb-6">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Enter your name"
            required
            autoComplete="off"
            className="mt-1 block w-full h-12 rounded-md border border-gray-300 bg-white px-4 text-sm placeholder-gray-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
          />
        </div>

        {/* Email and Contact Number */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
              className="mt-1 block w-full h-12 rounded-md border border-gray-300 bg-white px-4 text-sm placeholder-gray-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              placeholder="Enter your number"
              required
              autoComplete="off"
              className="mt-1 block w-full h-12 rounded-md border border-gray-300 bg-white px-4 text-sm placeholder-gray-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Enter subject"
            required
            autoComplete="off"
            className="mt-1 block w-full h-12 rounded-md border border-gray-300 bg-white px-4 text-sm placeholder-gray-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="4"
            required
            autoComplete="off"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm placeholder-gray-400 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <input
            type="submit"
            value="Send"
            className="h-12 w-full md:w-auto px-6 rounded-md bg-yellow-400 text-white font-medium hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
          />
        </div>
      </form>
    </div>
  );
}

export default MessageMe;
