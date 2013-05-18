// ==UserScript==
// @name           geocaching.com - QR Code
// @namespace      http://nickel715.de
// @description    generate a qr code with the coor.info link on the listing page
// @include        http://www.geocaching.com/seek/cache_details*
// ==/UserScript==
//
var gccode = document.getElementById('ctl00_ContentBody_CoordInfoLinkControl1_uxCoordInfoCode').innerHTML;

var url    = 'http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http%3A%2F%2Fcoord.info%2F' + gccode;

var image  = document.createElement('img');
image.setAttribute('src', url);

var newdiv = document.createElement('div');
newdiv.setAttribute('class', 'WidgetBody');
newdiv.setAttribute('style', 'text-align: center');
newdiv.appendChild(image);

var container = document.getElementsByClassName('CacheDetailNavigationWidget')[0];
container.appendChild(newdiv);
