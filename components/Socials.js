// link
import Link from 'next/link';

// icons
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinBoxLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-xl">
      <Link
        href={'https://www.youtube.com/channel/UCohU66DqhVke7gu93Q-nDAA'}
        className="hover:text-white transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link href={''} className="hover:text-white transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link
        href={'https://github.com/leonnn124'}
        className="hover:text-white transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={
          'https://www.linkedin.com/in/%E6%9A%90%E5%80%AB-%E6%9E%97-723a88202/'
        }
        className="hover:text-white transition-all duration-300"
      >
        <RiLinkedinBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
