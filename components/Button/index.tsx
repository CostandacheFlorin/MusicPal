interface Buttonprops {
  text: string;
  className?: string;
  //   onClick: () => void;
}

const Button: React.FC<Buttonprops> = ({
  text,
  className = "p-4 bg-primary",
  //   onClick,
}) => {
  return <button className={className}>{text}</button>;
};

export default Button;
