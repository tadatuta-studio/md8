block('section')(
    content()(function() {
        return {
            elem: 'inner',
            mix: { block: 'clearfix' },
            content: applyNext()
        };
    }),
    elem('row').mix()({ block: 'clearfix' })
);
