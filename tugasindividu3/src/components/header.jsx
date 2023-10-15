function Header() {
    const navLinks = [
        { text: 'Beranda', url: '/' },
        { text: 'Tentang', url: '/tentang' },
        { text: 'Kontak', url: '/kontak' },
    ];
    return (
        <nav className="bg-gradient-to-r from-black via-gray-600 to-gray-900">
            <div className="flex flex-row justify-center">
                <ul className="flex flex-row ">
                    {navLinks.map((link, index) => (
                        <li key={index} className="m-4 font-semibold text-blue-200">
                            <a href={link.url}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    )
}

export default Header 