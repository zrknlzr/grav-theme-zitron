# Zitron Theme for Grav

A slightly fizzy [Grav](http://getgrav.org) portfolio theme for artists and illustrators. Please be aware this is still in development and mostly untested. The v1.0.0 stable version will include, among other things, a blog, optimized gallery loading and basic documentation.

# Features

- Simple and minimal layout
- [Isotope](https://github.com/metafizzy/isotope) gallery with category filters
- Fully responsive with dropdown mobile navigation
- Project pages support video embeds (Vimeo)
- Custom navigation in sidebar

## Installation / Usage

### Manual installation

```shell
# @ path/to/grav/installation
$ cd user/themes/
$ git clone https://github.com/zrknlzr/grav-theme-zitron.git zitron
```

### Activate theme

After installation navigate to `user/config/system.yaml` and update the theme:

```yaml
pages:
  theme: zitron
```

### Demo

Just copy the contents of `user/themes/zitron/_demo/` into your `user/` folder for a quick demo content of your site.

# Credits

- Isotope script license : GNU General Public License 3.0 https://www.gnu.org/licenses/gpl-3.0.html
- imagesloaded script license : MIT license https://desandro.mit-license.org/
- Rubik font license : SIL Open Font License, 1.1 http://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL
- normalize.css license : MIT license https://github.com/necolas/normalize.css/blob/master/LICENSE.md
- Images in \_demo are provided by [Unsplash](https://unsplash.com/license)

## License

Zitron grav theme is an open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT).
