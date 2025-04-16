import { CustomLink } from '@/src/components/custom-link';
import Image from 'next/image';

import logoLight from 'public/assets/images/brand/l.png';
import logoDark from 'public/assets/images/brand/d.png';

export function BrandLogo() {
  return (
    <CustomLink href="/" className="inline-block">
      <Image
        className="w-20 logo-light h-15 dark:hidden"
        src={logoLight.src}
        width={logoLight.width}
        height={logoLight.height}
        placeholder="blur"
        blurDataURL={logoLight.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      />
      <Image
        className="hidden w-20 h-auto logo-dark dark:block"
        src={logoDark.src}
        width={logoDark.width}
        height={logoDark.height}
        placeholder="blur"
        blurDataURL={logoDark.blurDataURL}
        alt={`${process.env.NEXT_PUBLIC_SITE_NAME} brand logo`}
        sizes="100vw"
        priority
      />
    </CustomLink>
  );
}
