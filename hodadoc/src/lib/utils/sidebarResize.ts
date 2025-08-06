import styles from 'styles/css/sidebar.module.css';

export const sidebarResize = (value: string) => {
    const target = document.getElementById("sidebar") as HTMLElement;
    const isMobile: boolean = window.innerWidth < 420;
    let isResize_timeout: NodeJS.Timeout | undefined;

    if(target.className.includes(styles.active)) {
        if(isMobile) {
            if(value.includes("resize")) {
                if(isResize_timeout) {
                    clearTimeout(isResize_timeout);
                }

                target.style.setProperty("--transition", "none");

                isResize_timeout = setTimeout(() => {
                    target.style.setProperty("--transition", "max-width 0.5s");
                }, 20);
            }

            target.style.setProperty("--maxWidth", `${window.innerWidth}px`);
        } else if(!isMobile) {
            if(window.innerWidth < 770) {
                target.style.setProperty("--maxWidth", "420px");
            } else if(window.innerWidth >= 770) {
                target.style.setProperty("--maxWidth", "250px");
            }
        }

        target.style.height = `${window.innerHeight}px`;
    }
}