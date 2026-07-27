interface SectionHeaderProps {
  badge?: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-3xl ${
        align === "center" ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <span className="inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>

      <p className="mt-4 text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}