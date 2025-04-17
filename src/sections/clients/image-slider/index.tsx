import Image from 'next/image';

interface LogoSliderProps {
  logos: string[];
  altTexts?: string[];
  className?: string;
}

export function LogoSlider({ logos, altTexts, className }: LogoSliderProps) {
  if (logos?.length) {
    return (
      <div
        className={`flex animate-infinite-scroll items-center justify-center gap-8 md:justify-start lg:gap-[88px] ${className || ''}`}
      >
        {logos.map((logo, index) => (
          <div
            className="flex items-center justify-end gap-8 lg:gap-[38px]"
            key={index}
          >
            <div className="relative h-24 w-24">
              <Image
                src={logo}
                alt={altTexts?.[index] || `logo-${index}`}
                fill
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
  return null;
}
