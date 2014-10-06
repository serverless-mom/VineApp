# Vine browser/list app - WIP
The intent of this project is to produce a pure-angular Vine browser, making requests against the Vine API

Currently, while the app produces a list of thumbnails with labels from a sample JSON object, it's non-trivial to make
a request to the Vine API from the browser. This is doubtless because Vine has no truly public API, and the endpoints
I would use were reverse-engineered from pointing the mobile app at Charles Proxy.

##ToDo
Since it's possible to make bare curl requests against the vine API, it should be possible to set up a node-based
proxy for this app that will actually interact with Vine. This would require a bit more thoughtfulness about
caching requests within the browser, as adding a proxy will add yet more async time to browsing.