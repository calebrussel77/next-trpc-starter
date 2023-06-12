/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ErrorBoundary } from 'react-error-boundary';


import { SectionError } from '../section-error/section-error';
import { CenterContent } from '../../layout';
import { type ReactNode } from 'react';

const ErrorWrapper = ({ children }: {children: ReactNode}) => {
  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => (
        <CenterContent>
          <SectionError error={error} />
        </CenterContent>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export { ErrorWrapper };
