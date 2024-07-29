import {Mail} from "lucide-react";
import {SiGithub, SiLinkedin} from "@icons-pack/react-simple-icons"

export default function Footer() {
  return (
      <footer className="text-gray-400 py-4 fixed bottom-0 left-0 right-0 bg-white">
        <div className="container mx-auto flex justify-center items-center space-x-6">
          <a href="https://www.linkedin.com/in/cooper-van-wijck-6a0a08257/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <SiLinkedin size={24} />
          </a>
          <a href="https://github.com/coopervw" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
            <SiGithub size={24} />
          </a>
          <a href="mailto:cooper@vanwijck.me" className="hover:text-red-400 transition-colors">
            <Mail size={26} />
          </a>
        </div>
      </footer>
  );
}
