import { FaFire, FaBell, FaCog } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 border-b bg-white">

      <div className="flex items-center gap-2">
        <FaFire className="text-orange-500 text-xl" />
        <h1 className="text-xl font-bold">
          Study Streaks
        </h1>
      </div>

      <div className="flex gap-4 text-gray-600">
        <FaBell />
        <FaCog />
      </div>

    </div>
  );
}