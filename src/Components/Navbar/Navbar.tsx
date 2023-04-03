import Toggle from "../Toggle/Toggle";

export default function Navbar() {
  return (
    <div className="flex justify-between px-4 py-4 md:px-16 items-center shadow-lg">
      <div className="flex gap-16 items-center">
        <div className="text-2xl font-bold">Logo</div>
        <div className="hidden md:block">
          <Toggle />
        </div>
      </div>
      <div className="md:hidden">
        <Toggle />
      </div>
      <div className="flex items-center gap-8">
        <div className="hidden md:block cursor-pointer text-xl font-bold">
          Sign Up
        </div>
        <div>
          <button className="btn">Sign in</button>
        </div>
      </div>
    </div>
  );
}
