
# Interactive Map for Xenoblade Chronicles X

Is an interactive map in first place to find location of enemies while troopmissions, where time is limited. Visit [http://unused.github.io/xenomap/](http://unused.github.io/xenomap/) to see current version.

## Development Notes

Map used references to a [post on gamefaqs.com/boards](http://www.gamefaqs.com/boards/701151-xenoblade-chronicles-x/71678381?page=2).
Created map controls using [Leaflet][leafletjs] - an open-source JavaScript library for mobile-friendly interactive maps.

Created map tiles using rubygem [tileup][tileup].  Generate tiles with:

```sh
$ tileup --in map.png --output-dir map --prefix map
```

## TODO

- [x] create interface to choose data.
- [ ] extend the data: troopmission targets, enemies, tyrants, treasures, etc.
- [ ] add language support and translations
- [ ] add quick contributions possibility (translations, new marker, new regions)
- [x] use zoom - check tutorial by [Oliver Marriott](http://omarriott.com/aux/leaflet-js-non-geographical-imagery/).
- [ ] add search form and result.
- [ ] add loading progress.

[leafletjs]: http://leafletjs.com/examples/quick-start.html "Leaflet"
[tileup]: https://github.com/rktjmp/tileup/tree/master "Rubygem tileup"
[miramap]: http://xenoblade.wikia.com/wiki/Mira "Wikia World Map of Mira"
