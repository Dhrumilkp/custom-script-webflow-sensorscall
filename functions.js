<script>
let options = {
    "product": {
        "styles": {
            "product": {
                "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                }
            },
            "button": {
                "font-family": "Raleway, sans-serif",
                ":hover": {
                    "background-color": "#e54037"
                },
                "background-color": "#fe473d",
                ":focus": {
                    "background-color": "#e54037"
                },
                "border-radius": "40px"
            }
        },
        "contents": {
            "img": false,
            "title": false,
            "price": false
        },
        "text": {
            "button": "Add to cart"
        },
        "googleFonts": [
            "Raleway"
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
    },
    "modalProduct": {
        "contents": {
            "img": false,
            "imgWithCarousel": true,
            "button": false,
            "buttonWithQuantity": true
        },
        "styles": {
            "product": {
                "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                }
            },
            "button": {
                "font-family": "Raleway, sans-serif",
                ":hover": {
                    "background-color": "#e54037"
                },
                "background-color": "#fe473d",
                ":focus": {
                    "background-color": "#e54037"
                },
                "border-radius": "40px"
            },
            "title": {
                "font-family": "Montserrat, sans-serif"
            },
            "price": {
                "font-family": "Montserrat, sans-serif"
            },
            "compareAt": {
                "font-family": "Montserrat, sans-serif"
            },
            "unitPrice": {
                "font-family": "Montserrat, sans-serif"
            },
            "description": {
                "font-family": "Montserrat, sans-serif"
            }
        },
        "googleFonts": [
            "Montserrat",
            "Raleway"
        ],
        "text": {
            "button": "Add to cart"
        }
    },
    "option": {},
    "cart": {
        "styles": {
            "button": {
                "font-family": "Raleway, sans-serif",
                ":hover": {
                    "background-color": "#e54037"
                },
                "background-color": "#fe473d",
                ":focus": {
                    "background-color": "#e54037"
                },
                "border-radius": "40px"
            }
        },
        "text": {
            "total": "Subtotal",
            "button": "Checkout"
        },
        "popup": false,
        "googleFonts": [
            "Raleway"
        ]
    },
    "toggle": {
        "styles": {
            "toggle": {
                "font-family": "Raleway, sans-serif",
                "background-color": "#fe473d",
                ":hover": {
                    "background-color": "#e54037"
                },
                ":focus": {
                    "background-color": "#e54037"
                }
            }
        },
        "googleFonts": [
            "Raleway"
        ]
    }
};
$(document).on('click', '#add-to-cart-button', function (e) {
    e.preventDefault();
    // show model
    $('#model-wrapper-offer').css('display', 'flex');
    load2packbutton();
    load3packbutton();
    load1packbutton();
});
$('#close-model-block').click(function (e) {
    e.preventDefault();
    // Hide Model
    $('#model-wrapper-offer').css('display', 'none');
});
function load2packbutton() {
    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
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
                domain: 'sensorscall.myshopify.com',
                storefrontAccessToken: '0e8f86c87457502b588ddef71dbcd02e',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
                ui.createComponent('product', {
                    id: '6727328858298',
                    node: document.getElementById('product-component-1666847056467'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: options
                });
            });
        }
    })();
}
function load3packbutton() {
    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
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
                domain: 'sensorscall.myshopify.com',
                storefrontAccessToken: '0e8f86c87457502b588ddef71dbcd02e',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
                ui.createComponent('product', {
                    id: '6145755709626',
                    node: document.getElementById('product-component-1666849976752'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: options,
                });
            });
        }
    })();
}
function load1packbutton() {
    (function () {
        var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
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
                domain: 'sensorscall.myshopify.com',
                storefrontAccessToken: '0e8f86c87457502b588ddef71dbcd02e',
            });
            ShopifyBuy.UI.onReady(client).then(function (ui) {
                ui.createComponent('product', {
                    id: '6145752727738',
                    node: document.getElementById('product-component-1666850427243'),
                    moneyFormat: '%24%7B%7Bamount%7D%7D',
                    options: {
                        "product": {
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "calc(25% - 20px)",
                                        "margin-left": "20px",
                                        "margin-bottom": "50px"
                                    }
                                },
                                "button": {
                                    "font-family": "Raleway, sans-serif",
                                    ":hover": {
                                        "background-color": "#e54037"
                                    },
                                    "background-color": "#fe473d",
                                    ":focus": {
                                        "background-color": "#e54037"
                                    },
                                    "border-radius": "40px"
                                }
                            },
                            "contents": {
                                "img": false,
                                "title": false,
                                "price": false
                            },
                            "text": {
                                "button": "No, Just add 1-pack"
                            },
                            "googleFonts": [
                                "Raleway"
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
                        },
                        "modalProduct": {
                            "contents": {
                                "img": false,
                                "imgWithCarousel": true,
                                "button": false,
                                "buttonWithQuantity": true
                            },
                            "styles": {
                                "product": {
                                    "@media (min-width: 601px)": {
                                        "max-width": "100%",
                                        "margin-left": "0px",
                                        "margin-bottom": "0px"
                                    }
                                },
                                "button": {
                                    "font-family": "Raleway, sans-serif",
                                    ":hover": {
                                        "background-color": "#e54037"
                                    },
                                    "background-color": "#fe473d",
                                    ":focus": {
                                        "background-color": "#e54037"
                                    },
                                    "border-radius": "40px"
                                },
                                "title": {
                                    "font-family": "Montserrat, sans-serif"
                                },
                                "price": {
                                    "font-family": "Montserrat, sans-serif"
                                },
                                "compareAt": {
                                    "font-family": "Montserrat, sans-serif"
                                },
                                "unitPrice": {
                                    "font-family": "Montserrat, sans-serif"
                                },
                                "description": {
                                    "font-family": "Montserrat, sans-serif"
                                }
                            },
                            "googleFonts": [
                                "Montserrat",
                                "Raleway"
                            ],
                            "text": {
                                "button": "No, Just add 1-pack"
                            }
                        },
                        "option": {},
                        "cart": {
                            "styles": {
                                "button": {
                                    "font-family": "Raleway, sans-serif",
                                    ":hover": {
                                        "background-color": "#e54037"
                                    },
                                    "background-color": "#fe473d",
                                    ":focus": {
                                        "background-color": "#e54037"
                                    },
                                    "border-radius": "40px"
                                }
                            },
                            "text": {
                                "total": "Subtotal",
                                "button": "Checkout"
                            },
                            "popup": false,
                            "googleFonts": [
                                "Raleway"
                            ]
                        },
                        "toggle": {
                            "styles": {
                                "toggle": {
                                    "font-family": "Raleway, sans-serif",
                                    "background-color": "#fe473d",
                                    ":hover": {
                                        "background-color": "#e54037"
                                    },
                                    ":focus": {
                                        "background-color": "#e54037"
                                    }
                                }
                            },
                            "googleFonts": [
                                "Raleway"
                            ]
                        }
                    },
                });
            });
        }
    })();
}
</script>
