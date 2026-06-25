import githubIcon from "../assets/icons/github.svg";
import linkedinIcon from "../assets/icons/linkedin.png";
import mailIcon from "../assets/icons/mail.svg";

export default function Contact() {
    return (
        <div className="pt-10 px-8 max-w-8xl mx-auto">
            <div className="flex items-center gap-4 mb-10 px-8 mt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent-border" />
                <span className="text-diamonds">✦</span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent via-accent-border" />
            </div>
            <h2 className="text-4xl font-script font-bold text-lastname text-center mb-8">
                Say Hello
            </h2>
            <p className="text-md font-sans text-lastname text-center mb-16">
                Whether you have a project idea in mind or just want to connect, I'm always open to new opportunities!
            </p>

            <div className="gap-6 flex justify-center items-center mb-16">
                <div className="flex items-center gap-4 mb-4">
                    <a href="https://github.com/emmatemiha" className="flex items-center gap-2 bg-white border border-accent-border rounded-full px-4 py-2 hover:scale-110 hover:bg-accent/40 transition-all ease-in-out duration-300 transform-gpu">
                        <img src={githubIcon} alt="Github" className="w-9 h-9 object-contain"/>
                        <span className= "text-md text-lastname">emmatemiha</span>
                    </a>
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <a href="mailto:emmatemiha@gmail.com" className="flex items-center gap-2 bg-white border border-accent-border rounded-full px-4 py-2 hover:scale-110 hover:bg-accent/40 transition-all ease-in-out duration-300 transform-gpu">
                        <img src={mailIcon} alt="Mail" className="w-9 h-9 object-contain"/>
                        <span className= "text-md text-lastname">emmatemiha@gmail.com</span>
                    </a>
                </div>
                <div className="flex items-center gap-4 mb-4">
                    <a href="https://linkedin.com/in/emmatemiha" className="flex items-center gap-2 bg-white border border-accent-border rounded-full px-4 py-2 hover:scale-110 hover:bg-accent/40 transition-all ease-in-out duration-300 transform-gpu">
                        <img src={linkedinIcon} alt="Linkedin" className="w-9 h-9 object-contain"/>
                        <span className= "text-md text-lastname">emmatemiha</span>
                    </a>
                </div>
            </div>
        </div>
    )
}