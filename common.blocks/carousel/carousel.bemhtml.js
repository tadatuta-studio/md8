block('carousel')(
    js()(true),
    tag()('ul'),
    content()(function() {
        return {
            elem: 'inner',
            content: applyNext()
        };
    }),

    elem('item').tag()('li')
);
