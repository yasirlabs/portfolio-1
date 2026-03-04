import { ExternalLink } from "lucide-react";

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  link?: string;
  index: number;
}

export default function PortfolioItem({
  image,
  title,
  category,
  link,
  index,
}: PortfolioItemProps) {
  return (
    <div
      className="group relative overflow-hidden rounded-xl animate-fadeInUp"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-64 object-cover group-hover:scale-110 smooth-transition"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 smooth-transition flex flex-col items-center justify-center p-6">
        <h3 className="text-white text-lg md:text-xl font-semibold text-center mb-2">
          {title}
        </h3>
        <p className="text-primary text-sm mb-4">{category}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90 smooth-transition"
          >
            View Project <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 text-white group-hover:hidden">
        <h3 className="font-semibold text-sm md:text-base">{title}</h3>
        <p className="text-primary text-xs md:text-sm">{category}</p>
      </div>
    </div>
  );
}
