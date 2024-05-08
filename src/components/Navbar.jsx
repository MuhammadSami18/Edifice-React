const Navbar = ({ link }) => {
    const logo = process.env.PUBLIC_URL + '/logo.png';
    return (
        <div>
            <header className="text-gray-600 fixed bg-white w-full pl-[98px] pr-20 z-50">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} alt="logo" />
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-xs font-medium justify-center tracking-widest">
                        {link.map((links) => {
                            return (
                                <a className="mr-5 hover:text-[#FF7417] cursor-pointer uppercase" key={links.id}>{links.name}</a>
                            )
                        })}
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Navbar
