import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionDividerProps = {
  type?: "wave" | "angle" | "curve" | "triangle";
  position?: "top" | "bottom";
  className?: string;
  fillClassName?: string;
};

export function SectionDivider({
  type = "wave",
  position = "bottom",
  className,
  fillClassName,
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
      default:
        return isTop
          ? "M0,32L48,37.3C96,43,192,53,288,53.3C384,53,480,43,576,48C672,53,768,75,864,80C960,85,1056,75,1152,64C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          : "M0,64L48,64C96,64,192,64,288,69.3C384,75,480,85,576,80C672,75,768,53,864,48C960,43,1056,53,1152,69.3C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";
    }
  };

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
        className="w-full h-16 md:h-24 transition-all"
      >
        <motion.path
          initial={{ opacity: 0, pathLength: 0 }}
          whileInView={{ opacity: 1, pathLength: 1 }}
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