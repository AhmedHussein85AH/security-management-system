import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-4 mt-auto">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600">
        <p>© 2025 Marassi Security Department. Developed by Ahmed Hussein, Administrative Security Coordinator.</p>
        <p className="flex items-center justify-center mt-1">
          Made with <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;