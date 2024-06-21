document.addEventListener("DOMContentLoaded", () => {
  const links = [
    { rel: "stylesheet", href: "/Styles/reset.css", type: "text/css" },
    { rel: "stylesheet", href: "/Styles/styles.css", type: "text/css" },
    { rel: "stylesheet", href: "/Styles/breadCrumbs.css", type: "text/css" },
    { rel: "stylesheet", href: "/Styles/responsividade.css", type: "text/css" },
  ];

  links.forEach((link) => {
    const l = document.createElement("link");
    l.rel = link.rel;
    l.href = link.href;
    l.type = link.type
    document.head.appendChild(l);
  });
});