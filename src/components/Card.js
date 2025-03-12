import React from 'react';
import Link from 'next/link';

const Card = ({ icon, title, paragraph, contact, link }) => {
  const renderParagraph = () => {


    return <p className="mt-2 text-gray-500 text-center">{paragraph}</p>;
  };

  return (
    <div className="card-container relative w-full h-[360px]" dir="rtl">
      <div className={`card relative w-full h-full ${!contact ? 'hover:flip-card' : ''}`}>
        
        {/* Front side */}
        <div className="front absolute inset-0 flex flex-col items-center justify-center p-10 bg-white border border-gray-200 rounded-xl shadow-lg">
          <div className="mb-4 p-7 rounded-xl bg-primary">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-primary text-center">
            {title}
          </h3>
          {renderParagraph()}
        </div>

        {/* Back side (only if "contact" is false) */}
        {!contact && (
          <div className="back absolute inset-0 flex flex-col items-center justify-center p-10 bg-white border border-gray-200 rounded-xl shadow-lg backface-hidden transform rotate-y-180">
            <h3 className="text-xl font-semibold text-dark text-center">{title}</h3>
            <p className="mt-2 text-gray-500 text-center">{paragraph}</p>
              <button className="mt-4 p-4 bg-primary text-white rounded">
                مشاهدة
              </button>
           
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
