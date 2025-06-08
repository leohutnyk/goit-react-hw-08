import css from "./PageTitle.module.css";
import PropTypes from "prop-types";
export default function PageTitle({ children }) {
  return <h1 className={css.heading}>{children}</h1>;
}
PageTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
