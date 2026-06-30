export default function Footer() {
  return (
    <footer className="mt-section-gap border-t border-outline dark:border-dark-outline">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-gutter py-12 max-w-[840px] mx-auto gap-8">
        <div className="font-caption text-caption text-secondary">
          © 2026 Sanga Park. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a
            className="font-mono-label text-mono-label text-secondary hover:text-on-background dark:hover:text-dark-on-background transition-colors"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-mono-label text-mono-label text-secondary hover:text-on-background dark:hover:text-dark-on-background transition-colors"
            href="#"
          >
            LinkedIn
          </a>
          <a
            className="font-mono-label text-mono-label text-secondary hover:text-on-background dark:hover:text-dark-on-background transition-colors"
            href="#"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
