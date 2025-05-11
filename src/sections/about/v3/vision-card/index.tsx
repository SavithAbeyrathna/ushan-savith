import { cn } from '@/src/utils/shadcn';

export interface VisionCardProps {
  title: string;
  description: string;
}

export function VisionCard({ title, description }: VisionCardProps) {
  return (
    <article
      className={cn([
        // General
        'group/card bg-white text-accent-900 shadow-3 transition-transform duration-350 dark:bg-accent-700 dark:text-white dark:shadow-none',

        // Layout
        'relative z-1 block h-full space-y-6 overflow-hidden rounded-5 p-6 md:space-y-7 md:p-10',

        // Hover
        'hover:bg-gradient-to-t hover:from-primary/20 hover:from-10% hover:via-white/50 hover:via-80% hover:to-white/90 hover:duration-500 hover:[transform:translateY(-0.5rem)] dark:hover:via-accent-700/50 dark:hover:to-accent-700/80',
      ])}
    >
      <div>
        <h2 className="text-md font-bold leading-[1.25] md:text-lg">{title}</h2>
      </div>
      <p className="text-accent-800 dark:text-body">{description}</p>

      {/* Bottom line animation */}
      <span className="invisible absolute bottom-0 left-0 h-[2px] w-full scale-x-[30%] bg-primary opacity-0 transition-all duration-400 group-hover/card:visible group-hover/card:scale-x-100 group-hover/card:opacity-100"></span>
    </article>
  );
}
