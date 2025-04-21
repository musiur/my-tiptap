import { cn } from "@/lib/utils";

interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.PropsWithChildren {
  children: React.ReactNode;
}

export const Grid = ({ children, ...props }: FlexProps) => {
  return (
    <div {...props} className={cn(props.className, "grid gap-4")}>
      {children}
    </div>
  );
};
