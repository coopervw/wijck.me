import React from 'react';
import { IoIosMailOpen } from "react-icons/io";
import {SiGithub, SiLinkedin} from "@icons-pack/react-simple-icons"

export default function Footer() {
  return (
      <footer className="text-gray-400 py-4 bg-white dark:bg-black mt-auto">
        <div className="container mx-auto flex justify-center">
          <div className="flex items-center px-5 py-2 bg-gray-100 dark:bg-gray-800 rounded-full">
            <a
                href="https://www.linkedin.com/in/cooper-van-wijck-6a0a08257/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors px-2 py-0 rounded-full flex items-center"
            >
              <SiLinkedin size={24} />
            </a>
            <a
                href="https://github.com/coopervw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-300 transition-colors px-2 py-0 rounded-full flex items-center"
            >
              <SiGithub size={24} />
            </a>
            <a
                href="mailto:cooper@vanwijck.me"
                className="hover:text-red-400 transition-colors px-2 py-0 rounded-full flex items-center"
            >
              <IoIosMailOpen size={24} />
            </a>
          </div>
        </div>
      </footer>
  );
}