import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200 bg-stone-100 py-4 text-sm text-stone-600">
      <div className="mx-auto max-w-7xl px-8 sm:px-16">
        <ul className="flex items-center justify-center sm:justify-start">
          <li>&copy; {currentYear} Vacasa</li>
          <li className="flex items-center before:px-1 before:content-['∙'] sm:before:px-2">
            <Link href="/" className="hover:underline">
              Terms
            </Link>
          </li>
          <li className="flex items-center before:px-1 before:content-['∙'] sm:before:px-2">
            <Link href="/" className="hover:underline">
              Privacy
            </Link>
          </li>
          <li className="flex items-center before:px-1 before:content-['∙'] sm:before:px-2">
            <Link href="/" className="hover:underline">
              Sitemap
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
