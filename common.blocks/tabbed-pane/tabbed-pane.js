modules.define('tabbed-pane', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

provide(BEMDOM.decl(this.name, {
    onSetMod: {
        js: {
            inited: function() {
                var tabIdx = window.location.hash.substr(1);
                tabIdx && this.switchTab(tabIdx);
            }
        }
    },
    onTabClick: function(e) {
        var currentTabIndex = this.elem('tab').index(e.target);
        yaCounter32863075.reachGoal('DL_Middle-' + (currentTabIndex + 1));

        this.switchTab(currentTabIndex);
    },
    switchTab: function(currentTabIndex) {
        // TODO: проверять, не является ли currentTabIndex уже активным
        var panes = this.elem('pane'),
            tabs = this.elem('tab'),
            currentPane = panes.eq(currentTabIndex);

        this
            .delMod(tabs, 'state')
            .setMod(tabs.eq(currentTabIndex), 'state', 'current')
            .delMod(panes, 'state')
            .setMod(currentPane, 'state', 'current');

        this.findBlockInside(currentPane, 'carousel') // force init
            .reloadSlider();
    },
}, {
    live: function() {
        this.liveBindTo('tab', 'click', this.prototype.onTabClick);
        return false;
    }
}));

});
