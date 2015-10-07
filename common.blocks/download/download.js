modules.define('download', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {}, {
    live: function() {
        this.liveBindTo('button', 'click', function(e) {
            yaCounter32863075.reachGoal('DL_Bottom');
        });
    }
}));

});
