
import { WalletIcon, Bars3Icon } from '@heroicons/react/24/outline'

import { navbarLists } from 'config'

import logo from '/logo.svg'

const Nav = () => {
    return (
        <header className="bg-white w-full h-16 px-3 sm:px-6 shadow-lg">
            <nav className="w-full h-full flex justify-between sm:justify-center items-center gap-x-5">

                {/* mobile navbar */}
                <button type='button' className='sm:hidden'>
                    <Bars3Icon className='w-6 h-6' />
                </button>

                {/* logo */}
                <a href="/" className="flex justify-center items-center gap-x-2">
                    <img src={logo} alt="logo" className="h-9 object-contain" />
                    <span className="text-xl font-bold hidden sm:flex">2Web3World</span>
                </a>

                {/* navbar */}
                <ul className="hidden sm:flex flex-1 gap-x-2">
                    {
                        navbarLists.map((item) => (
                            <li key={item.link}>
                                <a className="px-4 py-2" href={item.link}>{item.label}</a>
                            </li>
                        ))
                    }
                </ul>

                {/* login and settings */}
                <div className="flex justify-center items-center gap-x-3">
                    <button
                        type="button"
                        className='flex items-center sm:px-2 sm:py-[6px] rounded-lg sm:border hover:border-indigo-300'
                    >
                        <WalletIcon className="w-6 h-6" />
                        <span className='ml-1.5 text-[16px] hidden sm:flex'>Connect</span>
                    </button>
                </div>

            </nav>
        </header>
    )
}

export default Nav