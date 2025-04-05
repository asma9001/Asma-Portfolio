'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button className="bg-gradient-to-r from-[#DA7C25] to-[#B923E1] px-6 py-3 text-white border border-transparent hover:border-white transition-all duration-300"  onClick={() => window?.open('/files/asma-cv.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
