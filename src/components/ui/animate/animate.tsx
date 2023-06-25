import autoAnimate from '@formkit/auto-animate';
import { type ComponentProps, forwardRef, useEffect, useRef } from 'react';

import { useMergeRefs } from '@/hooks/use-merge-refs';

const Animate = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ children, className }, ref) => {
    const parent = useRef(null);
    const refs = useMergeRefs(parent, ref);

    useEffect(() => {
      parent.current && autoAnimate(parent.current);
    }, [parent]);

    return (
      <div ref={refs} className={className}>
        {children}
      </div>
    );
  }
);

Animate.displayName = 'Animate';

export { Animate };
