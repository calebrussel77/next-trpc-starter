/* eslint-disable no-undef */
import React, { type ReactNode } from 'react';

export const wrapChildren = (
  children?: string | JSX.Element,
  className?: string
): ReactNode =>
  React.Children.toArray(children).map(child =>
    ['number', 'string'].includes(typeof child) ? (
      <span key={child as string | number} className={className}>
        {child}
      </span>
    ) : (
      child
    )
  );
