const fs = require('fs');
let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const startTag = '<header className="border-b border-[#E8E4DA] bg-[#FBF9F5]/95 backdrop-blur-md sticky top-0 z-40">';
const endTag = '</header>';

const startIdx = code.indexOf(startTag);
const endIdx = code.indexOf(endTag) + endTag.length;

const replacement = `
      {/* Top Navigation - hides on scroll */}
      <motion.header 
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isScrolled ? -100 : 0, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="border-b border-[#E8E4DA] bg-[#FBF9F5]/95 backdrop-blur-md fixed top-0 left-0 right-0 z-40"
      >
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-normal tracking-wide uppercase font-serif text-[#1F1D1A]">
              Webnest
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-wider sm:tracking-widest uppercase text-[#756F64] leading-tight mt-0.5">
              Storefronts for Business Owners, Freelancers & Vendors
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase text-[#545047]">
            <a href="#showcase" className="hover:text-black transition-colors">Case Studies</a>
            <a href="#pricing" className="hover:text-black transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex border border-[#22201D] bg-[#22201D] text-[#FBF9F5] px-5 sm:px-6 py-2.5 text-xs tracking-widest uppercase hover:bg-transparent hover:text-[#22201D] transition-colors duration-200"
            >
              {dynamicCtaLabel}
            </a>

            {/* Mobile Hamburger Toggle Button (when not scrolled) */}
            <div className="md:hidden">
              <motion.button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-2 text-[#1F1D1A] hover:bg-[#EFECE4] transition-colors rounded min-h-[44px] min-w-[44px] flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Floating Hamburger - visible when scrolled */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isScrolled ? 1 : 0, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 right-6 z-50 pointer-events-auto md:hidden"
      >
        <motion.button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="w-12 h-12 bg-[#22201D] text-[#FBF9F5] rounded-full shadow-lg flex items-center justify-center pointer-events-auto border border-[#E8E4DA]"
          variants={hamburgerVariants as any}
          animate={isScrolled ? "scrolled" : "normal"}
          whileHover={{ scale: 1.1, rotate: 180 }}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </motion.div>

      {/* Floating Menu Popup */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#FBF9F5]/90 backdrop-blur-sm z-40"
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              variants={menuVariants as any}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto w-[90%] max-w-sm"
            >
              <div className="relative bg-[#FBF9F5] border border-[#E8E4DA] rounded-lg p-8 shadow-2xl flex flex-col items-center">
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 text-[#756F64] hover:text-[#1F1D1A] rounded-full transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>

                <div className="space-y-6 mt-4 flex flex-col w-full text-center">
                  <a
                    href="#showcase"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#1F1D1A] hover:text-[#8A7150] transition-colors font-serif text-2xl"
                  >
                    Case Studies
                  </a>
                  <a
                    href="#pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#1F1D1A] hover:text-[#8A7150] transition-colors font-serif text-2xl"
                  >
                    Pricing
                  </a>
                  <a
                    href="#faq"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-[#1F1D1A] hover:text-[#8A7150] transition-colors font-serif text-2xl"
                  >
                    FAQ
                  </a>
                  
                  <div className="pt-6 mt-4 border-t border-[#E8E4DA] w-full">
                     <a
                        href={waHref}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-center p-4 bg-[#22201D] text-[#FBF9F5] transition-colors text-xs uppercase tracking-widest font-medium"
                      >
                        {dynamicCtaLabel}
                      </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
`;

code = code.slice(0, startIdx) + replacement.trim() + code.slice(endIdx);
fs.writeFileSync('src/app/page.tsx', code);
