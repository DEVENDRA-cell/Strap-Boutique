(function() {
    var cdnOrigin = "https://cdn.shopify.com";
    var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills.Ds1KrAnN.js", "/cdn/shopifycloud/checkout-web/assets/c1/app.DsYTlUN7.js", "/cdn/shopifycloud/checkout-web/assets/c1/vendor.CZtXtYG0.js", "/cdn/shopifycloud/checkout-web/assets/c1/locale-en.BMLdrQ7U.js", "/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage.BYSAQbql.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons.DR_KUe7_.js", "/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup.CFjcHpO9.js", "/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName.B_sf6daw.js", "/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment.BfUeAKHi.js", "/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer.ZxJqzD5r.js", "/cdn/shopifycloud/checkout-web/assets/c1/AddDiscountButton.C8Eku_-c.js", "/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText.61ZqASGo.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer.CkEoR7jt.js", "/cdn/shopifycloud/checkout-web/assets/c1/MobileOrderSummary.CIyPXbFv.js", "/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection.DHBwrQnk.js", "/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice.AU4tli4y.js", "/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptions.HSmG545j.js", "/cdn/shopifycloud/checkout-web/assets/c1/usePreselectSpi.CQF01-x3.js", "/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList.BsNC00ks.js", "/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch.6cCPBXrk.js", "/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger.4QmEAX_v.js", "/cdn/shopifycloud/checkout-web/assets/c1/shop-js-index.bq4C_rRR.js", "/cdn/shopifycloud/checkout-web/assets/c1/v4.BKrj-4V8.js", "/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown.DTTU3U9K.js", "/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal.LPmAOZe5.js", "/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview.DGafCBZ5.js"];
    var styles = ["/cdn/shopifycloud/checkout-web/assets/c1/assets/app.B1x0omyf.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/OnePage.DYH7B_vD.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/LocalPickup.Br8sZ79N.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/AddDiscountButton.Ca9titpM.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/MobileOrderSummary.DjnS_Dr1.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/PaymentOptions.PpwvcyQt.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/ShopPayVerificationSwitch.WW3cs_z5.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/useShopPayButtonClassName.BrcQzLuH.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/VaultedPayment.OxMVm7u-.css", "/cdn/shopifycloud/checkout-web/assets/c1/assets/StackedMerchandisePreview.D6OuIVjc.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0497/2160/6309/files/solely_logo_x320.png?v=1678141307"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();