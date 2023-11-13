const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e] dark:text-white">
        Contact
      </h1>
      <form
        action="https://getform.io/f/f19bc68b-3097-4272-8d89-2a2080d9fea4"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className=" flex flex-col">
            <label className="uppercase text-sm py-2 dark:text-white">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 dark:text-white">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            ></input>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 dark:text-white">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          ></input>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 dark:text-white">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          ></input>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 dark:text-white">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300"
            rows={10}
            name="message"
          ></textarea>
        </div>
        <button className="bg-[#001b5e] dark:bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
