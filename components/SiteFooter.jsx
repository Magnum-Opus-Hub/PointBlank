import Link from 'next/link';

const SiteFooter = () => {
  return (
    <footer className="bg-almost-black text-pearl-white py-16" aria-label="Site Footer">
      {/* Top row */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center" role="list">
        {/* First Column */}
        <div role="listitem">
          <p className="mb-4 text-lg font-telegraf" aria-label="Learn more about us">Want to learn more about us?</p>
          <div className='hover-pulse'>
          <Link href="https://calendly.com/pointblank-pbk/point-blank-intro?back=1&month=2023-09&date=2023-09-05">
            <span className="bg-pearl-white text-black rounded-full text-[22px] py-2 px-9 cursor-pointer font-telegraf-slanted" aria-label="Book a call with us">Book a Call</span>
          </Link>
          </div>
        </div>
        {/* Second Column */}
        <div role="listitem">
          <p className="mb-2 text-lg font-telegraf" aria-label="General inquiries">General inquiries</p>
          <Link href="mailto:hello@pointblank.design">
            <span className="hover:underline text-lg cursor-pointer font-telegraf-slanted" aria-label="Send us an email">hello@pointblank.design</span>
          </Link>
        </div>
        {/* Third Column */}
        <div role="listitem">
          <ul className="space-y-2 text-lg font-telegraf-slanted" role="list">
            <li role="listitem"><Link href="https://www.instagram.com/pointblank.design/"><span className="hover:underline cursor-pointer">Instagram</span></Link></li>
            <li role="listitem"><Link href="https://twitter.com/PointBlankpbk"><span className="hover:underline cursor-pointer">Twitter</span></Link></li>
            <li role="listitem"><Link href="https://www.linkedin.com/company/pointblankpbk"><span className="hover:underline cursor-pointer">LinkedIn</span></Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom row */}
      <div className="container mx-auto items-center justify-center text-center mt-12">
        <div className="inline-flex space-x-2" aria-label="Legal Links">
          {/* <Link href="https://filipstan.notion.site/Terms-Conditions-04f804765a2845a5992ecb9c2e538002?pvs=4"><span className="hover:underline text-lg cursor-pointer font-telegraf" aria-label="Terms of Service">Terms of Service</span></Link> */}
        </div>
      </div>

      {/* Copyright */}
      <div className="container mx-auto text-center text-lg font-telegraf">
        <p aria-label="Copyright Information">© 2023 PointBlank. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
