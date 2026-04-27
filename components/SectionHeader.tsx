interface SectionHeaderProps {
  badge?: string;
  title1: string;
  title2: string;
  description?: string;
}

export default function SectionHeader({ badge, title1, title2, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
      <div>
        {badge && (
          <div className="badge mb-5">
            <span className="dot" /> {badge}
          </div>
        )}
        <h2 className="font-display text-5xl lg:text-7xl text-cream leading-none uppercase">
          {title1}
          <br />
          <span className="text-[#00C853]">{title2}</span>
        </h2>
      </div>
      {description && (
        <p className="text-[#888] font-body max-w-sm leading-relaxed text-sm lg:text-base">
          {description}
        </p>
      )}
    </div>
  );
}