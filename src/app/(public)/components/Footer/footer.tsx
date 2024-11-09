import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <div className="flex bg-[#1A1A1A] justify-center items-center gap-10 px-10 py-7">
            <a href="https://github.com/zainshah0347?tab=repositories" target='_blank'><GitHubIcon className="text-4xl text-white cursor-pointer" /></a>
            <LinkedInIcon className="text-4xl text-white cursor-pointer" />
            <WhatsAppIcon className="text-4xl text-white cursor-pointer"/>
            <FacebookIcon className="text-4xl text-white cursor-pointer"/>
        </div>
    )
}