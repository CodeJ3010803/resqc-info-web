import { useState, useEffect } from "react";
import { Menu, Minimize2, Square, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isDemoOpen, setIsDemoOpen] = useState(false);
    const [isDemoMinimized, setIsDemoMinimized] = useState(false);

    const openDemo = () => {
        setMobileMenuOpen(false);
        setIsDemoOpen(true);
        setIsDemoMinimized(false);
    };

    const closeDemo = () => {
        setIsDemoOpen(false);
        setIsDemoMinimized(false);
    };

    const minimizeDemo = () => setIsDemoMinimized(true);
    const restoreDemo = () => setIsDemoMinimized(false);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen || (isDemoOpen && !isDemoMinimized) ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen, isDemoOpen, isDemoMinimized]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setMobileMenuOpen(false);
                setIsDemoOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);
        return () => window.removeEventListener("keydown", handleEscape);
    }, []);

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

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-[110] gap-3">

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
                            className="h-9 sm:h-10 md:h-12 w-auto object-contain"
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

                            <a
                                href="/terms-policy.html"
                                className={`text-[11px] lg:text-[13px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:text-red-500 relative group
                                    ${isScrolled ? "text-[#475569]" : "text-[#1e293b]"}`}
                            >
                                Terms & Policy
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full" />
                            </a>
                        </div>

                        <button
                            onClick={openDemo}
                            className="bg-[#121b2e] text-white px-4 py-2 lg:px-7 lg:py-2.5 rounded-full text-[11px] lg:text-[12px] font-bold uppercase tracking-[0.15em] 
                                          shadow-xl shadow-slate-900/10 transition-all duration-300 
                                          hover:bg-red-600 hover:shadow-red-500/20 hover:-translate-y-0.5 active:scale-95"
                        >
                            Watch Demo
                        </button>
                    </div>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
                        className="fixed inset-0 bg-white z-[90] flex flex-col items-center justify-center md:hidden px-4"
                    >
                        <div className="flex flex-col items-center gap-6 px-2 text-center w-full max-w-sm">
                            {navLinks.map((item, idx) => (
                                <motion.a
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + idx * 0.1 }}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={(e) => handleScrollTo(e, item)} // Trigger Pro Scroll in Mobile Menu
                                    className="text-2xl sm:text-3xl font-bold text-[#1e293b] uppercase tracking-[0.14em] hover:text-red-500 transition-colors break-words"
                                >
                                    {item}
                                </motion.a>
                            ))}

                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.45 }}
                                href="/terms-policy.html"
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl sm:text-3xl font-bold text-[#1e293b] uppercase tracking-[0.12em] hover:text-red-500 transition-colors"
                            >
                                Terms & Policy
                            </motion.a>

                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                onClick={openDemo}
                                className="mt-3 bg-[#121b2e] text-white px-8 py-3.5 rounded-full text-sm sm:text-base font-bold uppercase tracking-[0.12em] shadow-2xl shadow-slate-500/30 active:scale-95"
                            >
                                Watch Demo
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isDemoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className={`fixed z-[200] ${isDemoMinimized ? "top-20 right-4 w-[320px] max-w-[calc(100vw-2rem)]" : "inset-0 bg-slate-950/75 backdrop-blur-sm p-4 flex items-center justify-center"}`}
                        onClick={isDemoMinimized ? undefined : closeDemo}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.94, y: 10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.98, y: 6 }}
                            transition={{ duration: 0.2 }}
                            className={`${isDemoMinimized ? "w-full rounded-xl" : "w-full max-w-4xl rounded-2xl"} overflow-hidden bg-slate-950 border border-white/10 shadow-2xl`}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className={`flex items-center justify-between px-3 ${isDemoMinimized ? "py-2" : "px-4 py-3"} bg-slate-900 border-b border-white/10`}>
                                <p className="text-white text-xs sm:text-sm font-semibold tracking-wide">ResQC Demo</p>
                                <div className="flex items-center gap-2">
                                    {isDemoMinimized ? (
                                        <button
                                            onClick={restoreDemo}
                                            aria-label="Restore demo video"
                                            className="text-slate-300 hover:text-white transition-colors"
                                        >
                                            <Square size={16} />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={minimizeDemo}
                                            aria-label="Minimize demo video"
                                            className="text-slate-300 hover:text-white transition-colors"
                                        >
                                            <Minimize2 size={16} />
                                        </button>
                                    )}

                                    <button
                                        onClick={closeDemo}
                                        aria-label="Close demo video"
                                        className="text-slate-300 hover:text-white transition-colors"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                            </div>

                            <video
                                className={`w-full bg-black pointer-events-none ${isDemoMinimized ? "aspect-video h-auto" : "h-auto max-h-[78vh]"}`}
                                autoPlay
                                loop
                                disablePictureInPicture
                                controlsList="nodownload noplaybackrate noremoteplayback nofullscreen"
                                preload="metadata"
                                onPause={(event) => {
                                    event.currentTarget.play();
                                }}
                            >
                                <source src="/assets/FOR WEB.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;