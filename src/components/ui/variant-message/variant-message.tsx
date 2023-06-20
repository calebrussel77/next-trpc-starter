import { type VariantProps, cva } from 'class-variance-authority';
import React, { forwardRef } from 'react';

import { VARIANTS_COLORS, type Variant } from '@/utils/variants';

import { cn } from '@/lib/utils';

const variantMessageToken = cva([''], {
  variants: {
    size: {
      sm: ['text-xs'],
      md: ['text-sm'],
      lg: ['text-lg'],
      xl: ['text-xl'],
    },
  },
  compoundVariants: [{ size: 'md' }],
  defaultVariants: {
    size: 'md',
  },
});

export type VariantMessageGlobalProps = VariantProps<
  typeof variantMessageToken
> &
  React.HTMLProps<HTMLDivElement> & { variant?: Variant };

export const VariantMessage = forwardRef<
  HTMLDivElement,
  VariantMessageGlobalProps
>(({ children, className, variant, size, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role={variant === 'danger' ? 'alert' : undefined}
      className={variantMessageToken({
        size,
        class: cn(className, VARIANTS_COLORS[variant as Variant]),
      })}
      {...props}
    >
      {children}
    </div>
  );
});

VariantMessage.displayName = 'VariantMessage';
