import { type FC } from 'react';
import { type Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ErrorBoundary } from 'react-error-boundary';
import { FullPageError } from '@/components/ui/error';
import { ToastContainer, toast } from 'react-toastify';

type TAppContextProps = {
  children: React.ReactNode;
  session?: Session;
};

const AppContext: FC<TAppContextProps> = ({ children, session }) => {
  return (
    <ErrorBoundary FallbackComponent={FullPageError}>
      <ToastContainer
        position="bottom-right"
        autoClose={8000}
        closeButton={false}
        className="w-full max-w-md bg-transparent px-3"
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <SessionProvider session={session}>{children}</SessionProvider>
    </ErrorBoundary>
  );
};

export { AppContext };
