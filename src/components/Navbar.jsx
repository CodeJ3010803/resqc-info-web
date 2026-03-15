import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    }, [mobileMenuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll > 0) {
                const currentProgress = (window.scrollY / totalScroll) * 100;
                setScrollProgress(currentProgress);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = ["Roles", "Mission", "Features", "App"];

    // PRO SCROLL HANDLER
    const handleScrollTo = (e, targetId) => {
        e.preventDefault();
        const element = document.getElementById(targetId.toLowerCase());
        
        if (element) {
            // Close mobile menu first if it's open
            setMobileMenuOpen(false);

            // Calculate position
            const offset = 80; // Matches the height of your fixed navbar
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`fixed top-0 w-full z-[100] py-3 md:py-4 transition-all duration-300 ease-in-out ${isScrolled || mobileMenuOpen
                        ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/60 shadow-lg shadow-slate-900/5"
                        : "bg-transparent border-b-transparent"
                    }`}
            >
                <div
                    className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-red-500 to-rose-600 transition-all duration-150 ease-out z-[101]"
                    style={{ width: `${scrollProgress}%` }}
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-[110]">

                    {/* Brand Identity */}
                    <motion.div 
                        className="flex items-center cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        onClick={(e) => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top on logo click
                    >
                        <img 
                            src="/assets/resqc-logo.png" 
                            alt="ResQC Logo" 
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-10">
                        <div className="flex items-center gap-4 lg:gap-8">
                            {navLinks.map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => handleScrollTo(e, item)} // Trigger Pro Scroll
                                    className={`text-[11px] lg:text-[13px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-red-500 relative group
                                        ${isScrolled ? "text-[#475569]" : "text-[#1e293b]"}`}
                                >
                                    {item}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                                </a>
                            ))}
                        </div>

                        <button className="bg-[#121b2e] text-white px-4 py-2 lg:px-7 lg:py-2.5 rounded-full text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.15em] 
                                          shadow-xl shadow-slate-900/10 transition-all duration-300 
                                          hover:bg-red-600 hover:shadow-red-500/20 hover:-translate-y-0.5 active:scale-95">
                            Watch Demo
                        </button>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className={`md:hidden relative z-[120] p-2 rounded-xl transition-all active:scale-90 ${mobileMenuOpen || isScrolled
                                ? "bg-[#121b2e] text-white"
                                : "bg-slate-100 text-slate-900"
                            }`}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col items-center gap-8 px-6 text-center">
                            {navLinks.map((item, idx) => (
                                <motion.a
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => handleScrollTo(e, item)} // Trigger Pro Scroll in Mobile Menu
                                    className="text-3xl font-bold text-[#1e293b] uppercase tracking-[0.2em] hover:text-red-500 transition-colors"
                                >
                                    {item}
                                </motion.a>
                            ))}

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="mt-4 bg-[#121b2e] text-white px-10 py-4 rounded-full text-base font-bold uppercase tracking-[0.15em] shadow-2xl shadow-slate-500/30 active:scale-95"
                            >
                                Watch Demo
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;