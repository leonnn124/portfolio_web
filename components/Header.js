// next image
import Image from 'next/image';

// link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto px-12">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-6 py-8">
          {/* socials */}
          <Socials />
          {/* logo */}
          <Link href={'/'}>
            {/* <Image
              src={'/logo.png'}
              alt=""
              width={220}
              height={48}
              priority={true}
            /> */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
