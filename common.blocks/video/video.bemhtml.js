block('video')(
    tag()('iframe'),
    attrs()(function() {
        return {
            src: this.ctx.url,
            allowfullscreen: 'allowfullscreen'
        }
    })
);
