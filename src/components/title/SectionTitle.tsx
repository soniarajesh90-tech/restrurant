


import './SectionTitle.css';

interface SectionTitleProps {
    subtitle: string;
    title: string;
}

const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {

    return(

        <div className="section-header">
            <span className="section-subtitle">{subtitle}</span>
        <h2 className="section-title">{title}</h2>
        </div>
    )
}
export default SectionTitle;