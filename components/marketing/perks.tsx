import { PERKS } from "@/constants";
import { cn } from "@/functions";
import { LucideIcon } from "lucide-react";
import Container from "../global/container";
import { SectionBadge } from "../ui/section-bade";

const Perks = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-12 md:py-16 lg:py-24">
      <Container>
        <div className="flex flex-col items-center max-w-2xl mx-auto text-center">
          <SectionBadge title="Perks" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Discover the Features
          </h2>
          <p className="mt-6 text-base text-center md:text-lg text-accent-foreground/80">
            Explore the powerful features and advantages that we offer to help
            you optimize your User Experience
          </p>
        </div>
      </Container>
      <Container>
        <div className="w-full mt-16">
          <div className="relative grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {PERKS.map((perk, index) => (
              <Perk key={index} index={index} {...perk} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const Perk = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r transform-gpu py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l",
        index < 3 && "lg:border-b"
      )}
    >
      {index < 3 && (
        <div className="absolute inset-0 w-full h-full transition duration-200 opacity-0 pointer-events-none group-hover/feature:opacity-100 bg-gradient-to-t from-neutral-80 from-violet-950/25 to-transparent" />
      )}
      {index >= 3 && (
        <div className="absolute inset-0 w-full h-full transition duration-200 opacity-0 pointer-events-none group-hover/feature:opacity-100 bg-gradient-to-b from-neutral-80 from-violet-950/25 to-transparent" />
      )}
      <div className="flex flex-col w-full transition-all duration-300 group-hover/feature:-translate-y-1 transform-gpu">
        <div className="relative z-10 px-10 mb-4">
          <Icon
            strokeWidth={1.3}
            className="w-10 h-10 transition-all duration-300 ease-in-out origin-left transform-gpu text-neutral-500 group-hover/feature:scale-75 group-hover/feature:text-foreground"
          />
        </div>
        <div className="relative z-10 px-10 mb-2 text-lg font-medium font-heading">
          <div className="absolute left-0 w-1 h-6 transition-all duration-500 origin-center rounded-tr-full rounded-br-full -inset-y-0 group-hover/feature:h-8 bg-neutral-700 group-hover/feature:bg-violet-600" />
          <span className="inline-block transition duration-500 group-hover/feature:-translate-y- group-hover/feature:text- heading">
            {title}
          </span>
        </div>
        <p className="relative z-10 max-w-xs px-10 text-sm text-neutral-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Perks;
