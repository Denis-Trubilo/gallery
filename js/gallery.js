const gallery = function () {
    let elems = document.querySelectorAll('[data-gallery]');

    if (!elems || elems.length == 0) return;

    elems = Array.from(elems);


    const create = function (content) {
        let elem = document.querySelector('.gallery__content');
        if (elem) elem.remove();

        let elemContent = document.createElement('div');
        elemContent.classList.add('gallery__content');
        elemContent.innerHTML = content;

        if (!elemContent) return;

        let elemClose = document.createElement('button');
        elemClose.classList.add('gallery__preview_close');
        elemClose.innerHTML = 'Х';

        document.body.append(elemContent);
        elemContent.append(elemClose);

        elemClose.addEventListener('click', close);

        return elemOverlay;
    }

    const close = function (event) {
        if (!event.target.classList.contains('gallery__preview_close') &&
            !event.target.classList.contains('gallery__content')) return

        let elem = document.querySelector('.gallery__content');
        if (elem) elem.remove();
    }

    const show = function (event) {
        event.preventDefault(); //отменяет дейст браузера по умолчанию

        let elem = event.target;

        let dataset = elem.dataset.gallery;

        if (!dataset) {
            const parent = elem.closest('[data-gallery]'); //ищет наружу 

            if (!parent) return;

            elem = parent;
            dataset = parent.dataset.gallery;
        }

        let href = elem.href;
        if (!href) return;

        let content = `<img src='${href}' alt='#'>`;

        if (!content) return;

        let galleryElem = create(content);

        if (!galleryElem) return;

        document.body.append(galleryElem);

    }

    elems.forEach(function (elem) {
        elem.addEventListener('click', show);
    })
};

