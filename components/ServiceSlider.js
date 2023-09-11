// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// icons
import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';

// import required modules
import { FreeMode, Pagination } from 'swiper';

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Wireframe',
    description: '規劃前期線框稿，溝通網頁架構、內容、功能等',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: '依線框稿設計網頁架構，繪製實際使用的畫面',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: '添加互動或操作功能，並驗證功能是否正常，符合使用者需要',
  },
  {
    icon: <RxRocket />,
    title: 'Animation',
    description: '為網頁添加動畫，以更好傳達網頁資訊或引導使用者操作',
  },
  {
    icon: <RxReader />,
    title: 'Document',
    description: '撰寫說明文件，讓使用者明白如何操作產品',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[#f2e2c8]/80 h-max rounded-lg px-6 py-6 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[#f2e2c8] transition-all duration-300">
              {/* icon */}
              <div className="text-4xl mb-4">{item.icon}</div>
              {/* title & desc */}
              <div>
                <div className="mt-1 md:mt-0 mb-8 text-xl">{item.title}</div>
                <p className="text-[#c2945f] sm:h-24 mb-2 text-lg max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
