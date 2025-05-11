import { ServiceSectionProps } from '@/src/sections/service/v1';
import { LuAppWindow } from 'react-icons/lu';
import { LuMegaphone } from 'react-icons/lu';
import { LuBrainCircuit } from 'react-icons/lu';

function Icon1() {
  return <LuAppWindow className="h-[1rem] w-[1rem] " />;
}

function Icon2() {
  return <LuMegaphone className="h-[1rem] w-[1rem] " />;
}

function Icon3() {
  return <LuBrainCircuit className="h-[1rem] w-[1rem] " />;
}

export const serviceSectionData: ServiceSectionProps = {
  sectionHeading: {
    subtitle: 'Our Services',
    title: 'What we provide for you',
  },
  showButton: true,
  services: [
    {
      icon: <Icon1 />,
      title: 'Websites',
      description:
        'Modern, responsive websites designed to reflect your brand, boost conversions, and deliver fast, intuitive, and SEO-optimized performance.',
      slug: '/services/single',
    },
    {
      icon: <Icon2 />,
      title: 'Digital Marketing',
      description:
        'End-to-end strategy, content creation, and cross-platform engagement tailored to your brand.',
      slug: '/services/single',
    },
    {
      icon: <Icon3 />,
      title: 'AI & LLM Solutions',
      description:
        'Intelligent solutions that automate processes, personalize experiences, and turn data into actionable insights.',
      slug: '/services/single',
    },
  ],
};
