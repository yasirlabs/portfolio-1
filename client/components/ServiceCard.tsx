import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  points: string[];
  index: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  points,
  index,
}: ServiceCardProps) {
  return (
    <div
      className="group bg-card border border-border rounded-xl p-6 md:p-8 hover:border-primary smooth-transition hover:shadow-lg hover:shadow-primary/20 animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 smooth-transition">
        <Icon className="text-primary h-7 w-7" />
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">{title}</h3>

      <p className="text-muted-foreground text-sm md:text-base mb-5 leading-relaxed">
        {description}
      </p>

      <ul className="space-y-2">
        {points.map((point, i) => (
          <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
            <span className="text-primary mt-1 flex-shrink-0">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
