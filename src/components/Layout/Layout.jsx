import AppBar from "../AppBar/AppBar";
import css from "./Layout.module.css";
import PropTypes from "prop-types";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
