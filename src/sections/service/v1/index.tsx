import { Container } from '@/src/components/container';
import { getStaggeredDelay } from '@/src/utils/set-staggered-delay';
import { cn } from '@/src/utils/shadcn';
import { ClassValue } from 'clsx';
import { ServiceCard, ServiceProps } from 'src/components/cards/service/v1';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { SectionHeading } from '@/src/components/section-heading';
import { Button } from '@/src/components/button';
import { CustomLink } from '@/src/components/custom-link';
import { FaArrowRight } from 'react-icons/fa6';

export interface ServiceSectionProps {
  sectionHeading: Pick<SectionHeadingWithoutStylingProps, 'subtitle' | 'title'>;
  services: ServiceProps[];
  className?: ClassValue;
  showButton?: boolean;
}

export function ServiceSection({
  sectionHeading,
  services,
  className,
  showButton = true,
}: ServiceSectionProps) {
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
        {services && services.length > 0 && (
          <div className="-mx-4 flex flex-wrap justify-center gap-y-30px">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={getStaggeredDelay([200, 400, 600], index)}
                className="w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3"
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        )}
      </Container>

      {/* Navigation Button */}
      {showButton && (
        <div
          className="mt-6 flex justify-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <Button
            asChild
            className={cn('!min-h-[56px] rounded-full')}
            disabled={false}
          >
            <CustomLink href="/services" openNewTab={false}>
              <span className="relative z-1">{'Explore All Services'}</span>
              <span className="relative z-1 ml-2">
                <FaArrowRight />
              </span>
            </CustomLink>
          </Button>
        </div>
      )}
    </section>
  );
}
