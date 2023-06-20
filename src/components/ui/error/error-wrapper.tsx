/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { CenterContent } from '../layout';
import { SectionError } from './section-error';

const ErrorWrapper = ({ children }: { children: ReactNode }) => {
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
