import { LogoSlider } from './image-slider/index'; // Import the new component
import { ClientSectionData } from '@/data/client-section/index';

export interface ClientSectionProps {
  logos?: string[];
  logoAltTexts?: string[];
}

export function ClientSection() {
  const { logos, logoAltTexts } = ClientSectionData;

  return (
    <section className="section-padding-primary overflow-hidden !pt-0">
      {/* Logo Slider Section */}
      {logos && logos.length > 0 && (
        <div className="whitespace-nowrap border-none dark:border-opacity-30">
          <div className="inline-flex w-full flex-nowrap gap-8 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] lg:gap-[38px]">
            <LogoSlider
              logos={[...logos, ...logos, ...logos, ...logos]} // Duplicate logos for infinite scroll effect
              altTexts={
                logoAltTexts ? [...logoAltTexts, ...logoAltTexts] : [] // Duplicate alt texts if provided
              }
            />
          </div>
        </div>
      )}
    </section>
  );
}
