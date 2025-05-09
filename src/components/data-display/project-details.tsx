import Image from "next/image";
import { ProjectDetails as ProjectDetailsType } from "@/lib/types";
import Card from "@/components/layout/card";

type ProjectDetailsProps = ProjectDetailsType;

const ProjectDetails = ({ name, previewImage }: ProjectDetailsProps) => {
  return (
    <Card className="overflow-hidden rounded-xl  shadow-xl hover:shadow-2xl transition-all duration-500" data-aos="flip-left">
      <div className="relative">
        <Image
          src={previewImage}
          alt={`${name} preview`}
          className="w-full h-[220px] object-cover rounded-lg transition-transform duration-500 hover:scale-105"
        />
      </div>
    </Card>
  );
};

export default ProjectDetails;
