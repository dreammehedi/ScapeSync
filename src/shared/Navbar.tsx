import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { storeLogout } from "../redux/feature/authStoreSlice";
import {
  useGetUserQuery,
  useLogoutMutation,
} from "../redux/pages/auth/authSlice";
import { getUserToken, removeUserToken } from "../utils/handleUserToken";

export const Navbar = () => {
  const token = getUserToken();
  const dispatch = useDispatch();
  const [userLogout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      const res = await userLogout().unwrap();
      if (res.status) {
        removeUserToken();
        dispatch(storeLogout());
        toast.success(res.message || "Logout successful!");
      } else {
        toast.error(res.message || "Something went wrong!");
      }
    } catch (error: any) {
      toast.error(error?.message || error?.data?.message || "Logout failed!");
    }
  };

  const { data, isLoading: isUserLoading } = useGetUserQuery(undefined, {
    skip: !token,
  });

  const [showUserInfo, setShowUserInfo] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-2 sticky top-0 bg-white/90 z-[999] w-full !overflow-visible backdrop-blur-md ">
      <div className="flex flex-wrap gap-3 justify-between items-center relative">
        <Link data-aos="slide-right" to={"/"}>
          <img
            className="max-w-[135px] max-h-[56px] mx-auto md:mx-0 cursor-pointer"
            src="/logo.png"
            alt="ScapeSync"
          />
        </Link>

        {token ? (
          <div
            data-aos="slide-left"
            className="relative"
            onMouseEnter={() => setShowUserInfo(true)}
            onMouseLeave={() => setShowUserInfo(false)}
          >
            <button
              onClick={handleLogout}
              disabled={isLoading}
              type="submit"
              className="w-[150px] text-white bg-red-500 rounded-md py-2 cursor-pointer hover:bg-red-800 transition-all font-medium"
            >
              {isLoading ? "Processing..." : "Logout"}
            </button>

            {/* Hover Dropdown */}
            {showUserInfo && data && !isUserLoading && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-4 text-sm text-gray-700 z-50">
                {/* <p>
                  <span className="font-semibold">Name:</span> {data.first_name}{" "}
                  {data.last_name}
                </p> */}
                <p>
                  <span className="font-semibold">Email:</span> {data.email}
                </p>
                <p>
                  <span className="font-semibold">Role:</span> {data.role}
                </p>
              </div>
            )}
          </div>
        ) : (
          <Link data-aos="slide-left" to={"/login"}>
            <button
              type="submit"
              className="w-[150px] text-white bg-[#398b36] rounded-md py-2 cursor-pointer hover:bg-[#2c6b29] transition-all font-medium"
            >
              Get Started
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};
