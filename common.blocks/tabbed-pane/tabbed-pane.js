modules.define('tabbed-pane', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {

            }
        }
    },
    onTabClick: function(e) {
        this.switchTab(this.elem('tab').index(e.target));
    },
    switchTab: function(currentTabIndex) {
        // TODO: проверять, не является ли currentTabIndex уже активным
        var panes = this.elem('pane'),
            tabs = this.elem('tab');

        return this
            .delMod(tabs, 'state')
            .setMod(tabs.eq(currentTabIndex), 'state', 'current')
            .delMod(panes, 'state')
            .setMod(panes.eq(currentTabIndex), 'state', 'current');
    },
}, {
    live: function() {
        this.liveBindTo('tab', 'click', this.prototype.onTabClick);
    }
}));

});
