CHICHI Public Site
==================



This is the development environment and repository for the website of CHICHI - the bicycle shop in 
the heart of Berlin Neukölln. The site can be found under [chichi.berlin](http://chichi.berlin)




### How to get started?

__Prerequisites:__ Node/NPM, Ruby


#### Installation

```sh
$   npm install
```


#### Development

```sh
$   ???
```


#### Build and Deploy

```sh
$   npm build
```



### Website structure

```
  /                                     [page: root]            -   overview of all website parts,
  |                                                                 newest posts etc.
  |
  +-- Fahrräder                         [page: item-list]       -   curated list of bikes 
  |   +-- Gruppe/Kategorie              [page: item-list]       
  |   |   +-- Model Name B              [page: deailed-item]    -   infos, images, specs, link to post 
  |   |   +-- ...
  |   +-- Fahrrad-Konfiurator(en)       [embedded/external]
  |   +-- ...
  +-- Teile                             [page: item-list]       -   curated list of parts
  |   +-- Kategorie                     [page: item-list]
  |   |   +-- Gruppe                    [page: item-overview]   -   selection of specific items and
  |   |   +-- ...                                                   and related manufacturers
  |   +-- ...                           
  +-- Ausrüstung                        [page: item-list]       -   curated list of accessories
  |   +-- Kategorie                     [page: item-list]
  |   |   +-- Gruppe                    [page: item-overview]
  |   |   +-- ...                           
  |   +-- ...                           
  +-- Service                           [page: services]        -   shows offered services in sections 
  +-- Hersteller                        [page: partner-list]    -   manufacturers grupped in sections
  +-- Firmenphilosophie                 [page: company-values]  -   sections showing different values
  |                                     
  +-- Blog                              [page: post-list]
      +-- Fancy Category Name           [page: post-list]
      +-- My new Blog Post              [page: post]
      +-- Another awesome Post          [page: post]
      +-- ...                           
  |                                     
  +-- Kontakt & Impressum               [page: text]
  |                                     
  +-- 404                               [page: 404]

```

#### Concepts and Notes

+   bike configurator: https://hartje-konfigurator.de/
+   supported Langs: german
    -   use i18n framework to separate content from templating
+   depending on the amount of existing partners, they might get moved into the footer until they 
    are enough
+   root/landing page:
    -   banner with some news (e.g. opening hours, temp. sell); just one instance
+   for bikes, parts, accessories:
    -   pages in between start and end should have the same design
    -   in-between levels for grouping are based on certain specs
+   company values: 
    -   sorted in sections
    -   should contain topics like supported insurance
    -   links in footer, not part in header nav
