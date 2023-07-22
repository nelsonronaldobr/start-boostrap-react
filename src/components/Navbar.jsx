import PropTypes from 'prop-types';

export const Navbar = ({ links }) => {
  return (
    <nav>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.title}</a>
          </li>
        ))}
        {children}
      </ul>
    </nav>
  );
};

Navbar.prototype