import PropTypes from 'prop-types';
import css from "./Section.module.css"

export default function Section({ title, children }) {
 return (
   <section className={css.feedbackSection}>
     <h2 className={css.feedbackSectionTitle}>{title}</h2>
     <div className={css.feedbackSectionWrapper}>
       {children}
     </div>
    </section>
);
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
