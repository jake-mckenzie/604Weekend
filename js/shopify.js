/*<![CDATA[*/

(function () {
  var scriptURL = 'js/shopifyBuyButton.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'movement-creative-group.myshopify.com',
      apiKey: '5a004d2a9640f6b33a29202d50c0afaf',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: 59187068994,
        node: document.getElementById('collection-component-e92d978cfe7'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "buttonDestination": "modal",
    "variantId": "all",
    "contents": {
      "imgWithCarousel": false,
      "variantTitle": false,
      "options": false,
      "description": false,
      "buttonWithQuantity": false,
      "quantity": false
    },
    "text": {
      "button": "VIEW PRODUCT"
    },
    "styles": {
    "overflow-x": "hidden",
    "overflow-y": "scroll",
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "overflow-x": "hidden",
          "overflow-y": "scroll",
          "margin-left": "20px",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#ffffff",
        "color": "#000000",
        "font-family": "Montserrat, sans-serif",
        "padding-left": "18px",
        "padding-right": "18px",
        "border-radius": "0px",
        "border": "thin solid #000",
        ":hover": {
          "background-color": "#000",
          "color": "#fff"
        },
        ":focus": {
          "background-color": "#000",
          "color": "#fff"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Montserrat, sans-serif",
        "font-size": "16px"
      },
      "description": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-size": "16px",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold",
        "font-size": "13.6px"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "text": {
      "notice": "Discount codes are added at checkout."
    },
    "styles": {
    "overflow-x": "hidden",
    "overflow-y": "scroll",
      "button": {
        "background-color": "#ffffff",
        "color": "#000000",
        "font-family": "Montserrat, sans-serif",
        "padding-left": "18px",
        "padding-right": "18px",
        "border-radius": "0px",
        "border": "thin solid #000",
        ":hover": {
          "background-color": "#000",
          "color": "#fff"
        },
        ":focus": {
          "background-color": "#000",
          "color": "#fff"
        },
        "font-weight": "bold"
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": true,
      "imgWithCarousel": false,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
    "overflow-x": "hidden",
    "overflow-y": "scroll",
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#ffffff",
        "color": "#000000",
        "font-family": "Montserrat, sans-serif",
        "padding-left": "18px",
        "padding-right": "18px",
        "border-radius": "0px",
        "border": "thin solid #000",
        ":hover": {
          "background-color": "#000",
          "color": "#fff"
        },
        ":focus": {
          "background-color": "#000",
          "color": "#fff"
        },
        "font-weight": "bold"
      },
      "variantTitle": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold"
      },
      "title": {
        "font-family": "Montserrat, sans-serif"
      },
      "description": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold"
      },
      "price": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold"
      },
      "compareAt": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat",
      "Montserrat"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Montserrat, sans-serif",
        "background-color": "#ffffff",
        ":hover": {
          "background-color": "darkgray"
        },
        ":focus": {
          "background-color": "darkgray"
        },
        "font-weight": "bold"
      },
      "count": {
        "color": "#000000",
        ":hover": {
          "color": "#000000"
        }
      },
      "iconPath": {
        "fill": "#000000"
      }
    },
    "googleFonts": [
      "Montserrat"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold"
      },
      "select": {
        "font-family": "Montserrat, sans-serif",
        "font-weight": "bold"
      }
    },
    "googleFonts": [
      "Montserrat",
      "Montserrat"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
/*]]>*/
