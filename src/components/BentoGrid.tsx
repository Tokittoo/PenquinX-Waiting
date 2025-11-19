import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid w-full grid-cols-1 gap-5',
        'sm:grid-cols-2 lg:grid-cols-2',
        'auto-rows-[minmax(220px,_1fr)]',
        'transition-all duration-300 ease-in-out',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'group/bento relative flex h-full flex-col justify-between gap-4 overflow-hidden',
        'rounded-[28px] border border-white/15 bg-gradient-to-br from-[#07090f] via-[#050910] to-[#010204]',
        'px-6 py-8 text-left text-white shadow-[0_20px_70px_rgba(0,0,0,0.55)]',
        'transition-all duration-300 ease-in-out',
        'hover:-translate-y-1 hover:border-cyan-300/60',
        'before:pointer-events-none before:absolute before:inset-0 before:rounded-[28px] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-300',
        'hover:before:opacity-100',
        className,
      )}
    >
      <div className="relative z-10 transition duration-300 group-hover/bento:translate-x-1">
        {icon && (
          <div className='mb-4 text-cyan-300'>
            {icon}
          </div>
        )}
        <div className='my-2 text-2xl font-semibold'>
          {title}
        </div>
        <div className='text-sm text-white/70'>
          {description}
        </div>
      </div>
    </div>
  );
};
