let navItems = ["products", "our work", "services"];

function Header() {
    return (
        <header class="flex justify-around md:justify-between">
        <div className="dark:text-white hidden md:inline-flex">hello@cargo.io</div>
        <div className="flex dark:text-gray-400  capitalize">
          {navItems.map((x, index) => (
            <ul
              key={index}
              className="mx-3 cursor-pointer hover:text-gray-800 dark:hover:text-white"
            >
              <li>{x}</li>
            </ul>
          ))}
        </div>
        <div className="hidden md:inline-flex">
          <a
            href=""
            className="dark:text-gray-500 mx-3 uppercase hover:text-white"
          >
            faq
          </a>
          <button className="bg-blue-600 text-white capitalize px-4  h-8 rounded-2xl">
            get started
          </button>
        </div>
      </header>
    )
}

export default Header
