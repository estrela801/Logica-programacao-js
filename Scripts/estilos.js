const links = [
  { rel: "stylesheet", href: "/Styles/reset.css" },
  { rel: "stylesheet", href: "/Styles/styles.css" },
  { rel: "stylesheet", href: "/Styles/breadCrumbs.css" },
  { rel: "stylesheet", href: "/Styles/responsividade.css" },
];

links.forEach(link => {
    const l = document.createElement('link');
    l.rel = link.rel;
    l.href = link.href;
    document.head.appendChild(l)
})