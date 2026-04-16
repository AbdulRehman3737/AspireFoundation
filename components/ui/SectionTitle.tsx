interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  centered = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      {eyebrow && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-widest mb-4 ${
          light ? "text-[#F2D7B6]" : "text-[#246B73]"
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif mb-4 ${
        light ? "text-[#FAF7F2]" : "text-[#FAF7F2]"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
          light ? "text-[#F2D7B6]/80" : "text-[#B8B5AF]"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
