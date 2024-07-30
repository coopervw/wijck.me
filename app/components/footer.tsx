import {Mail} from "lucide-react";
import {SiGithub, SiLinkedin} from "@icons-pack/react-simple-icons"

export default function Footer() {
  return (
      <footer className="text-gray-400 py-4 fixed bottom-0 left-0 right-0 bg-white dark:bg-black">
        <div className="relative flex justify-center">
          <div className="relative flex items-center px-5 py-2 bg-gray-100 dark:bg-gray-100 rounded-full">
            <div
                className="absolute top-0 left-0 h-full bg-black rounded-full transition-transform duration-300 ease-in-out"
                style={{
                  width: 'auto', // Bubble width is automatically adjusted
                }}
            />
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
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
  );
}

