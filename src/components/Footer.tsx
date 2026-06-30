import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.png";
import mailIcon from "../assets/icons/mail.svg";

export default function Footer() {
  return (
    <footer className="bg-lastname px-8 py-8 mt-16">
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://github.com/emmatemiha" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:scale-110  transition-all duration-300 transform-gpu">
          <img src={githubIcon} alt="Github" className="w-5 h-5 object-contain" />
        </a>
        <a href="mailto:emmatemiha@gmail.com"
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:scale-110 transition-all duration-300 transform-gpu">
          <img src={mailIcon} alt="Mail" className="w-5 h-5 object-contain" />
        </a>
        <a href="https://linkedin.com/in/emmatemiha" target="_blank" rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 bg-white rounded-full hover:scale-110 transition-all duration-300 transform-gpu">
          <img src={linkedinIcon} alt="Linkedin" className="w-5 h-5 object-contain" />
        </a>
      </div>
      <p className="text-center text-xs text-white">
        © {new Date().getFullYear()} Emma Te Miha
      </p>
    </footer>
  )
}