import { useEffect, useRef } from "react";

function Header() {
    const headerRef = useRef<HTMLElement>(null);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Animação para o título
        if (headerRef.current) {
            headerRef.current.style.animation = "slideIn 0.8s ease-out forwards";
        }
        
        // Animação para os itens de navegação (com delay)
        if (navRef.current) {
            const navItems = navRef.current.querySelectorAll("li");
            navItems.forEach((item, index) => {
                (item as HTMLElement).style.animation = `slideIn 0.8s ease-out ${index * 0.2 + 0.3}s forwards`;
                (item as HTMLElement).style.opacity = "0";
                (item as HTMLElement).style.transform = "translateX(-30px)";
            });
        }
    }, []);

    return (
        <div className="flex w-full h-full bg-[#021017] justify-center align-center gap-5 p-7">
            <header className="text-white p-4" ref={headerRef} style={{ opacity: 0, transform: "translateX(-30px)" }}>
                <h1 className="font-sans text-2xl font-bold">Portifólio</h1>
            </header>
            <nav className="flex justify-center items-center" ref={navRef}>
                <ul className="flex space-x-5 font-bold">
                    <li>
                        <a href="/" className="relative text-white group hover:text-[#2BDEFD]">
                            Home
                            <span className="absolute left-0 bottom-[-4px] h-[1px] w-0 bg-[#2BDEFD] transition-all duration-300 group-hover:w-[50%]"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/about" className="relative text-white group hover:text-[#2BDEFD]">
                            Minha história
                            <span className="absolute left-0 bottom-[-4px] h-[1px] w-0 bg-[#2BDEFD] transition-all duration-300 group-hover:w-[50%]"></span>
                        </a>
                    </li>
                    <li>
                        <a href="/contact" className="relative text-white group hover:text-[#2BDEFD]">
                            Contato
                            <span className="absolute left-0 bottom-[-4px] h-[1px] w-0 bg-[#2BDEFD] transition-all duration-300 group-hover:w-[50%]"></span>
                        </a>
                    </li>
                </ul>
            </nav>

            <style>
                {`
                    @keyframes slideIn {
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default Header;