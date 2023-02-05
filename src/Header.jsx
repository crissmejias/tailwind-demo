import logo from "./assets/logo-w.svg";
function Header() {
  return (
    <header className="flex justify-between px-10 items-center bg-secondary text-white w-full h-16">
      <img className="w-1/2 md:w-1/5" src={logo} alt="" />

      <div className="text-5xl">≣</div>
    </header>
  );
}
export { Header };
