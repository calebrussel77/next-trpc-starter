import { type ImageProps as NextImageProps } from 'next/dist/client/image';
import NextImage from 'next/image';
import React, { forwardRef, useState } from 'react';
import { Camera } from 'lucide-react';
import { cn } from '@/lib/utils';
import { blurDataURL } from '@/utils/image';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
const DEFAULT_FONT_SIZE = 16;
const toRem = (px: number) => `${px / DEFAULT_FONT_SIZE}rem`;

/**
 * USAGE OF THE COMPONENT
 *
 * <Image name={title} src={cover} h={120} w="100%" />
 *
 */
export interface ImageOptions {
  //The name of the image also use for alt prop
  alt: string;

  //The size of the image already predefine
  size?: Size;

  //The image url
  src: string;

  //The fontSize of the error text message
  fontSize?: number;

  //The shape
  shape?: 'rounded' | 'circle' | 'square';

  //The position of the image display
  position?: 'top' | 'center' | 'bottom';
}

export type ImageProps = NextImageProps & ImageOptions;

export const Image = forwardRef<HTMLDivElement, ImageProps>(
  (
    {
      fontSize,
      alt,
      shape = 'square',
      size = 'md',
      position = 'center',
      src,
      className,
      ...rest
    },
    ref
  ) => {
    const sizes = {
      xs: toRem(30),
      sm: toRem(40),
      md: toRem(50),
      lg: toRem(60),
      xl: toRem(70),
      xxl: toRem(80),
    };

    const imageSize = sizes[size];
    const imageFontSize = fontSize || `calc(${imageSize} / 2.5)`;
    const [error, setError] = useState(false);
    const imageSrc = src;
    const isEmpty = error || !src;

    const classes = cn(
      'absolute inset-0 object-cover',
      position === 'top'
        ? 'object-top'
        : position === 'center'
        ? 'object-center'
        : 'object-bottom',
      className
    );
    return (
      <div
        aria-label={alt}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: '0',
          fontSize: imageFontSize,
          fontWeight: 'bold',
          borderRadius:
            shape === 'circle'
              ? '9999px'
              : shape === 'square'
              ? '0px'
              : '0.375rem',
        }}
        ref={ref}
        role="img"
        className={cn(
          className,
          `flex overflow-hidden`,
          isEmpty && 'bg-gray-100'
        )}
        {...rest}
      >
        {!isEmpty && (
          <NextImage
            alt={alt}
            src={imageSrc}
            blurDataURL={blurDataURL()}
            fill
            style={{
              borderRadius:
                shape === 'circle'
                  ? '9999px'
                  : shape === 'square'
                  ? '0px'
                  : '0.375rem',
            }}
            placeholder="blur"
            onError={() => setError(true)}
            className={classes}
          />
        )}

        {isEmpty && (
          <Camera className=" m-auto h-10 w-10 flex-shrink-0 text-gray-400" />
        )}
      </div>
    );
  }
);

Image.displayName = 'Image';
