import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserCircleIcon, SearchIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="w-screen h-16 z-10 fixed shadow-sm sticky top-0 flex justify-between items-center px-4">
      <Image
        alt="landing"
        src={require("../../public/logo.png")}
        className="h-16 w-32 cursor-pointer"
        onClick={() => router.push("/culinary/home")}
      />
      <div className="flex items-center justify-center flex-grow">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md w-96 px-3 py-2 pl-10 border border-gray-300 focus:outline-none focus:border-culinary-amber-600"
          />
          <div className="absolute inset-y-0 left-3 flex items-center">
            <SearchIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>
      <div className="flex gap-x-4 text-culinary-amber-600">
        <button className="hover:bg-culinary-amber-500 hover:text-white rounded-md px-3 py-3">
          Contact Us
        </button>
        <button className="hover:bg-culinary-amber-500 hover:text-white rounded-md px-3 py-3">
          <UserCircleIcon className="w-5 h-5 inline-block" /> Profile
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
