// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';

// next image
import Image from 'next/image';

// link
import Link from 'next/link';

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/thumb1.jpg',
          link: 'https://leonnnx124-fitclub.netlify.app/',
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link: 'https://www.youtube.com/watch?v=duB_4g5SpVk&ab_channel=Leon%F0%9F%A6%81',
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: 'https://leonnnx124-metaverse.netlify.app/',
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          link: 'https://leonnnx124-monolock.netlify.app/',
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[260px] sm:h-[420px] md:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <Link href={`${image.link}`} target="_blank">
                      <div className="flex items-center justify-center relative overflow-hidden">
                        {/* images */}
                        <Image
                          className="group-hover:rotate-12 group-hover:scale-150 transition-all duration-500"
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                        {/* overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#d8c5a6] to-[#c2945f] opacity-0 group-hover:opacity-70 transition-all duration-700"></div>
                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 xl:group-hover:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 tracking-[0.2rem] text-[13px] text-white">
                            {/* title part 1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PROJECT
                            </div>
                            {/* icon */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
