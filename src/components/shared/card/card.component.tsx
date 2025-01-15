import "./card.styles.css";

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<ICardProps> = ({
  children,
  className,
  ...props
}) => (
  <div {...props} className={`card ${className}`}>
    {children}
  </div>
);
