interface HeadingProps {
  badge?: string;
  title1: string;
  title2: string;
}

export default function Heading({ badge, title1, title2 }: HeadingProps) {
  return (
    <div className="mb-16">
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
  );
}