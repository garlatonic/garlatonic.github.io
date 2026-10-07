import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background fixed top-0 w-full z-50 border-b border-outline-variant dark:border-[#333333]">
      <nav className="flex justify-between items-center w-full px-gutter py-4 max-w-max-width mx-auto">
        <Link
          className="font-headline-md text-headline-md font-semibold text-primary dark:text-[#EEEEEE]"
          href="/"
        >
          garlatonic.dev
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <a
            className="font-body-md text-body-md text-primary font-semibold dark:text-[#EEEEEE]"
            href="#"
          >
            Work
          </a>
          <a
            className="font-body-md text-body-md text-secondary hover:bg-surface-container-low dark:hover:bg-[#1a1a1a] transition-colors duration-200 dark:text-[#999999]"
            href="#"
          >
            Archive
          </a>
          <a
            className="font-body-md text-body-md text-secondary hover:bg-surface-container-low dark:hover:bg-[#1a1a1a] transition-colors duration-200 dark:text-[#999999]"
            href="#"
          >
            Resume
          </a>
          <div className="flex gap-4 ml-4">
            <button
              className="text-secondary hover:bg-surface-container-low p-1 transition-colors duration-200 dark:text-[#999999] dark:hover:bg-[#1a1a1a]"
              id="theme-toggle"
            >
              <span className="material-symbols-outlined" data-icon="dark_mode">
                dark_mode
              </span>
            </button>
            <button className="text-secondary hover:bg-surface-container-low p-1 transition-colors duration-200 dark:text-[#999999] dark:hover:bg-[#1a1a1a]">
              <span className="material-symbols-outlined" data-icon="mail">
                mail
              </span>
            </button>
          </div>
        </div>
        <button className="md:hidden text-secondary dark:text-[#999999]">
          <span className="material-symbols-outlined" data-icon="menu">
            menu
          </span>
        </button>
      </nav>
    </header>
  );
}
