import Header from "@/components/shared/Header/index";

const BaseLayout = ({ className, children, user, loading }) => {
  return (
    <div className="layout-container">
      <Header user={user} loading={loading} />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
