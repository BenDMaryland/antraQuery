class PQuery {
    constructor(selector) {
        // target the element
        if (
            (selector === window) |
            (selector === document)
        ) {
            this.elements = [selector];
        } else {
            this.elements =
                document.querySelectorAll(selector);
        }
    }
    html(innerhtml) {
        console.log('html is working');
        // change the innerHTML for the target element
        this.elements.forEach((item) => {
            item.innerHTML = innerhtml;
        });
        return this;
    }
    hide() {
        this.elements.forEach((item) => {
            item.preDispaly = item.style.display;
            item.style.display = 'none';
        });
        return this;
    }
    on(eventType, callback) {
        this.elements.forEach((item) => {
            item.addEventListener(
                eventType,
                callback
            );
        });
        return this;
    }
    show() {
        this.elements.forEach((item) => {
            item.style.display = item.preDispaly;
        });
        return this;
    }
    add(object) {
        this.elements.values((item) => {
            item.style.display = item.preDispaly;
        });

    }
    addClass(className) {
        typeof (className) === "string"
            ? this.elements.forEach(e => e.classList.add(className))
            : this.elements.forEach(e => { e.classList.add(...className) })
        return this
    }






}

const $$ = function (selector) {
    console.log('$$ is a function');
    return new PQuery(selector);
};

$$('button.continue').html(
    '<h1>Next Step...</h1>'
);

var hiddenBox = $$('#banner-message');
hiddenBox.hide();
$$('#button-container button').on(
    'click',
    function (event) {
        alert('Click');
        hiddenBox.show();
    }
);

const a = $$('button.continue')
    .html('change1')
    .on('click', () => {
        console.log('Chaining');
    });
const b = $$('#banner-message');
console.log('A', a);