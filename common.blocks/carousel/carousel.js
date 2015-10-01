modules.define('carousel', ['i-bem__dom', 'jquery', 'link'], function(provide, BEMDOM, jQuery, Link) {

/*borschik:include:../../libs/bxslider-4/dist/jquery.bxslider.js*/

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.elem('inner').bxSlider(this.params.opts);

                var modal = this.findBlockOutside('page').findBlockInside('modal');

                Link.on(this.domElem, 'click', function(e) {
                    modal
                        .setContent('<img class="screenshot" src="' + e.target.params.url + '">')
                        .setMod('visible');
                });
            }
        }
    }
}, {
    live: function() {}
}));

});
