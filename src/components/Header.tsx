import Link from 'next/link';
import { Mail, Phone, Instagram, Facebook, Youtube, Twitter, ChevronDown, Search, ShoppingCart, Heart, UserRound } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IconWithBadge } from './index';


interface MenuIconProps {
  className?: string;
  size?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

function MenuIcon(props: MenuIconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function Header() {
    return (
      <header className="">
        {/* Top Bar */}
        <section className="bg-[#252B42] text-white font-bold mx-auto px-4 py-4 hidden md:flex items-center justify-between">
          <div className='flex items-center justify-between'>
            <div className='flex items-center mr-3'>
              <Phone size={16} className='mr-1' />
              <small>(225) 555-0118</small>
            </div>

            <div className='flex items-center'>
              <Mail size={16} className='mr-1' />
              <small>michelle.rivera@example.com</small>
            </div>
          </div>

          <small>Follow Us and get a chance to win 80% off</small>

          <div className='flex items-center'>
            <small className='mr-1'>Follow Us: </small>
            <Instagram size={16} className='mr-1' />
            <Facebook size={16} className='mr-1' />
            <Youtube size={16} className='mr-1' />
            <Twitter size={16} />
          </div>
        </section>

        {/* Navigation Bar */}
        <section className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
                <h1 className="text-xl font-bold">Bandage</h1>
                <span className="sr-only">Bandage</span>
              </Link>
              <div className="grid gap-2 py-6">
                <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                  Home
                </Link>
                <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                  Product
                </Link>
                <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                  Pricing
                </Link>
                <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo - Bandage */}
          <div className="hidden lg:flex items-center justify-start">
              <Link href="#" className="mr-6" prefetch={false}>
              <h1 className="text-xl font-bold">Bandage</h1>
              </Link>
          </div>

          {/* Navigation Links - Aligned after the logo */}
          <nav className="hidden lg:flex gap-4 ml-8">
            <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-2 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
            >
            Home
            </Link>
            <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-2 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
            >
            Shop
            <ChevronDown size={14} />
            </Link>
            <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-2 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
            >
            About
            </Link>
            <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-2 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
            >
            Blog
            </Link>
            <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-2 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
            >
            Contact
            </Link>
            <Link
            href="#"
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-2 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
            prefetch={false}
            >
            Pages
            </Link>
          </nav>

          {/* Login/Register - Aligned to the right */}
          <div className="hidden lg:flex ml-auto gap-4 text-blue-600 ">
            <UserRound />
            <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
            Login
            </Link>
            /
            <Link href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
            Register
            </Link>
            <Search />
            <IconWithBadge badgeCount={1} Icon={ShoppingCart} />
            <IconWithBadge badgeCount={1} Icon={Heart} />
          </div>
        </section>
      </header>
    );
}

export default Header;