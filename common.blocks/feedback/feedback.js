modules.define('feedback', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {}, {
    live: function() {
        this.liveInitOnEvent('more', 'click', function() {
            this.setMod('expanded');
        });
    }
}));

});
