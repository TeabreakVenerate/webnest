import fs from 'fs';

let code = fs.readFileSync('src/app/page.tsx', 'utf8');

const target = `<motion.div
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
            </motion.div>`;

const replacement = `<div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4">
              <motion.div
                variants={menuVariants as any}
                initial="closed"
                animate="open"
                exit="closed"
                className="pointer-events-auto w-full max-w-sm"
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
                    <a
                      href={\`https://wa.me/\${SITE_CONFIG.whatsappNumber}?text=\${encodeURIComponent("Hi Webnests, I have an inquiry.")}\`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[#1F1D1A] hover:text-[#8A7150] transition-colors font-serif text-2xl"
                    >
                      Contact
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
            </div>`;

code = code.replace(target, replacement);
fs.writeFileSync('src/app/page.tsx', code);
