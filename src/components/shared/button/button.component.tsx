import "./button.styles.css";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: () => JSX.Element;
}

export const Button: React.FC<IButtonProps> = ({
  className,
  icon,
  children,
  ...props
}) => {
  return (
    <button {...props} className={`button ${className}`}>
      {children}
      {icon && <div className="*:size-4">{icon()}</div>}
    </button>
  );
};
