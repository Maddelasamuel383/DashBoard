import { FaRegCircle } from "react-icons/fa6";
import { MdKeyboardDoubleArrowLeft,MdOutlineDateRange, MdOutlinePersonOutline, MdLink } from "react-icons/md";
import { IoSearchOutline, IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { BiMessageDots } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { LuMessageSquareMore } from "react-icons/lu";
import { GoTasklist } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { BsFillLightbulbFill } from "react-icons/bs";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { TbUserShare } from "react-icons/tb";

const Navbar = () => (
    <div className="flex flex-col p-2">
        <div className="p-4 flex flex-row justify-between items-center space-x-2">
            <div className="flex flex-row items-center justify-between space-x-2">
                <FaRegCircle  className="bg-violet-400 rounded-full"/>
                <p>Project M.</p>
                <MdKeyboardDoubleArrowLeft/>
                <div className="h-14 border-l border-gray-500"></div>
            </div>
            <div className="flex flex-row items-center space-x-2 bg-gray-200 w-80 p-2 rounded-lg border-2 border-solid border-gray-600">
                  <IoSearchOutline/>
                  <input type="search" placeholder="Search for anything..." className="bg-transparent text-gray-600"/>
            </div>
            <div className="flex flex-row items-center space-x-2">
                <MdOutlineDateRange className="h-5 w-5"/>
                <BiMessageDots className="h-5 w-5"/>
                <IoNotificationsOutline className="h-5 w-5"/>
            </div>
            <div className="flex fle-row justify-between space-x-2">
            <div className="flex flex-col items-center space-x-2">
                <p>Palak Jain</p>
                <p>Rajasthan, India</p>
            </div>
            <div className="flex flex-row items-center space-x-2">
                <img src="https://sp.yimg.com/ib/th/id/OIP.AFZivgUUqrKu978q4xpQFAHaEo?pid=Api&w=148&h=148&c=7&dpr=2&rs=1" alt="profile" className="h-10 w-10 rounded-full"/>
                <IoIosArrowDown/>
            </div>
            </div>
        </div>
        <hr className="border-gray-500 w-180 border-1 space-y-2"/>

        {/* sidebar */}
        <>
        <div className="flex flex-row items-center justify-evently">
            <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-2 space-y-3">
                     <HiOutlineSquares2X2 className="h-5 w-5"/>
                     <p>Home</p>
                </div>
                <div className="flex flex-row items-center space-x-2 space-y-3">
                     <LuMessageSquareMore className="h-5 w-5"/>
                     <p>Messages</p>
                </div>
                <div className="flex flex-row items-center space-x-2 space-y-3">
                     <GoTasklist className="h-5 w-5"/>
                     <p>Tasks</p>
                </div>
                <div className="flex flex-row items-center space-x-2 space-y-3">
                     <MdOutlinePersonOutline className="h-5 w-5"/>
                     <p>Members</p>
                </div>
                <div className="flex flex-row items-center space-x-2 space-y-3">
                     <IoSettingsOutline className="h-5 w-5"/>
                     <p>Settings</p>
                </div>
                <hr className="border-gray-500 w-30 border-1 mt-3 mb-3"/>

                <div className="flex flex-row items-center space-x-4 space-y-1justify-between">
                    <p>MY PROJECTS</p>
                    <CiSquarePlus/>
                </div>
                <div className="flex flex-row items-center space-x-1 justify-between bg-violet-200 p-1 space-y-4">
                    <p>Mobile App</p>
                    <p>...</p>
                </div>
                <div className="space-y-4">
                <p>Website Redesign</p>
                <p>Design System</p>
                <p>Wireframes</p>
                </div>
                <div className=" flex flex-row bg-gray-200 p-2 rounded-xl w-10 items-center mt-2 h-10 ml-12">
                    <BsFillLightbulbFill className="h-6 w-5 items-center text-yellow-300"/>
                </div>
                <div className="flex flex-col bg-gray-200 rounded-lg h-35 w-40 p-2 items-center space-y-1">
                <h1 className="font-bold">Thoughts Time</h1>
                <p className="text-center">We don't have any notice for you, till then you can share your thoughts with your peers.</p>
                <p className="bg-white rounded-lg p-2 text-center text-black">Write a Message</p>
                </div>
            </div>
            {/* main-content */}
            <div className="flex flex-col ml-5">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-row  text-center space-x-2 mr-80">
                    <p className="font-bold text-3xl space-x-2 mb-2">Mobile App</p>
                    <HiOutlinePencilSquare  className="bg-violet-200 mt-4 text-center space-x-3 h-4 w-4"/>
                    <MdLink className="bg-violet-200 mt-4 text-center space-x-3 h-4 w-4"/>
                    </div>
                    <div className="flex flex-row space-x-2 ml-80">
                        <CiSquarePlus className="bg-violet-200 mt-4 text-center space-x-2 h-4 w-4"/>
                        <p className="text-sm bg-gray-200 p-1 text-violet-600 bg-transparent mt-2">invite</p>
                        <img src="https://sp.yimg.com/ib/th/id/OIP.AFZivgUUqrKu978q4xpQFAHaEo?pid=Api&w=148&h=148&c=7&dpr=2&rs=1" alt="profile" className="h-6 w-6 mt-4 rounded-full"/>
                        <img src="https://tse4.mm.bing.net/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&P=0&h=180" alt="profile" className="h-6 w-6 mt-4 rounded-full"/>
                        <img src="https://tse1.mm.bing.net/th/id/OIP.FnoGjSeBXsYPusb9hi5HnAHaHa?pid=Api&P=0&h=180" alt="profile" className="h-6 w-6 mt-4 rounded-full"/>
                        <img src="https://tse1.mm.bing.net/th/id/OIP.F2zXcQvddzx5yuC0HNlohQHaHa?pid=Api&P=0&h=180" alt="profile" className="h-6 w-6 mt-4 rounded-full"/>
                        <p className="h-6 w-6 mt-4 rounded-full">+2</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between mt-3">
                    <div className="flex flex-row  text-center space-x-2 mr-80">
                    <select className = "border-2 border-solid border-gray-600">
                      <option value="">filter</option>
                      <option value="category">Category</option>
                      <option value="priority">Priority</option>
                      <option value="dueDate">Due Date</option>
                    </select>

                    <select className= "border-2 border-solid border-gray-600">
                      <option value="">Today</option>
                      <option value="Today">Today</option>
                      <option value="Yesterday">Yesterday</option>
                    </select>

                    </div>
                    <div className="flex flex-row space-x-2 ml-80">
                        <div className="flex flex-row border-2 border-solid border-gray-600 p-2 align-center space-x-1">
                            <TbUserShare/>
                            <p>Share</p>
                        </div>
                        <div className="h-14 border-l border-gray-500"></div>
                        <div className="flex p-4 bg-violet-800 text-white space-x-1">
                            <p>=</p>
                        </div>
                        <HiOutlineSquares2X2 className="h-6 w-6 align-center mt-3"/>
                    </div>
                </div>

                <div className="flex flex-row space-x-3 mt-3 mr-4">
                    <div className="flex flex-col space-x-2 w-80 h-80 bg-gray-300 p-4">
                        <div className="flex flex-row">
                            <p className="text-violet-600 font-bold items-center">.</p>
                            <p>To Do</p>
                            <CiSquarePlus className="bg-violet-300 mt-2 text-center ml-40 h-4 w-4 text-violet-600"/>
                        </div>
                        <hr className="border-2 border-solid border-violet-800 mt-2"/>
                    </div>
                    <div className="flex flex-col space-x-2 w-80 h-80 bg-gray-300 p-4">
                        <div className="flex flex-row">
                            <p className="text-orange-600 font-bold items-center">.</p>
                            <p>On Progress</p>
                            <CiSquarePlus className="bg-violet-300 mt-2 text-center ml-40 h-4 w-4 text-violet-600"/>
                        </div>
                        <hr className="border-2 border-solid border-orange-800 mt-2"/>
                    </div>
                    <div className="flex flex-col d-stretchspace-x-2 w-80 h-80 bg-gray-300 p-4">
                        <div className="flex flex-row">
                            <p className="text-green-600 font-bold items-center">.</p>
                            <p>Done</p>
                            <CiSquarePlus className="bg-violet-300 mt-2 text-center ml-40 h-4 w-4 text-violet-600"/>
                        </div>
                        <hr className="border-2 border-solid border-green-800 mt-2"/>
                    </div>
                </div>

            </div>
        </div>
        </>
    </div>    
)     

export default Navbar;
    