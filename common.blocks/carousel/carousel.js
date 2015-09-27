modules.define('carousel', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, jQuery) {

/*borschik:include:../../libs/bxslider-4/dist/jquery.bxslider.js*/

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                this.elem('inner').bxSlider(this.params.opts);
            }
        }
    }
}));

});
