// place files you want to import through the `$lib` alias in this folder.
export const intersection = (node, delay = 0) => {
    node.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
            node.classList.add('show');
        } else {
            node.classList.remove('show');
        }

        console.log(entry);

    }, {});


    observer.observe(node);

    return {
        destroy() {
            observer.disconnect();
        }
    };
};