import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <div className="relative self-center flex w-full md:w-2/5 justify-center md:justify-end">
      <div className="flex space-x-2 md:space-x-3">
        <a
          aria-label="facebook"
          href="https://www.facebook.com/"
          className="text-white bg-indigo-800 inline-flex justify-center items-center w-[34px] h-[34px] p-2 rounded-full"
        >
          <FaFacebookF size={16} />
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/"
          className="text-white bg-sky-600 inline-flex justify-center items-center w-[34px] h-[34px] p-2 rounded-full"
        >
          <FaLinkedinIn size={16} />
        </a>
        <a
          aria-label="twitter"
          href="https://twitter.com/"
          className="text-white bg-blue-400 inline-flex justify-center items-center w-[34px] h-[34px] p-2 rounded-full"
        >
          <FaTwitter size={16} />
        </a>
        <a
          aria-label="instagram"
          href="https://www.instagram.com/"
          className="text-white bg-slate-500 inline-flex justify-center items-center w-[34px] h-[34px] p-2 rounded-full"
        >
          <FaInstagram size={16} />
        </a>
      </div>
    </div>
  );
};
