export const  scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    if (!target) return;

    const element = document.querySelector(target);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
}