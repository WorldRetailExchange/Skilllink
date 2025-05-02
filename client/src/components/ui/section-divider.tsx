import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionDividerProps = {
  type?: "wave" | "angle" | "curve" | "triangle" | "bubbles" | "clouds";
  position?: "top" | "bottom";
  className?: string;
  fillClassName?: string;
  height?: "sm" | "md" | "lg";
  animated?: boolean;
};

export function SectionDivider({
  type = "wave",
  position = "bottom",
  className,
  fillClassName,
  height = "md",
  animated = true,
}: SectionDividerProps) {
  const isTop = position === "top";
  
  const getSvgPath = () => {
    switch (type) {
      case "wave":
        return isTop
          ? "M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,48C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          : "M0,64L48,64C96,64,192,64,288,69.3C384,75,480,85,576,80C672,75,768,53,864,48C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
      case "angle":
        return isTop
          ? "M0,160L1440,0L1440,0L0,0Z"
          : "M0,0L1440,160L1440,320L0,320Z";
      case "curve":
        return isTop
          ? "M0,96L1440,0L1440,0L0,0Z"
          : "M0,224L1440,128L1440,320L0,320Z";
      case "triangle":
        return isTop
          ? "M720,0L1440,320L0,320Z"
          : "M720,320L0,0L1440,0Z";
      case "bubbles":
        return isTop
          ? "M0,32C320,32,640,32,960,32C1280,32,1440,32,1440,32L1440,0L0,0Z"
          : "M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,272C960,277,1056,267,1152,245.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
      case "clouds":
        return isTop
          ? "M0,192L80,176C160,160,320,128,480,128C640,128,800,160,960,165.3C1120,171,1280,149,1360,138.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          : "M0,128L80,144C160,160,320,192,480,192C640,192,800,160,960,154.7C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z";
      default:
        return isTop
          ? "M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,48C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          : "M0,64L48,64C96,64,192,64,288,69.3C384,75,480,85,576,80C672,75,768,53,864,48C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
    }
  };

  const heightClass = {
    sm: "h-12 md:h-16",
    md: "h-16 md:h-24",
    lg: "h-24 md:h-32",
  }[height];

  return (
    <div
      className={cn(
        "absolute left-0 w-full overflow-hidden leading-0 z-10",
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
    >
      <svg
        data-name="Section Divider"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className={cn("w-full transition-all", heightClass)}
      >
        <motion.path
          initial={animated ? { opacity: 0, pathLength: 0 } : { opacity: 1 }}
          whileInView={animated ? { opacity: 1, pathLength: 1 } : { opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          fill={fillClassName ? "none" : "currentColor"}
          className={cn("opacity-100", fillClassName)}
          stroke={fillClassName ? "currentColor" : "none"}
          strokeWidth={fillClassName ? "3" : "0"}
          d={getSvgPath()}
        />
      </svg>
    </div>
  );
}