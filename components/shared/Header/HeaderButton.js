const HeaderButton = ({ title, onClick }) => {
  return (
    <span className="nav-link port-navbar-link clickable" onClick={onClick}>
      {title}
    </span>
  );
};

export default HeaderButton;
