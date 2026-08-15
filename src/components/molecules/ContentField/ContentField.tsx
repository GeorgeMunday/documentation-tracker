import React from 'react';

type ContentFieldProps = {
  children: React.ReactNode;
};

const ContentField = ({ children }: ContentFieldProps) => {
  return (
    <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-4 border-x border-gray-200 bg-white px-3 py-4 sm:px-4 md:px-6 lg:px-8">
      {children}
    </div>
  );
};

export default ContentField;