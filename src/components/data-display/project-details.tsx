import Image, { StaticImageData } from 'next/image';

// Ensure the previewImage is handled correctly based on its type
const ProjectDetails = ({ name, description, previewImage, technologies, link }: Project) => {
  return (
    <div>
      {/* Use next/image for previewImage */}
      {typeof previewImage === 'string' ? (
        <Image
          src={previewImage}
          alt={name}
          className="max-h-80 w-full rounded-lg object-cover"
          width={500} // Example width
          height={300} // Example height
        />
      ) : (
        <Image
          src={previewImage as StaticImageData} // Ensure it's treated as StaticImageData if it's not a string
          alt={name}
          className="max-h-80 w-full rounded-lg object-cover"
          width={500}
          height={300}
        />
      )}
    </div>
  );
};
