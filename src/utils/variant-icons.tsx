import React, { forwardRef, useMemo } from 'react';
import { CheckCircle2 , Info, XCircle, AlertTriangle} from 'lucide-react';

import {  VARIANTS_COLORS,type Variant as  VariantFromUtils } from './variants';
import { cn } from '@/lib/utils';

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Variant = VariantFromUtils | 'danger';

const styles = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-7 w-7',
  xl: 'h-8 w-8',
  xxl: 'h-9 w-9',
};

export interface VariantIconOptions {
  icon?: JSX.Element;
  size?: Size;
  variant?: Variant;
}

export type VariantIconProps = React.HTMLAttributes<HTMLElement> &
  VariantIconOptions;

export const VariantIcon = forwardRef<HTMLElement, VariantIconProps>(
  ({ icon, size = 'md', variant, className, ...rest }, ref) => {
    const Icon = useMemo(() => {
      if (icon === null) return null;
      if (icon) return icon;

      // if (variant === 'system') return <PictoKlimansBlueIcon />;
      if (variant === 'success') return <CheckCircle2 />;
      if (variant === 'info') return <Info />;
      if (variant === 'warning') return <AlertTriangle />;
      if (variant === 'danger') return <XCircle />;
    }, [icon, variant]);

    return Icon
      ? React.cloneElement(Icon, {
        ref,
          ...rest,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
          className: cn(styles[size], VARIANTS_COLORS[variant!], className),
        })
      : null;
  }
);

VariantIcon.displayName = 'VariantIcon';
