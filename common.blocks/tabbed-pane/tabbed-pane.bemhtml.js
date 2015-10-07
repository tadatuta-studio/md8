block('tabbed-pane')(
    js()(true),
    elem('tab')(
        tag()('a'),
        attrs()(function() {
            return {
                href: '#' + (this.position - 1)
            };
        })
    )
);
