export const  scrollToSection = (e: React.MouseEvent<HTMLAnchorElement|HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href') ||  e.currentTarget.dataset.pageTarget;
    if (!target) return;

    const element = document.querySelector(target);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth" });
}