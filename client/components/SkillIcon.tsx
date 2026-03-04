interface SkillIconProps {
  icon: string;
  label: string;
  index: number;
}

export default function SkillIcon({ icon, label, index }: SkillIconProps) {
  return (
    <div
      className="flex flex-col items-center gap-3 group animate-fadeInUp"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="w-16 h-16 md:w-20 md:h-20 bg-card border border-border rounded-full flex items-center justify-center text-primary text-2xl md:text-3xl hover:border-primary hover:shadow-lg hover:shadow-primary/20 smooth-transition hover:scale-110">
        {icon}
      </div>
      <p className="text-sm text-muted-foreground text-center group-hover:text-primary smooth-transition">
        {label}
      </p>
    </div>
  );
}
