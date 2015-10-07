modules.define('introduction', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {}, {
    live: function() {
        this.liveBindTo('download', 'click', function(e) {
            yaCounter32863075.reachGoal('DL_Top');
        });
    }
}));

});
