import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.png";
import mailIcon from "../assets/icons/mail.png";

export default function Contact() {
    return (
        <div className="pt-24 px-8 min-h-screen max-w-5xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-burgundy text-center mb-8 mt-8 underline">
                Contact Me
            </h2>
            <p className= "text-lg font-serif text-burgundy-light text-center mb-28">
                Whether you have a project idea in mind or just want to connect, I'm always open to new opportunities!
            </p>

            <div className="flex-col gap-4 flex items-center">
                <div className="flex items-center gap-4 mb-4">
                    <a href="https://github.com/emmatemiha" className="flex items-center gap-4">
                        <img src={githubIcon} alt="Github" className="w-12 h-12"/>
                        <span className= "text-lg">emmatemiha</span>
                    </a>
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <a href="mailto:emmatemiha@gmail.com" className="flex items-center gap-4">
                        <img src={mailIcon} alt="Mail" className="w-12 h-9"/>
                        <span className= "text-lg">emmatemiha@gmail.com</span>
                    </a>
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <a href="https://linkedin.com/in/emmatemiha" className="flex items-center gap-4">
                        <img src={linkedinIcon} alt="Linkedin" className="w-12 h-12"/>
                        <span className= "text-lg">emmatemiha</span>
                    </a>
                </div>
            </div>
        </div>
    )
}