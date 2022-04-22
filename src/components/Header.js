import PropTypes from 'prop-types';

export const Header = ({ text, children }) => {
  return (
    <header>
      <h1>{text}</h1>
      <p>{children}</p>
    </header>
  );
};

Header.defaultProps = {
  text: 'Header',
};

Header.propTypes = {
  text: PropTypes.string,
};
