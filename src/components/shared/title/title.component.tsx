import "./title.styles.css";

interface ITitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Title: React.FC<ITitleProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h2 {...props} className={`title ${className}`}>
      <span className="h-6 w-1 rounded-full bg-primary-600" />
      {children}
    </h2>
  );
};
