(function() {
  'use strict';

  function Gallery(itemsSelector) {
    this.itemsSelector = itemsSelector;
    this.items;
    this.current;
    this.firstIndex = 1; // exclude ourself
    this.nextInterval = 60000;
    this.init();
  }

  Gallery.prototype = {
    constructor: Gallery,

    init: function() {
      this.updateList();
      this.setCurrent(this.items[this.firstIndex]);
      this.startLooping();
    },

    startLooping: function() {
      setInterval(this.goNext.bind(this), this.nextInterval);
    },

    setCurrent: function(current) {
      this.current = current;
    },

    updateList: function() {
      this.items = document.querySelectorAll(this.itemsSelector);
    },

    getNextItem: function() {
      this.updateList();
      var currentItemIndex = Array.prototype.indexOf.call(this.items, this.current);
      var nextIndex = currentItemIndex + 1 < this.items.length ? currentItemIndex + 1 : this.firstIndex;
      return this.items[nextIndex];
    },

    goNext: function() {
      var nextItem = this.getNextItem();
      nextItem.click();
      this.setCurrent(nextItem);
    }
  }

  new Gallery('.GhXe9b');

})();
