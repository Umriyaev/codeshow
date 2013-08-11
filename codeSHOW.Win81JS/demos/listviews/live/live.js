﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/demos/listviews/live/live.html", {
        init: function(element, options) {
            WinJS.Namespace.define("codeShow.Demos.listview.live",{
                data: new WinJS.Binding.List()
            });

        },
        ready: function (element, options) {

            for (var i = 0; i < 10; i++) {
                codeShow.Demos.listview.live.data.push(WinJS.Binding.as({ value: 0 }));
            };

            updateNumbers();

            function updateNumbers() {
                codeShow.Demos.listview.live.data.forEach(function (value, index, array) {
                    value.value = Math.floor(Math.random() * 10);
                });
                setTimeout(updateNumbers, 1000);
            }
        }
    });
})();
