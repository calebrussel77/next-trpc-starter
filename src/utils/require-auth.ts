import { type Session } from 'next-auth';

import { getServerAuthSession } from '@/server/auth';

type TRequireAuthProps = {
  ctx: never;
  redirectUrl?: string;
  cb?: ({ session }: { session: Session }) => unknown;
  allowedRoles?: Array<string>;
};

export const requireAuth = async ({
  ctx,
  redirectUrl = '/login',
  cb,
  allowedRoles = ['ADMIN', 'SUPER_ADMIN'],
}: TRequireAuthProps) => {
  const session = await getServerAuthSession(ctx);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const redirect_url = (ctx as any).resolvedUrl as string;
  const destination = `${redirectUrl}?source=${redirect_url}`;

  if (!session) {
    return {
      redirect: {
        destination: destination,
        permanent: false,
      },
    };
  }

  // if (!allowedRoles?.includes(session?.user?.role)) {
  //   return {
  //     redirect: {
  //       destination: `/`,
  //       permanent: false,
  //     },
  //   };
  // }

  return cb ? cb({ session: session as unknown as Session }) : undefined;
};
