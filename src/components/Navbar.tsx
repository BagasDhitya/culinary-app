import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserCircleIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-screen h-38 z-10 bg-white fixed shadow-sm sticky top-0 flex justify-between items-center px-4">
      <Image
        alt="landing"
        src={require("../../public/logo.png")}
        className="h-38 w-32 cursor-pointer"
        onClick={() => router.push("/culinary/home")}
      />
      <div className="flex gap-x-4 text-culinary-amber-600">
        <button className="hover:bg-culinary-amber-500 hover:text-white rounded-md px-3 py-3">
          Contact Us
        </button>
        <button className="hover:bg-culinary-amber-500 hover:text-white rounded-md px-3 py-3 mr-10">
          <UserCircleIcon className="w-5 h-5 inline-block" /> Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
