import NavItem from "./NavItem"

const Header = () => {
  return (
    <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-between w-full relative max-w-2xl border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 bg-gray-900 bg-opacity-60 text-gray-100">
         
          <div className="ml-[-0.60rem]">
            {/* <MobileMenu /> */}
            <NavItem href="/" text="Home" />
            <NavItem href="/about" text="About" />
            <NavItem href="/projects" text="Projects" />
          </div>
         
        </nav>
      </div>
  )
}

export default Header
