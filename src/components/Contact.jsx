import '../App.css'
import logo from "../assets/logo.png"

const Contact = () => {
  return (
    <div id="contact" className="max-w-5xl mx-auto py-22 px-4">
      <h1 className="text-3xl font-bold mb-6 text-white ">Contact Us</h1>

      <form className="space-y-4 text-gray-800">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border-blue-600 rounded-md bg-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-md  bg-white"
        />
        <textarea
          placeholder="Message"
          className="w-full p-3 border rounded-md h-32 bg-white"
        ></textarea>
        <button className="px-6 py-3 bg-blue-600 text-white rounded">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
