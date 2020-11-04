import Header from "../shared/Header";

export default function ({ props }) {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
}
