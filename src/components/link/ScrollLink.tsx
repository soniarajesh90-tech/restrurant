type ScrollLinkProps = {
  to: string;
  name: string;
  className?: string;
  icon?: React.ReactNode;
};

const ScrollLink = ({ to, name, className, icon }: ScrollLinkProps) => {
  return (
    <a href={`#${to}`} className={className}>
      {name}
      {icon && icon}
    </a>
  );
};

export default ScrollLink;