export const Navbar = ({ children, links }) => {
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
