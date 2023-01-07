import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <header className="text-gray-300 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-600 mb-4 md:mb-0" href='./'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="link link-warning link-hover">Tailblocks</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center">
          <a className="link-secondary link-hover px-4" href='https://github.com/Katsuyuki-Karasawa/KeySwitchesDB'>GitHub</a>
          <a className="link-secondary link-hover px-4">Third Link</a>
          <a className="link-secondary link-hover px-4">Fourth Link</a>
        </nav>
        <button>
          <Link className="rounded-md btn btn-accent" href='./register'>Register Switch</Link>
        </button>
      </div>
    </header>
  )
}