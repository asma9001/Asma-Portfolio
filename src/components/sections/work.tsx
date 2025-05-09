import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import ProjectDetails from "@/components/data-display/project-details";
import Tag from "@/components/data-display/tag";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Define the type for a Project object
type Project = {
  name: string;
  description: string;
  previewImage?: string;
  technologies?: string[];
  link?: string;
};

const WorkSection = () => {
  // Explicitly define selectedProject as a Project or null
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

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
      <div className="relative mt-6">
        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={false}
          navigation
          className="w-full"
        >
          {PROJECTS?.map((project, index) => (
            <SwiperSlide key={index}>
              <div
                onClick={() => handleCardClick(project)}
                className="cursor-pointer"
              >
                <ProjectDetails {...project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal */}
      {isOpen && selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="sticky right-4 top-4 z-10 float-right text-2xl font-bold text-gray-400 hover:text-gray-900"
              aria-label="Close"
            >
              &times;
            </button>

            {/* Modal Content */}
            <div className="space-y-6 p-6">
              {/* Heading */}
              <h2 className="text-center text-3xl font-semibold text-gray-900">
                {selectedProject.name}
              </h2>

              {/* Image */}
              {selectedProject.previewImage && (
                <Image
                  src={selectedProject.previewImage}
                  alt={selectedProject.name}
                  className="max-h-80 w-full rounded-lg object-cover"
                />
              )}

              {/* Description */}
              <p className="text-base leading-relaxed text-gray-700">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              {selectedProject.technologies?.length > 0 && (
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-800">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map(
                      (tech: string, index: number) => (
                        <span
                          key={index}
                          className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800"
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </div>
              )}

              {/* Visit Link */}
              {selectedProject.link && (
                <div className="pt-4 text-center">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-md bg-blue-600 px-6 py-2 text-white transition hover:bg-blue-700"
                  >
                    Visit Project
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default WorkSection;
