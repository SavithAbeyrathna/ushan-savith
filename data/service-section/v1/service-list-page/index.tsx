import { ServiceSectionProps } from '@/src/sections/service/v1';
import { LuAppWindow } from 'react-icons/lu';
import { LuBrainCircuit } from 'react-icons/lu';
import { MdWeb } from 'react-icons/md';
import { FaAppStore } from 'react-icons/fa';
import { TbCloudCode } from 'react-icons/tb';
import { LuMegaphone } from 'react-icons/lu';
import { PiChartLine } from 'react-icons/pi';
import { SlSocialFacebook } from 'react-icons/sl';
import { FiCreditCard } from 'react-icons/fi';
import { LuDatabase } from 'react-icons/lu';
import { IoColorPaletteOutline } from 'react-icons/io5';
import { IoPrintOutline } from 'react-icons/io5';

function Icon1() {
  return (
    <LuAppWindow className="h-[1rem] w-[1rem] " />
    // <svg
    //   width="1em"
    //   height="1em"
    //   viewBox="0 0 65 65"
    //   fill="currentColor"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M8.12799 55.3735C4.85988 51.6963 3.05469 46.9477 3.05469 42.0281C3.05469 37.1086 4.85988 32.36 8.12799 28.6828L30.1671 4.81564C30.3453 4.62883 30.5597 4.48012 30.7971 4.37852C31.0345 4.27693 31.2901 4.22454 31.5483 4.22454C31.8065 4.22454 32.0621 4.27693 32.2995 4.37852C32.5369 4.48012 32.7513 4.62883 32.9296 4.81564C33.3079 5.19622 33.5202 5.71104 33.5202 6.24767C33.5202 6.7843 33.3079 7.29912 32.9296 7.6797L10.9717 31.5063C8.39045 34.4072 6.9644 38.1552 6.9644 42.0383C6.9644 45.9214 8.39045 49.6693 10.9717 52.5703C12.1762 53.9262 13.6542 55.0115 15.3085 55.7547C16.9628 56.4979 18.7558 56.8822 20.5694 56.8822C22.383 56.8822 24.176 56.4979 25.8303 55.7547C27.4846 55.0115 28.9626 53.9262 30.1671 52.5703L55.3342 25.2906C57.0706 23.3294 58.0291 20.8006 58.0291 18.1813C58.0291 15.5619 57.0706 13.0331 55.3342 11.0719C54.5243 10.1617 53.531 9.43329 52.4194 8.93449C51.3079 8.43568 50.1034 8.17781 48.885 8.17781C47.6667 8.17781 46.4622 8.43568 45.3506 8.93449C44.2391 9.43329 43.2457 10.1617 42.4358 11.0719L17.2686 38.311C16.7466 38.8983 16.3539 39.5887 16.116 40.3376C15.878 41.0864 15.8001 41.8769 15.8874 42.6578C15.9382 43.4043 16.1453 44.1318 16.4952 44.7931C16.8451 45.4544 17.3301 46.0349 17.9186 46.4969C18.8575 47.1458 20.0069 47.4164 21.1367 47.2544C22.2665 47.0925 23.2935 46.51 24.0124 45.6234L30.1061 39.0016C30.2844 38.8148 30.4987 38.6661 30.7362 38.5645C30.9736 38.4629 31.2291 38.4105 31.4874 38.4105C31.7456 38.4105 32.0012 38.4629 32.2386 38.5645C32.476 38.6661 32.6903 38.8148 32.8686 39.0016C33.2469 39.3822 33.4593 39.897 33.4593 40.4336C33.4593 40.9702 33.2469 41.4851 32.8686 41.8656L26.7749 48.4875C25.4214 50.0643 23.5285 51.0797 21.4663 51.3351C19.404 51.5906 17.3206 51.0677 15.6233 49.8688C14.5592 49.0441 13.684 48.001 13.0569 46.8097C12.4297 45.6184 12.065 44.3066 11.9874 42.9625C11.8503 41.6186 11.9965 40.2609 12.4163 38.9769C12.8361 37.6929 13.5203 36.5112 14.4249 35.5078L39.5921 8.22814C40.7619 6.92121 42.1942 5.87573 43.7955 5.15996C45.3968 4.44418 47.131 4.07422 48.885 4.07422C50.639 4.07422 52.3733 4.44418 53.9746 5.15996C55.5759 5.87573 57.0082 6.92121 58.178 8.22814C60.6109 10.9648 61.9547 14.4992 61.9547 18.1609C61.9547 21.8227 60.6109 25.3571 58.178 28.0938L33.0108 55.3735C31.4464 57.1261 29.5295 58.5284 27.3854 59.4886C25.2414 60.4488 22.9186 60.9451 20.5694 60.9451C18.2202 60.9451 15.8974 60.4488 13.7534 59.4886C11.6093 58.5284 9.69234 57.1261 8.12799 55.3735Z" />
    // </svg>
  );
}

function Icon2() {
  return <LuBrainCircuit className="h-[1rem] w-[1rem] " />;
}

function Icon3() {
  return <MdWeb className="h-[1rem] w-[1rem] " />;
}

function Icon4() {
  return <FaAppStore className="h-[1rem] w-[1rem] " />;
}

function Icon5() {
  return <TbCloudCode className="h-[1rem] w-[1rem] " />;
}

function Icon6() {
  return <LuMegaphone className="h-[1rem] w-[1rem] " />;
}

function Icon7() {
  return <SlSocialFacebook className="h-[1rem] w-[1rem] " />;
}

function Icon8() {
  return <PiChartLine className="h-[1rem] w-[1rem] " />;
}

function Icon9() {
  return <LuDatabase className="h-[1rem] w-[1rem] " />;
}

function Icon10() {
  return <FiCreditCard className="h-[1rem] w-[1rem] " />;
}

function Icon11() {
  return <IoColorPaletteOutline className="h-[1rem] w-[1rem] " />;
}

function Icon12() {
  return <IoPrintOutline className="h-[1rem] w-[1rem] " />;
}

export const serviceSectionData: ServiceSectionProps = {
  sectionHeading: {
    subtitle: '',
    title: '',
  },
  showButton: false,
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
      title: 'AI & LLM Solutions',
      description:
        'Intelligent solutions that automate processes, personalize experiences, and turn data into actionable insights.',
      slug: '/services/single',
    },
    {
      icon: <Icon3 />,
      title: 'POS Systems',
      description:
        ' A cloud-based, smart POS system tailored for cafes, restaurants, and retail, featuring inventory tracking, sales reporting, and multi-device support.',
      slug: '/services/single',
    },
    {
      icon: <Icon4 />,
      title: 'Mobile Apps',
      description:
        'Scalable, intuitive apps for iOS and Android that offer seamless user experiences and tangible business value.',
      slug: '/services/single',
    },
    {
      icon: <Icon5 />,
      title: 'Cloud-Based Solutions',
      description:
        'Empower businesses to migrate their infrastructure to the cloud, offering enhanced scalability, flexibility, and cost-efficiency, while ensuring robust information security.',
      slug: '/services/single',
    },
    {
      icon: <Icon6 />,
      title: 'Digital Marketing',
      description:
        'End-to-end strategy, content creation, and cross-platform engagement tailored to your brand.',
      slug: '/services/single',
    },
    {
      icon: <Icon7 />,
      title: 'Social Media Management',
      description:
        'Consistent posting, campaign execution, and growth-focused tactics to build your online presence.',
      slug: '/services/single',
    },
    {
      icon: <Icon8 />,
      title: 'Performance Advertising',
      description:
        'Targeted ad campaigns on Facebook, Google, and Instagram, optimized for measurable ROI.',
      slug: '/services/single',
    },
    {
      icon: <Icon9 />,
      title: 'Data-Driven Marketing',
      description:
        'Insights-led strategies that turn analytics into action and results.',
      slug: '/services/single',
    },
    {
      icon: <Icon10 />,
      title: 'Business Cards, Menus, Flyers',
      description: 'Custom-designed by our in-house designer.',
      slug: '/services/single',
    },
    {
      icon: <Icon11 />,
      title: 'Brand Identity Design',
      description: 'Logos, fonts, and color palettes that define your vibe.',
      slug: '/services/single',
    },
    {
      icon: <Icon12 />,
      title: 'Product Packaging & Print Materials',
      description: 'From stickers to storefront signs.',
      slug: '/services/single',
    },
  ],
};
