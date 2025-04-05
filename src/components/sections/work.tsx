"use client";

import { PROJECTS } from "@/lib/data";
import ProjectDetails from "@/components/data-display/project-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const WorkSection = () => {
  return (
    <Container id="work">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Work" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Some of the noteworthy projects I have built:
        </Typography>
      </div>

      {/* Swiper Carousel */}
      <div className="mt-6">
        <Swiper
          modules={[Pagination, Autoplay]}  // Removed Navigation module
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}  // Dots will be shown
          autoplay={{ delay: 3000 }}
          className="w-full"
        >
          {PROJECTS?.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectDetails {...project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default WorkSection;
