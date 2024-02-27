import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-black py-10 border-t border-gray-300">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    {/* Basic Footer */}
    <div className="mb-6 md:mb-0">
      <div className="text-3xl font-bold py-10">KrishiLantix</div>
      <div className="text-sm">© {new Date().getFullYear()} All rights reserved</div>
    </div>
    
    {/* Contact Us Section */}
    <div className="flex flex-col items-center mb-4 md:mb-0">
      <div className="text-lg font-semibold mb-2">Contact Us</div>
      <p className="text-gray-600 mb-2">Have questions? Feel free to reach out to us via email:</p>
      <div className="flex items-center border border-gray-300 rounded-md px-4 py-2">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 bg-transparent outline-none placeholder-gray-400"
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
          Send
        </button>
      </div>
    </div>
    
    {/* Follow Us Section */}
    <div className="text-lg font-semibold mb-2">Follow Us</div>
    <div className="flex space-x-4">
      <a href="#" className="text-black hover:underline">Facebook</a>
      <a href="#" className="text-black hover:underline">Twitter</a>
      <a href="#" className="text-black hover:underline">Instagram</a>
      <a href="#" className="text-black hover:underline">LinkedIn</a>
    </div>
  </div>
</footer>
  );
}

export default Footer;
