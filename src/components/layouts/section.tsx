import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Section = ({ children, ...props }: SectionProps) => {
  return (
    <section {...props} className={cn(props.className, "py-16 md:py-24")}>
      {children}
    </section>
  );
};
