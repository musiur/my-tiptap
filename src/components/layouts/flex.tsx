import { cn } from "@/lib/utils";

interface FlexProps
  extends React.HTMLAttributes<HTMLDivElement>,
    React.PropsWithChildren {
  children: React.ReactNode;
}

export const Flex = ({ children, ...props }: FlexProps) => {
  return (
    <div {...props} className={cn(props.className, "flex gap-4")}>
      {children}
    </div>
  );
};
