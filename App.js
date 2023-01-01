const heading = React.createElement(
    "h1",
    { id: "PageHeading", key: "heading1", style: { color: "green" } },
    "Welcome Everyone to Namaste React Session"
  );
  const heading2 = React.createElement(
    "h2",
    { id: "heading2", key: "heading2" },
    "heading 2"
  );

  const container = React.createElement("div", { id: "container" }, [
    heading,
    heading2,
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(container);