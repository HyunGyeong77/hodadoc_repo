export const animationObserver = (element: HTMLElement | HTMLElement[], styles: Record<string, string>) => {

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const target = entry.target as HTMLElement;
            target.classList.toggle(styles.active, entry.isIntersecting);
        });
    });

    if(Array.isArray(element)) {
        element.forEach((item) => {
            observer.observe(item);
        })
    } else {
        observer.observe(element);
    }

    return (() => {
        if(Array.isArray(element)) {
            element.forEach((item) => {
                observer.observe(item);
            })
        } else {
            observer.unobserve(element);
        }
    });
}