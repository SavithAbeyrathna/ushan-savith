import { Container } from '@/src/components/container';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import { ClassValue } from 'clsx';
import {
  VisionCard,
  VisionCardProps,
} from '@/src/sections/about/v3/vision-card/index';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';

export interface VisionCardSectionProps {
  sectionHeading: Pick<SectionHeadingWithoutStylingProps, 'subtitle' | 'title'>;
  cards: VisionCardProps[];
  className?: ClassValue;
}

export function VisionCardSection({
  sectionHeading,
  cards,
  className,
}: VisionCardSectionProps) {
  return (
    <section className={cn('section-padding-primary', className)}>
      <div className="mx-auto max-w-[630px]">
        <div data-aos="fade-up" data-aos-delay="100">
          <SectionHeading
            {...sectionHeading}
            alignment="center"
            hasBottomSpacing
          />
        </div>
      </div>
      <Container>
        {cards && cards.length > 0 && (
          <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
            {cards.map((card, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/2"
              >
                <VisionCard {...card} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
