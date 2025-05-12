
import React from 'react';

interface GalleryModalProps {
  event: {
    title: string;
    gallery: string[];
  } | null;
  currentImage: number;
  onClose: () => void;
  onPrevImage: () => void;
  onNextImage: () => void;
  onSelectImage: (index: number) => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({
  event,
  currentImage,
  onClose,
  onPrevImage,
  onNextImage,
  onSelectImage
}) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
      <div className="max-w-6xl w-full mx-auto bg-white rounded-lg overflow-hidden">
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="text-xl font-bold">{event.title} - Gallery</h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close gallery"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="relative">
          <div className="h-[60vh] flex items-center justify-center bg-black">
            <img 
              src={event.gallery[currentImage]} 
              alt={`${event.title} gallery image ${currentImage + 1}`} 
              className="max-h-full max-w-full"
            />
          </div>
          
          {/* Navigation buttons */}
          <button 
            onClick={onPrevImage} 
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={onNextImage} 
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Thumbnails */}
        <div className="p-4 flex gap-2 overflow-x-auto">
          {event.gallery.map((img, idx) => (
            <div 
              key={idx}
              className={`w-20 h-20 flex-shrink-0 cursor-pointer ${currentImage === idx ? 'ring-2 ring-brand-purple' : ''}`}
              onClick={() => onSelectImage(idx)}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryModal;
