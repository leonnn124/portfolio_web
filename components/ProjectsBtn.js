// next image
import Image from 'next/image';

// next link
import Link from 'next/link';

// icons
import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-50">
      <Link
        href={'work'}
        className="relative w-[185px] h-[185px] flex justify-center items-center group"
      >
        <Image
          src={'/rounded-proj-text.png'}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-1 transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
