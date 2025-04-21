import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Container = ({ children, ...props }: ContainerProps) => {
  return (
    <div className={cn(props.className, "max-w-[1120px] px-[10px] mx-auto")}>
      {children}
    </div>
  );
};
