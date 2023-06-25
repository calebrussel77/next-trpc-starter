import { Camera } from 'lucide-react';
import NextImage from 'next/image';
import React, { type ComponentProps, forwardRef, useState } from 'react';

import { blurDataURL } from '@/utils/image';

import { ImageEmpty } from './image-empty';

const Image = forwardRef<
  HTMLImageElement | null,
  ComponentProps<typeof NextImage>
>(({ ...props }, ref) => {
  const [error, setError] = useState(false);
  const isEmpty = !!error;

  return (
    <>
      {!isEmpty && (
        <NextImage
          ref={ref}
          blurDataURL={blurDataURL()}
          fill
          placeholder="blur"
          onError={() => setError(true)}
          {...props}
        />
      )}

      {isEmpty && (
        <div className="m-auto flex justify-center items-center">
          <Camera className="h-10 w-10 flex-shrink-0 text-gray-400" />
        </div>
      )}
    </>
  );
});

export { ImageEmpty, Image };

Image.displayName = 'Image';
