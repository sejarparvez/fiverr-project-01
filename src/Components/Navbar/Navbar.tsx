export default function Navbar() {
  return (
    <div className="flex h-20 bg-white shadow-xl justify-between items-center md:px-16 px-6">
      <div className="text-2xl font-bold flex items-center">Logo</div>
      <div className="flex md:gap-8 gap-2 items-center">
        <div className=" text-blue-200 hover:text-blue-100 md:text-xl cursor-pointer">
          Sign Up
        </div>
        <div>
          <button className="btn md:text-xl">Log In</button>
        </div>
      </div>
    </div>
  );
}
