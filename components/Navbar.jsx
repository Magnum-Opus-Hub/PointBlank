import Link from 'next/link';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import Logo from '../public/assets/burger inchis-21.svg';
import Logo2 from '../public/assets/burger deschis-22.svg';

const smoothScrollTo = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 72,  // assuming navbar height is 72px
      behavior: 'smooth'
    });
  }
};

const Navbar = () => {
  return (
    <Disclosure as="nav" className="md:sticky top-0 z-50" aria-label="Main navigation">
      {({ open }) => (
        <>
          <div className="flex items-center justify-between px-8 py-4">
            {/* Logo */}
            <div role="button" tabIndex="0" className="hidden md:block pt-[3px]" onClick={() => smoothScrollTo('top')} aria-label="Go to top of the page">
              <Image src={Logo} alt="Logo" height={126.5} width={126.5} className="cursor-pointer" />
            </div>

            {/* Mobile Logo */}
            <div className="md:hidden flex-1 flex justify-center">
              <Disclosure.Button as="div" role="button" aria-pressed={open ? "true" : "false"} tabIndex="0" className="cursor-pointer">
                <Image src={open ? Logo2 : Logo} alt="Logo" height={130} width={130} />
              </Disclosure.Button>
            </div>

            {/* Desktop: Section Links & Log in Button */}
            <div className="hidden md:flex text-pearl-white cursor-pointer flex-col items-center justify-center font-telegraf">
              <div className="flex space-x-20 text-[22px]">
                <span onClick={() => smoothScrollTo('how-it-works')} aria-label="Navigate to How it works section">How it works</span>
                <span onClick={() => smoothScrollTo('features')} aria-label="Navigate to Features section">Features</span>
                <span onClick={() => smoothScrollTo('capabilities')} aria-label="Navigate to Capabilities section">Capabilities</span>
              </div>
              <div className="flex space-x-28 text-[22px]">
                <span onClick={() => smoothScrollTo('plans')} aria-label="Navigate to Plans section">Plans</span>
                <span onClick={() => smoothScrollTo('faq')} aria-label="Navigate to FAQ section">FAQ</span>
              </div>
            </div>

            {/* Log in Button */}
            <div className="hidden md:block text-pearl-white">
              <Link href="https://billing.stripe.com/p/login/bIY1777uAdlza3e5kk">
                <span className="px-4 py-2 text-2xl cursor-pointer font-grandir-italic" aria-label="Log in">
                  LOG IN
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile: Collapsible menu */}
          <Disclosure.Panel className="md:hidden absolute w-full z-10">
            <div className="flex flex-col items-center space-y-4 text-pearl-white font-telegraf">
              <span onClick={() => smoothScrollTo('how-it-works')} aria-label="Navigate to How it works section">How it works</span>
              <span onClick={() => smoothScrollTo('features')} aria-label="Navigate to Features section">Features</span>
              <span onClick={() => smoothScrollTo('capabilities')} aria-label="Navigate to Capabilities section">Capabilities</span>
              <span onClick={() => smoothScrollTo('plans')} aria-label="Navigate to Plans section">Plans</span>
              <span onClick={() => smoothScrollTo('faq')} aria-label="Navigate to FAQ section">FAQ</span>
              <Link href="https://billing.stripe.com/p/login/bIY1777uAdlza3e5kk">
                <span className="px-4 py-2 cursor-pointer font-telegraf" aria-label="Log in">
                  LOG IN
                </span>
                </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;