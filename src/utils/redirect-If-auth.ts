import { getServerAuthSession } from '@/server/auth';
import { type Session } from 'next-auth';

type TRedirectIfAuthProps = {
  ctx: never;
  redirectUrl?: string;
  cb?: ({ session }: { session: Session }) => unknown;
};

export const redirectIfAuth = async ({
  ctx,
  redirectUrl = '/dashboard',
  cb,
}: TRedirectIfAuthProps) => {
  const session = await getServerAuthSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: redirectUrl,
        permanent: false,
      },
    };
  }

  return cb ? cb({ session: session as unknown as Session }) : undefined;
};
