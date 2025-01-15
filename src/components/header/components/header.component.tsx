import { FiletextIcon } from "../../../assets/icons";
import CoreliaLogo from "../../../assets/images/corelia-logo.png";

export const Header = () => (
  <header className="shadow-md">
    <div className="container flex items-center justify-between px-8 py-4">
      <img src={CoreliaLogo} alt="Corelia Logo" className="h-12" />
      <div className="flex flex-row-reverse items-center gap-3 text-right">
        <div className="grid size-10 place-content-center rounded-lg bg-gradient-to-r from-primary-600 to-primary-700 text-primary-100 shadow-lg shadow-primary-950">
          <FiletextIcon />
        </div>
        <div>
          <h1 className="text-gradient text-xl font-bold">Qalam Vision</h1>
          <h2 className="text-sm text-gray-700">
            Arabic Document Intelligence
          </h2>
        </div>
      </div>
    </div>
  </header>
);
