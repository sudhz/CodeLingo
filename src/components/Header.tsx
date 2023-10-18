import { useState } from "react";

interface HeaderProps {
  serverStatus: boolean;
}

const Header = ({ serverStatus }: HeaderProps) => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  return (
    <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-dark-header shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          {/*      <!-- Brand logo --> */}
          <a
            id="CodeLingo"
            aria-label="CodeLingo logo"
            aria-current="page"
            className="flex text-white items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>
            CodeLingo
          </a>
          {/*      <!-- Mobile trigger --> */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-white transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-white transition-all duration-300"
              ></span>
            </div>
          </button>
          {/*      <!-- Navigation links --> */}
          <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-dark-header px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
              isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
            }`}
          >
            <li role="none" className="lg:flex items-stretch text-gray-300">
              <a
                role="menuitem"
                aria-haspopup="false"
                tabIndex={0}
                className="flex items-center gap-2 py-4 px-1 transition-colors duration-300 hover:text-emerald-500 focus:outline-none focus-visible:outline-none lg:px-8"
              >
                <span>Server status:</span>
                <span
                  className={serverStatus ? "text-blue-400" : "text-red-600"}
                >
                  {serverStatus ? "ONLINE" : "OFFLINE"}
                </span>
              </a>
              <a
                role="menuitem"
                aria-haspopup="false"
                tabIndex={0}
                className="flex items-center gap-2 py-4 px-1 transition-colors duration-300 hover:text-emerald-500 focus:bg-gray-900 focus:outline-none focus-visible:outline-none lg:px-8"
                href="https://github.com/sudhz/CodeLingo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
              </a>
            </li>
          </ul>
          <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
            {/*        <!-- Avatar --> */}
            <a
              className="relative inline-flex m-1 h-10 w-10 items-center justify-center rounded-full text-white"
              href="https://www.linkedin.com/in/sudhz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://wingotar.sirv.com/Images/1688973633089.jpeg"
                alt="Sudhanshu Makwana"
                title="dev1"
                width="35"
                height="35"
                className="max-w-full rounded-full"
              />
            </a>
            {/*        <!-- End Avatar --> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
