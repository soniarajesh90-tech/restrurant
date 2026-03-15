import { ReactNode } from "react";

type Props = {
  subtitle: ReactNode;
  title: ReactNode;
};

const SectionTitle = ({ subtitle, title }: Props) => {
  return (
    <div className="section-title">
      <span>{subtitle}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;