## [1.5.2](https://github.com/mateusfg7/Noisekun/compare/1.5.1...1.5.2) (2024-01-02)


### Bug Fixes

* **pomodoro:** sound volume increasing while pomodoro is stopped after a period of time ([6417887](https://github.com/mateusfg7/Noisekun/commit/64178871433ef00f852a478680b8be2013a78e87)), closes [#608](https://github.com/mateusfg7/Noisekun/issues/608)

## [1.5.1](https://github.com/mateusfg7/Noisekun/compare/1.5.0...1.5.1) (2023-12-28)


### Features

* **config-menu:** add error messages and "is changed" marker ([c3694e4](https://github.com/mateusfg7/Noisekun/commit/c3694e4bb026799a28c1b9279ca1422e09a2cc8c))
* **tailwind:** add `slider-thumb` variant ([ae09fda](https://github.com/mateusfg7/Noisekun/commit/ae09fdac3c13de3afc38dd4d975c64b198a09d09))
* **toast:** add `Toaster` component on layout ([06e7b6e](https://github.com/mateusfg7/Noisekun/commit/06e7b6ef48f1903c0c2e56444e7be6d56e8cd8b7))
* **ui:** add volume-controller-slider component ui ([706601b](https://github.com/mateusfg7/Noisekun/commit/706601bee47de01d1c48ede073204b2913486f7b))

## [1.5.0](https://github.com/mateusfg7/Noisekun/compare/1.4.0...1.5.0) (2023-12-27)


### Features

* add config menu ([fbf1535](https://github.com/mateusfg7/Noisekun/commit/fbf1535253c978f5df3cd4bb53db0f87adf947ad))
* added index.tsx files for random controller ([55f8411](https://github.com/mateusfg7/Noisekun/commit/55f8411b5152a4f8aaffe8857c3c5c86d84839b6))
* added styles.css for random-controller ([3b8f141](https://github.com/mateusfg7/Noisekun/commit/3b8f141c8b192fbf5f9ee68a71309db34a3d7acd))
* **config-menu:** add "updaet trasition time" config ([45d3994](https://github.com/mateusfg7/Noisekun/commit/45d3994053533a5b10aa7bce194edd75f8f9ccd7))
* **random-mode:** add `updateTransitionTimeInMs` on random-mode store ([8208c4b](https://github.com/mateusfg7/Noisekun/commit/8208c4b10d5749a3a9c8b6e0bfff977fbe6dfcf7))
* **ui:** fit footer loco background with theme ([2ab947c](https://github.com/mateusfg7/Noisekun/commit/2ab947c30ed07af08ab6bc413f7d679c9347b634)), closes [#622](https://github.com/mateusfg7/Noisekun/issues/622)
* **ui:** improve config-menu styles ([c83f4d7](https://github.com/mateusfg7/Noisekun/commit/c83f4d77204200e51a1445019bfef6929804a171))
* **ui:** small improvements on footer's logo ([c7c8645](https://github.com/mateusfg7/Noisekun/commit/c7c8645b8a3ea0e753ed5ef30dac4d738d1a42f1))
* **ui:** small improvements on random-mode toggle ([a8e5f8a](https://github.com/mateusfg7/Noisekun/commit/a8e5f8a88246414f93beda0e29fa149dffd95205))
* **utils:** create `padZero` function ([35ab6ed](https://github.com/mateusfg7/Noisekun/commit/35ab6ed474bae4beefebac0bd630fca455997968))
* **utils:** create `padZero` function ([246afd7](https://github.com/mateusfg7/Noisekun/commit/246afd76dd20199bbda43cfa323e58b0fa8f5f03))


### Bug Fixes

* **a11y:** add title on config-menu trigger button ([a50d7cb](https://github.com/mateusfg7/Noisekun/commit/a50d7cb3e221bdcac84c225d330e98cdd54a2517))
* add testable code ([0d679a3](https://github.com/mateusfg7/Noisekun/commit/0d679a3cc20944852bff4c31a863ffece9e9dc2d))
* **deps:** update dependency sharp to ^0.33.0 ([8643d5b](https://github.com/mateusfg7/Noisekun/commit/8643d5bbcc97d3f77bfa983118888e9c39bd447c))
* **deps:** update dependency zustand to v4.4.7 ([c5bcd25](https://github.com/mateusfg7/Noisekun/commit/c5bcd2534b9ff2a89d83c8f36b3db48eb88f50eb))
* duplicate volume icon ([bbbec25](https://github.com/mateusfg7/Noisekun/commit/bbbec25d314c9dbb95b1c5cae9fe4e55102529fe))
* fix sound state issue (unoptimized) ([91d0ab7](https://github.com/mateusfg7/Noisekun/commit/91d0ab766724aa4b3417438db3e9b982a7917259))
* fixed error ([6d2404d](https://github.com/mateusfg7/Noisekun/commit/6d2404d74d76d35bad1d87f19fdff7e71ae1d3a5))
* linting issues ([22a62b2](https://github.com/mateusfg7/Noisekun/commit/22a62b25a0e62c1fac2c8b9f30239df92d564c59))
* prettier ([615fdd3](https://github.com/mateusfg7/Noisekun/commit/615fdd33f863851a360ae2e313795e28036ca406))
* prettier error ([dc0aefd](https://github.com/mateusfg7/Noisekun/commit/dc0aefd133c6639f6084f846b7a6ea3c63431d75))
* randomization optimization ([850f813](https://github.com/mateusfg7/Noisekun/commit/850f813561818d37c660c8020a431d4de4c71429))
* reafactoring to make tests pass ([d02db7f](https://github.com/mateusfg7/Noisekun/commit/d02db7f2ae0781aa1769038f524fac8de711aa74))
* **sounds:** update sounds CDN URLs ([4228f3c](https://github.com/mateusfg7/Noisekun/commit/4228f3c6be0e43a88a668f19160cc2864b09c9c2))
* **types:** add missing types on random-controller functions ([42197dc](https://github.com/mateusfg7/Noisekun/commit/42197dced4d81a262c30a31da72b1c3b33cf7a94))
* **ui:** hide global volume controller on small devices ([4f8f17e](https://github.com/mateusfg7/Noisekun/commit/4f8f17e80fc527950c452b7a1e26e1b3247d4ff9))
* **ui:** update broken "Credits" link on footer ([0a0ef15](https://github.com/mateusfg7/Noisekun/commit/0a0ef1598d6acb79d0870a5dd9516dd614e4eda6))
* **umami:** add proper umami event titles ([01f68aa](https://github.com/mateusfg7/Noisekun/commit/01f68aa08cdfbef2873ac3934ac8b971adc00a4a))
* uncomment extra lines ([ff2c6b0](https://github.com/mateusfg7/Noisekun/commit/ff2c6b04eaed94a141d899bfc175554d4dd75048))

## [1.4.0](https://github.com/mateusfg7/Noisekun/compare/1.3.4...1.4.0) (2023-11-25)


### Features

* add `querySounds` verification on page mount before show interaction-modal ([e01418c](https://github.com/mateusfg7/Noisekun/commit/e01418c44c5ca0bf42ce70682669631b22f9fe95))
* added queryParams ([f3b1abc](https://github.com/mateusfg7/Noisekun/commit/f3b1abc9c9de6de8cbf209290f853fca52273f59))
* **seo:** improve website title ([cc5ba6a](https://github.com/mateusfg7/Noisekun/commit/cc5ba6a5f006662636349f0633135ee285285ba8)), closes [#601](https://github.com/mateusfg7/Noisekun/issues/601)
* **sound:** add interaction verification before play sound ([5ee974d](https://github.com/mateusfg7/Noisekun/commit/5ee974decc8383414567124131a7650f287adde3))
* **stores:** create user-interation-store ([eeba491](https://github.com/mateusfg7/Noisekun/commit/eeba491d8c5846b416b8cd47089cb3fd82b13ac5))
* **ui:** change load theme source priority ([88aa8ec](https://github.com/mateusfg7/Noisekun/commit/88aa8ecba400373966fa13a9f3cd3480f84c8541))
* **ui:** create "share-button" component ([94b02b2](https://github.com/mateusfg7/Noisekun/commit/94b02b2c892e97909085d746f01d800cf77b3c66))
* **ui:** create interaction-modal component ([7b14531](https://github.com/mateusfg7/Noisekun/commit/7b14531182b6701b2d796449c48238138d7aa836))


### Bug Fixes

* adjusted some appointments ([a59e85e](https://github.com/mateusfg7/Noisekun/commit/a59e85ea8ded70f3f6aa9844163259c0d78b4836))
* copy combo url to clipboard ([160989c](https://github.com/mateusfg7/Noisekun/commit/160989cd04c7a49cccad41fe7a8028e950333166))
* **deps:** update dependency react-icons to v4.12.0 ([e86981a](https://github.com/mateusfg7/Noisekun/commit/e86981ab2d81adbf5ead7cef282052b536696907))
* **deps:** update dependency zustand to v4.4.6 ([39675bb](https://github.com/mateusfg7/Noisekun/commit/39675bbd704f987085e08306920e657728c6b081))
* **seo:** get current hostname/domain from env variables ([1980569](https://github.com/mateusfg7/Noisekun/commit/198056974a8389de04fdcbfcd018b3e378264443))
* **ui:** update `queryTheme` when select a new theme ([5ab9c12](https://github.com/mateusfg7/Noisekun/commit/5ab9c122299678d103bb72a4b9e23d7adb601847))
* **ui:** use `localSoundState.loaded` as criteria for visual active feedback ([84e9d11](https://github.com/mateusfg7/Noisekun/commit/84e9d11ff7e6c8964263063f96d16e25fe036c12))

## [1.3.4](https://github.com/mateusfg7/Noisekun/compare/1.3.3...1.3.4) (2023-10-10)


### Features

* **a11y:** add `aria-label` on sound buttons ([d5c8cea](https://github.com/mateusfg7/Noisekun/commit/d5c8cea25b978ee595cf192d6f300a67d3f629ab))
* **ui:** add red effect when removing combo ([8a33629](https://github.com/mateusfg7/Noisekun/commit/8a33629da90ba548c3b3b9c3403eac064c58fe95))
* **ui:** rename "Edit" to "Delete" on combo options ([bba0698](https://github.com/mateusfg7/Noisekun/commit/bba0698de18ff38929f6eb2f1035e82f3618bc54))


### Bug Fixes

* **deps:** update dependency zustand to v4.4.3 ([c867beb](https://github.com/mateusfg7/Noisekun/commit/c867beb212ec3307f79de806253effd8073d27f9))
* **ui:** small effect fixes ([fcfbf1e](https://github.com/mateusfg7/Noisekun/commit/fcfbf1ea8fead628fcefe5251c3d43561d7759a7))

## [1.3.3](https://github.com/mateusfg7/Noisekun/compare/1.3.2...1.3.3) (2023-10-09)


### Features

* replace @faker-js/faker alphanumeric by math random ([9d5fd9b](https://github.com/mateusfg7/Noisekun/commit/9d5fd9b3e4ffe4c8947466206e6933a4f47261c8))
* **seo:** add `metadata.metadataBase` with base url ([5074c2c](https://github.com/mateusfg7/Noisekun/commit/5074c2cd8595b612af48dc17bd2dd505d06d925a))
* **ui:** add sound loading animation ([08df8f6](https://github.com/mateusfg7/Noisekun/commit/08df8f65665922f2725b2fab64b83b8700f518ea))

## [1.3.2](https://github.com/mateusfg7/Noisekun/compare/1.3.0...1.3.2) (2023-10-04)


### Features

* **ui:** customize ui styles on webkit based browsers ([1f99d63](https://github.com/mateusfg7/Noisekun/commit/1f99d6370134d0dbf9da6d8ba2285040c6fc56f4))


### Bug Fixes

* **stores:** add correct version number on combo-store ([6463349](https://github.com/mateusfg7/Noisekun/commit/64633490119f7f365ba2d4eb3c4be76f45885a70))

## [1.3.0](https://github.com/mateusfg7/Noisekun/compare/1.2.1...1.3.0) (2023-10-03)


### Features

* **a11y:** replace `<span>` with `<label>` on volume controller component ([7bafcbc](https://github.com/mateusfg7/Noisekun/commit/7bafcbc6e82e8d22b9f6dac9fc721b21ed7f2a2d)), closes [#388](https://github.com/mateusfg7/Noisekun/issues/388)
* **ui:** save theme information on combo data ([3dcfcc6](https://github.com/mateusfg7/Noisekun/commit/3dcfcc63982ab4c04b0149412a2bd8e7deaf43c2))

## [1.2.1](https://github.com/mateusfg7/Noisekun/compare/1.2.0...1.2.1) (2023-10-03)


### Features

* **stores:** add version field on combo-store ([85983f2](https://github.com/mateusfg7/Noisekun/commit/85983f2aa181cd3b3f468d6261184223ff4d78db))

## [1.2.0](https://github.com/mateusfg7/Noisekun/compare/1.0.5...1.2.0) (2023-09-30)


### ⚠ BREAKING CHANGES

* **sound:** Fade In/Out volume

### Features

* **ui:** define combo input to show just when click on save button ([9f37c01](https://github.com/mateusfg7/Noisekun/commit/9f37c01f075a74bb916c682b0a6f0f1325bd2f75))


### Bug Fixes

* **deps:** update dependency react-icons to v4.11.0 ([e8d5617](https://github.com/mateusfg7/Noisekun/commit/e8d56170460b821855ffb70ca80bf033a9d9e467))
* **sound:** remove sound fade in/out effect ([85c0af1](https://github.com/mateusfg7/Noisekun/commit/85c0af175033c8f9bcf341c929c06598f4c4f837)), closes [#249](https://github.com/mateusfg7/Noisekun/issues/249)
* **ui:** add placeholder text color to combo input when on transition theme ([819fd39](https://github.com/mateusfg7/Noisekun/commit/819fd3963e15e7269ca83de85f770827cb53c5fe))
* **ui:** define if combo list trigger button is disabled on client side ([b0fb23c](https://github.com/mateusfg7/Noisekun/commit/b0fb23c5e340d660d920dc21dd4cba5db980aece))
* **ui:** remove infinite sound loading animation ([350bcbe](https://github.com/mateusfg7/Noisekun/commit/350bcbedd1b7afbfe45d0dfb61620b608e57f190))
* **ui:** rename property `data-isShowing` to `data-is-showing` on global volume controller ([c4dada4](https://github.com/mateusfg7/Noisekun/commit/c4dada40c1599a68ee96245d44e578258d534958))

## [1.0.5](https://github.com/mateusfg7/Noisekun/compare/1.0.4...1.0.5) (2023-09-03)


### Bug Fixes

* **ui:** remove shadown when sound is loading ([40dd618](https://github.com/mateusfg7/Noisekun/commit/40dd618f5a3ad366188354955bfd59b68873ffc4))

## [1.0.4](https://github.com/mateusfg7/Noisekun/compare/1.0.3...1.0.4) (2023-08-28)


### Features

* **sound:** get sounds from Noisekun CDN instead GCS ([9acac5f](https://github.com/mateusfg7/Noisekun/commit/9acac5ffe41c1e74b759cf5417543968bce73dd7))

## [1.0.3](https://github.com/mateusfg7/Noisekun/compare/1.0.2...1.0.3) (2023-08-25)


### Features

* **ui:** add loading animation on sound and pomodoro components ([79382b5](https://github.com/mateusfg7/Noisekun/commit/79382b5b5d572f776514dedbba481c9f64afa308))


### Bug Fixes

* **deps:** update dependency @headlessui/react to v1.7.17 ([b420f48](https://github.com/mateusfg7/Noisekun/commit/b420f48e5df7c4287aef11e2f8139704c26fa9f9))

## [1.0.2](https://github.com/mateusfg7/Noisekun/compare/1.0.1...1.0.2) (2023-08-18)


### Bug Fixes

* **analytics:** rename all "umami-data-event" to "data-umami-event" ([db009d5](https://github.com/mateusfg7/Noisekun/commit/db009d5be2da5f55e47d4480a86a183f94afdad2))

## [1.0.1](https://github.com/mateusfg7/Noisekun/compare/1.0.0...1.0.1) (2023-08-18)


### Features

* **analytics:** add umami event tracker on buttons and links ([fb63cad](https://github.com/mateusfg7/Noisekun/commit/fb63cad3f685e40e44d0edb4a5396635146b0a00))

## [1.0.0](https://github.com/mateusfg7/Noisekun/compare/0.7.0...1.0.0) (2023-08-18)


### Features

* **pwa:** add PWA support ([6b549fe](https://github.com/mateusfg7/Noisekun/commit/6b549feb3ad82dc8991e045c1ebbb20c636dce95)), closes [#516](https://github.com/mateusfg7/Noisekun/issues/516)
* **sound:** add "Boat" ([d2186ac](https://github.com/mateusfg7/Noisekun/commit/d2186ac396783f21b2fe5f828ea40a8631992238)), closes [#293](https://github.com/mateusfg7/Noisekun/issues/293)
* **sound:** add "Playground" ([d24c00a](https://github.com/mateusfg7/Noisekun/commit/d24c00a05b8958e1a5a49e330984ce69a63fbf77)), closes [#174](https://github.com/mateusfg7/Noisekun/issues/174)
* **sound:** add "Rain on Tent" ([19ad037](https://github.com/mateusfg7/Noisekun/commit/19ad037401e73a7d31dc32c2be9b5cf9924aefe3)), closes [#523](https://github.com/mateusfg7/Noisekun/issues/523)
* **stores:** create combo-store ([c232241](https://github.com/mateusfg7/Noisekun/commit/c232241d62b4f0b894067a93d5b01bbaf86a8f67))
* **stores:** create sounds-state-store ([a81febc](https://github.com/mateusfg7/Noisekun/commit/a81febc45a07a9fc457c03f7745b84f7fc2afd87))
* **tailwind:** add `minWidth` size ([b977386](https://github.com/mateusfg7/Noisekun/commit/b977386095246aa2f479a435a373f52212bf4aeb))
* **ui:** add clear-button to remove active sounds ([8acb72b](https://github.com/mateusfg7/Noisekun/commit/8acb72b64c36fe92de557151f9482797f13e1430)), closes [#537](https://github.com/mateusfg7/Noisekun/issues/537)
* **ui:** create "combo-list" component ([557aa8e](https://github.com/mateusfg7/Noisekun/commit/557aa8e227e08b14769b8d30f73a81306d7c1be6))
* **ui:** create "save-combo" button ([5c69eac](https://github.com/mateusfg7/Noisekun/commit/5c69eac83cfba1ce062a2d26454436e31b6cee5e))
* **ui:** update border-radius of sound icons ([f77a0fe](https://github.com/mateusfg7/Noisekun/commit/f77a0fed5ae42dad9254bdd85cd4f24f43351eb1))


### Bug Fixes

* **ui:** remove hard coded white color for some sound svg ([82ed65d](https://github.com/mateusfg7/Noisekun/commit/82ed65d276b915f8d46ba07dfde49c2d014c128c))

## [0.7.0](https://github.com/mateusfg7/Noisekun/compare/0.6.0...0.7.0) (2023-08-11)


### Features

* **ui:** add version number information on footer ([73e7ca8](https://github.com/mateusfg7/Noisekun/commit/73e7ca8cf771099fee22e259ed6c3f2df4a4c55e))
* **ui:** create pomodoro timer ([d5cdfdf](https://github.com/mateusfg7/Noisekun/commit/d5cdfdf7b5d1298a4d93a233a5ec0e13c5fd1036))
* **ui:** reduce z-index of theme-menu ([0328085](https://github.com/mateusfg7/Noisekun/commit/0328085c856e44f7b0a8a24cc4db5d990244e9f9))


### Bug Fixes

* **deps:** update dependency zustand to v4.4.1 ([206396e](https://github.com/mateusfg7/Noisekun/commit/206396ed35c2f6d78f07e625e58e03c269485cd2))

## [0.6.0](https://github.com/mateusfg7/Noisekun/compare/0.5.0...0.6.0) (2023-08-09)


### ⚠ BREAKING CHANGES

* **sound:** remove copyright protected sounds

### Features

* **sound:** decrease `drops.ogg` duration ([26ad35c](https://github.com/mateusfg7/Noisekun/commit/26ad35c993d61358e5197c0db4c5ec5231ec02a6))


### Reverts

* **sound:** remove copyright protected sounds ([950dc01](https://github.com/mateusfg7/Noisekun/commit/950dc01836cb8f5563cef9ad5ad8334b95e70b07)), closes [#521](https://github.com/mateusfg7/Noisekun/issues/521)

## [0.5.0](https://github.com/mateusfg7/Noisekun/compare/0.4.1...0.5.0) (2023-08-09)


### Features

* **sound:** add "Pink Noise" ([cf02709](https://github.com/mateusfg7/Noisekun/commit/cf027096fac311f016d88f62b7ca76cf5f88964f))
* **sound:** add "White Noise" ([c117af8](https://github.com/mateusfg7/Noisekun/commit/c117af8239d922040701a0e0302571bb7ef3aacb))
* **sound:** add fade effect on play/pause sound ([019b9ee](https://github.com/mateusfg7/Noisekun/commit/019b9eecd2d9e1330c25525e4261df858f0e4bc7)), closes [#L1295](https://github.com/mateusfg7/Noisekun/issues/L1295) [#L1356C13-L1356C13](https://github.com/mateusfg7/Noisekun/issues/L1356C13-L1356C13) [#249](https://github.com/mateusfg7/Noisekun/issues/249)
* **ui:** add toggle-muted function to global volume button ([e38df19](https://github.com/mateusfg7/Noisekun/commit/e38df196420ad830ca2050b2b0d7e3870238003b)), closes [#506](https://github.com/mateusfg7/Noisekun/issues/506)

## [0.4.1](https://github.com/mateusfg7/Noisekun/compare/0.4.0...0.4.1) (2023-08-07)


### Bug Fixes

* **ui:** make theme persistent ([600556b](https://github.com/mateusfg7/Noisekun/commit/600556b74d55c018b0312ee9d457655ce97f15f9))

## [0.4.0](https://github.com/mateusfg7/Noisekun/compare/0.3.0...0.4.0) (2023-08-07)


### Features

* **tailwind:** add new theme color alias ([9d679c1](https://github.com/mateusfg7/Noisekun/commit/9d679c1aac6e0034b247d94781a1344baa7fb579))
* **types:** add svg type ([7c7af8c](https://github.com/mateusfg7/Noisekun/commit/7c7af8cf6455ac4ad9ce44cb702a4d072df98187))
* **ui:** implement themes and refactor some components ([c851eb1](https://github.com/mateusfg7/Noisekun/commit/c851eb1e9154dbe8cf19efd2a38bc83adfb4cf3b))
* **ui:** improvements on footer style ([e68cffe](https://github.com/mateusfg7/Noisekun/commit/e68cffea2af6444ba957f2f8a81babdc7502dc0d))
* **ui:** update layout sizes ([a029e22](https://github.com/mateusfg7/Noisekun/commit/a029e2247cc7b0c4c7e0e12d28f855ee9d14c0b0))

## [0.3.0](https://github.com/mateusfg7/Noisekun/compare/0.2.0...0.3.0) (2023-08-04)


### Features

* **analytics:** add umami script ([0df46a7](https://github.com/mateusfg7/Noisekun/commit/0df46a7879796b21c5190066974c596a1da11a75))
* **assets:** add Google Cloud Storage bucket url instead local path ([2d8180f](https://github.com/mateusfg7/Noisekun/commit/2d8180f6f62c6d27d04b2c30679528d48840921d))

## [0.2.0](https://github.com/mateusfg7/Noisekun/compare/b14b514364f551d14baa5c40b1eafad37723ef7a...0.2.0) (2023-08-04)


### ⚠ BREAKING CHANGES

* **pwa:** Temporarily removes PWA support as the https://github.com/shadowwalker/next-pwa
project is no longer being actively maintained.
* Disable analytics feature by Umami service
* **howler:** Fade in/out is now disabled
* the ci workflow is not used

### Features

* **_app:** include `Head` component and HTML metadata ([041d70c](https://github.com/mateusfg7/Noisekun/commit/041d70c31631306b37829e10b74f66d6e07b03ba))
* **_documment:** add icon links and manifest to `Head` ([aff6e99](https://github.com/mateusfg7/Noisekun/commit/aff6e9909311b526889caf83f5e956ed7a097f13))
* **a11y:** add title on background menu button ([d97240c](https://github.com/mateusfg7/Noisekun/commit/d97240c6494fedda0e53be7df78e693f13178a63))
* **a11y:** improve global volume controller ([c96996e](https://github.com/mateusfg7/Noisekun/commit/c96996e0eec26d7f37053e5aa9c1dd9f742ea139))
* **a11y:** improve sound volume controller ([e20113d](https://github.com/mateusfg7/Noisekun/commit/e20113d076bb5076caf25d3bcac705bfdaafdf7b))
* **access:** add title and name on volume controller inputs ([8fa7808](https://github.com/mateusfg7/Noisekun/commit/8fa7808bb9537deef3c631041eff3a9c89e6f9ce)), closes [#378](https://github.com/mateusfg7/Noisekun/issues/378)
* add "use client" on home page ([0d0e858](https://github.com/mateusfg7/Noisekun/commit/0d0e858b89ce0d43c2fcbe965841fd02b797390c))
* add commitzen configuration ([bf6bc1f](https://github.com/mateusfg7/Noisekun/commit/bf6bc1f7df4132b699eaf0047118b042a65dfd96)), closes [#20](https://github.com/mateusfg7/Noisekun/issues/20)
* add global volume controller on header ([ed07f92](https://github.com/mateusfg7/Noisekun/commit/ed07f92f3b833b82384e1d39aa0212ad5d873215))
* add new meta information ([a2c4fb5](https://github.com/mateusfg7/Noisekun/commit/a2c4fb5b64d1ad96bfe8ea1cf80aa52778fae72e))
* add shimmer effect ([ae6a9b9](https://github.com/mateusfg7/Noisekun/commit/ae6a9b98d1a2d6ac0eadd2a19b8c34ac8afaaaec))
* add shimmer effect load ([5e26059](https://github.com/mateusfg7/Noisekun/commit/5e26059724930b07d7e847e263651c5f4ccd3801))
* add target on footer links ([aed5628](https://github.com/mateusfg7/Noisekun/commit/aed56284961c008c5f389c9c779f3ea5b37b797f))
* **assets:** add brown-noise icon ([b381a40](https://github.com/mateusfg7/Noisekun/commit/b381a40637c6699c2e89972eb4783386191f2db8))
* **assets:** add brown-noise2.svg ([c2f0101](https://github.com/mateusfg7/Noisekun/commit/c2f0101d3233b197eb6de71831537c2ccebc9ed2))
* **assets:** add brown-noise3.svg ([1357bf0](https://github.com/mateusfg7/Noisekun/commit/1357bf044f262518755dcb9141851d0ee85e5fda))
* **assets:** add new background gifs ([777bec0](https://github.com/mateusfg7/Noisekun/commit/777bec043b6b805ebc7c44fff557f2ffa588d3ae))
* **assets:** add new icons of different sizes ([f698c13](https://github.com/mateusfg7/Noisekun/commit/f698c13d5deaf385b8b6cb6a70d095bd594658c8))
* **assets:** add new svg icons ([057437d](https://github.com/mateusfg7/Noisekun/commit/057437d1e4e01a4d5a1288bea8b61de721d1b102))
* **assets:** add washing machine icon ([c3f4363](https://github.com/mateusfg7/Noisekun/commit/c3f4363c9f27585b00c39c70c00f351ebccdfbd6))
* **assets:** add waterfall icon ([73f4b1a](https://github.com/mateusfg7/Noisekun/commit/73f4b1ad7bcb43bf896fff0584338a29a9aa2bed))
* **assets:** create a `manifest.json` file ([7a8bff8](https://github.com/mateusfg7/Noisekun/commit/7a8bff8117c2182e287fc9530d10ce71668fbeab))
* **assets:** update `cave.svg` ([9d03cd2](https://github.com/mateusfg7/Noisekun/commit/9d03cd2aa0d92d99ae053663ac133711a440b5d5)), closes [#171](https://github.com/mateusfg7/Noisekun/issues/171)
* **assets:** update favicon ([621f481](https://github.com/mateusfg7/Noisekun/commit/621f481a0b5656c0b86313f0167834768ca88b0a))
* **assets:** update stream-water icon ([c830218](https://github.com/mateusfg7/Noisekun/commit/c830218af9df8594536340a8583f837b2a58877f))
* **assets:** update waterfall icon ([bcc08d0](https://github.com/mateusfg7/Noisekun/commit/bcc08d0ed58cd4fbd60ae84365dabacb35acf4b7))
* **audios:** rename sounds ([35694e7](https://github.com/mateusfg7/Noisekun/commit/35694e7f0534d58c29d830aa15eb4497286b298e))
* **background:** update background colors ([5465f2a](https://github.com/mateusfg7/Noisekun/commit/5465f2aea21c569b79ae168e7e6cabe199264455))
* **background:** update background effect ([66a9cb1](https://github.com/mateusfg7/Noisekun/commit/66a9cb12cc13c3964e1def27dcd49c5f8c744cc8))
* **config:** theme config ([725d594](https://github.com/mateusfg7/Noisekun/commit/725d5949f873736f6f58de4f124f1e0333c492ec))
* **config:** theme config ([bd5a925](https://github.com/mateusfg7/Noisekun/commit/bd5a925813c4cf1c5befe1cc645c8d389dd97e7a))
* create BackgroundMenu component ([68b53af](https://github.com/mateusfg7/Noisekun/commit/68b53af531d3cd12b126e1fa97601873addf4a38))
* create GlobalVolumeController ([6e5a730](https://github.com/mateusfg7/Noisekun/commit/6e5a730c38e90932e4f4bc77d230ef6f625a0e16))
* **css:** create main.css ([4f30128](https://github.com/mateusfg7/Noisekun/commit/4f30128b14190c271829151d23961cf8875fe1c1))
* **dev:** configure husky with commitzen ([f37182a](https://github.com/mateusfg7/Noisekun/commit/f37182a3a0583969d6c4db7a5b4e36b64128f05d)), closes [#20](https://github.com/mateusfg7/Noisekun/issues/20)
* **favicons:** update logo ([635b04d](https://github.com/mateusfg7/Noisekun/commit/635b04df54a5d96f4f65340a4d4a999a69318f5a))
* **footer:** update footer ([f168de3](https://github.com/mateusfg7/Noisekun/commit/f168de363cd04c65bb8a72229cdde644fdd12861)), closes [#10](https://github.com/mateusfg7/Noisekun/issues/10)
* **header:** add BackgroundMenu on Header component ([7ff4be2](https://github.com/mateusfg7/Noisekun/commit/7ff4be28f3a7ca0c04c0ce1f43fb58dcaab1e2ae))
* **hook:** create new custom hook ([bfa2890](https://github.com/mateusfg7/Noisekun/commit/bfa2890d2440022f9144d09c3843ff4c76ca4757))
* **hook:** use new hook ([94bb2c7](https://github.com/mateusfg7/Noisekun/commit/94bb2c7f88b824c3257b62876579c0ed60444069))
* **howler.js:** set initial use of howler.js ([be200da](https://github.com/mateusfg7/Noisekun/commit/be200da338fba862a4d953b243207546b495f052))
* **icon:** new icons ([74f864f](https://github.com/mateusfg7/Noisekun/commit/74f864f61d3dbb2eb5bf2036f946cd4ca86a135c))
* **icons:** update coffee icon ([8f00530](https://github.com/mateusfg7/Noisekun/commit/8f00530ba8001066174052456ec5e65fe8d9c69d))
* **icons:** update drops icon ([a504196](https://github.com/mateusfg7/Noisekun/commit/a5041965624de6fc556ea1c8c0078ae22214decb))
* **icons:** update night icon ([1ff3dd7](https://github.com/mateusfg7/Noisekun/commit/1ff3dd708dbba3c680b8bb5b4839b36dc518fd75))
* **icons:** update rain icon ([e1e83c7](https://github.com/mateusfg7/Noisekun/commit/e1e83c78bf6720cb2aba6edf7f9274b1d6d84c99))
* **icons:** update storm icon ([4bd35c0](https://github.com/mateusfg7/Noisekun/commit/4bd35c05283250a522ccfc9c1809a4a480715ce7))
* **icons:** update stream-water and waves icon ([66cacb0](https://github.com/mateusfg7/Noisekun/commit/66cacb0182c32e34caf8c9826def42c3b8a00452))
* **icons:** update train icon ([ec3d71b](https://github.com/mateusfg7/Noisekun/commit/ec3d71b12c44e0e93b4eff039ee8f58c14fef3f7))
* **icons:** update washing-machine icon ([456b085](https://github.com/mateusfg7/Noisekun/commit/456b085259affd2fdb8bc1be383161d8974e5713))
* **icons:** update waves icon ([e39aec3](https://github.com/mateusfg7/Noisekun/commit/e39aec3a9231bef17409494b8abcd21debcd3fe6))
* **icons:** update waves icon ([7049a50](https://github.com/mateusfg7/Noisekun/commit/7049a5040e9e45f20acc197afea88a82fb905d2f))
* **icons:** update wind icon ([54cfbb4](https://github.com/mateusfg7/Noisekun/commit/54cfbb4ea2a757ac24d67a8f98e42acf52199b19))
* **icon:** uses new icon ([7ccb029](https://github.com/mateusfg7/Noisekun/commit/7ccb0296042179648c12299bdc5a3bf8246d0ffc))
* **images:** add 'alt' attribute to `Image` on Sound components ([bf182ae](https://github.com/mateusfg7/Noisekun/commit/bf182ae4d68c2deb88e25389a1d6c003345bc336))
* import main css file on _app ([c84513c](https://github.com/mateusfg7/Noisekun/commit/c84513c5a6326a6d2c355cf0fcaa67428cb3b2ce))
* improve manifest.json ([4bffd22](https://github.com/mateusfg7/Noisekun/commit/4bffd22c55989ca7ae512b82510ababfa51a6d1e))
* include brown-noise2 sound info on `sounds.json` ([9249dbb](https://github.com/mateusfg7/Noisekun/commit/9249dbb33cc70b311f280110bfbbc4987397d3ae))
* include brown-noise3 sound info on `sounds.json` ([07681dd](https://github.com/mateusfg7/Noisekun/commit/07681ddd8b8bd1f3714ae944013f4e3368efa899))
* include washingmachine sound info on `sounds.json` ([36f18dc](https://github.com/mateusfg7/Noisekun/commit/36f18dc2de33efaa84599b50ca91a3e4abbae73b))
* include waterfall sound info on `sounds.json` ([01e4928](https://github.com/mateusfg7/Noisekun/commit/01e4928b6a3fd7a36606616e584781bca9ac636e))
* **info:** update footer links ([e6b8da4](https://github.com/mateusfg7/Noisekun/commit/e6b8da466e1b00daa3490effd38e1327ea7c6355))
* install and configure husky ([52f035f](https://github.com/mateusfg7/Noisekun/commit/52f035f0b0131ae4064824b7ca2a520da911f023))
* **manifest.json:** update background color ([29ee74e](https://github.com/mateusfg7/Noisekun/commit/29ee74ed6681af3bbe6bcc12676154ea62be579b))
* **manifest:** update property ([d648593](https://github.com/mateusfg7/Noisekun/commit/d6485937ea7061b6271b10f88aec3936b63f49e6))
* **metadata:** update theme color ([8ad7cbf](https://github.com/mateusfg7/Noisekun/commit/8ad7cbfc9d9a84c561795e06ed6049e2065392fc))
* **pwa:** add offline page ([52451b2](https://github.com/mateusfg7/Noisekun/commit/52451b2de5c38772bb6e61fc92e62d121008fd0f))
* **root:** added Jest framework for testing ([40d9997](https://github.com/mateusfg7/Noisekun/commit/40d99972767cd197ba6ec4a7183d02b44811a29e)), closes [#21](https://github.com/mateusfg7/Noisekun/issues/21)
* save background on local storage ([81bbf2b](https://github.com/mateusfg7/Noisekun/commit/81bbf2b6a3a0f42708ce84494f657cee3767a2bd))
* **seo:** add alt string on footer main logo ([2d8086e](https://github.com/mateusfg7/Noisekun/commit/2d8086e99aeb7d4961f28006442c117675b650d4))
* **seo:** add title property to `Sound` component ([5c6f16a](https://github.com/mateusfg7/Noisekun/commit/5c6f16ab0d7fd1373dd23adc3805818f30e5fe12))
* set volume based on global volume ([1bcd29d](https://github.com/mateusfg7/Noisekun/commit/1bcd29d219130f8aa328725cbce5e02019b7278e))
* **sound:** add brown-noise sound ([d8c342c](https://github.com/mateusfg7/Noisekun/commit/d8c342cecb99de3807e3926de516b6a5562d71eb))
* **sound:** add brown-noise2.ogg ([691e79b](https://github.com/mateusfg7/Noisekun/commit/691e79b13edc80ead8ecdc397fa06467c157bc67))
* **sound:** add brown-noise3.ogg ([02ee48d](https://github.com/mateusfg7/Noisekun/commit/02ee48de54f3c738019ff8a961cefe2ed0ee41f3))
* **sound:** change leaf sound ([fad26a5](https://github.com/mateusfg7/Noisekun/commit/fad26a5bf2a88679e6a3dd771395805b7e6b8510))
* **sound:** import svg icons and remove old icon-fonts ([cd4c0c6](https://github.com/mateusfg7/Noisekun/commit/cd4c0c615d2d92ad3ba8487494bace1cf7754cfa))
* **sounds.json:** add brown-noise metadata ([0974436](https://github.com/mateusfg7/Noisekun/commit/09744361ff4f3ae6d7926c42554513f678765bb1))
* **sounds:** add new sounds ([b8cfb7e](https://github.com/mateusfg7/Noisekun/commit/b8cfb7ee6227f15fbf6b19b26b266da579e7108a))
* **sounds:** update sounds file type ([8e2a396](https://github.com/mateusfg7/Noisekun/commit/8e2a3965d6be5ad1d5954203b935029d01da32fe))
* **sound:** update file path of an sound on `Sound` component ([bb2195c](https://github.com/mateusfg7/Noisekun/commit/bb2195cd4b7630b1e60802117b7f50c160eb0d25))
* **sound:** update image props on `Sound` component ([8cf19d8](https://github.com/mateusfg7/Noisekun/commit/8cf19d8ec4f9896512425b150d7d1ce246bdc1dc))
* **store:** add background store ([d18d303](https://github.com/mateusfg7/Noisekun/commit/d18d30306fa072147cfb19e959cbd667b75d8bb7))
* **stores:** create GlobalVolumeStore ([a2bf22d](https://github.com/mateusfg7/Noisekun/commit/a2bf22d39d4938313461e7228de0e0b0504bd961))
* **style:** add footer style ([5fd40d6](https://github.com/mateusfg7/Noisekun/commit/5fd40d671f77dda1de56d2dfac584d5a58391934)), closes [#10](https://github.com/mateusfg7/Noisekun/issues/10)
* **style:** change background placeholder ([e4324f1](https://github.com/mateusfg7/Noisekun/commit/e4324f1909141308ee49a1c10818157680179b57))
* **style:** import footer on App.tsx ([592b9ed](https://github.com/mateusfg7/Noisekun/commit/592b9ed7d7132829128104c896f5849762b70b1b)), closes [#10](https://github.com/mateusfg7/Noisekun/issues/10)
* **style:** initial footer component ([24a2ae8](https://github.com/mateusfg7/Noisekun/commit/24a2ae89c336d689f7796140de9b97795c5aa0be)), closes [#10](https://github.com/mateusfg7/Noisekun/issues/10)
* **style:** margin between configs ([1a65a15](https://github.com/mateusfg7/Noisekun/commit/1a65a15712bf9320853915aeb4574d458c8cd1a1))
* **style:** update Header style ([5ceda42](https://github.com/mateusfg7/Noisekun/commit/5ceda42e527358c433dc60fe52ed0e78cb91eb7e))
* **syle:** update ligth theme ([a3b03f8](https://github.com/mateusfg7/Noisekun/commit/a3b03f806779b785a681d2fa3bc24f4ee5259271))
* **tailwind:** add main color ([c2816e1](https://github.com/mateusfg7/Noisekun/commit/c2816e1fd8166c4ce98bd6ab1c54378ba51689c2))
* **tailwind:** convert Footer component ([cfc3a58](https://github.com/mateusfg7/Noisekun/commit/cfc3a582bad1a6bf5d096b15b22f7eae2477f9e5))
* **tailwind:** convert Header component ([35a4fbb](https://github.com/mateusfg7/Noisekun/commit/35a4fbba5f0441a0607460e81e8f5f2695bf99a0))
* **tailwind:** convert index page ([4c0d3f9](https://github.com/mateusfg7/Noisekun/commit/4c0d3f97669c3ef5a884481145c7e423f5326809))
* **tailwind:** convert offline page ([f4fd32f](https://github.com/mateusfg7/Noisekun/commit/f4fd32f242ad10471637fb46250d5aab57080309))
* **tailwind:** convert Sound component ([a60fa97](https://github.com/mateusfg7/Noisekun/commit/a60fa97caf371ba1aa6d07a75051a8b3beecde66))
* **tailwind:** convert VolumeController component ([04e7504](https://github.com/mateusfg7/Noisekun/commit/04e75041ae5d21ab938aa0ebf6b2c5a797e52749))
* **tailwind:** create additional configs for tailwindcss ([116db49](https://github.com/mateusfg7/Noisekun/commit/116db498a7b35f24ed8f996abe0d8d4337341a5e))
* **tailwind:** create background-change keyframe and animation ([4cd0388](https://github.com/mateusfg7/Noisekun/commit/4cd03887c362ec66c36da5bea52827e495d1e8bb))
* **tailwind:** decrease background-change-sm animation time ([16f15b4](https://github.com/mateusfg7/Noisekun/commit/16f15b494b39c020e6bca5936c084452f3b8b239))
* **tailwind:** icrement themes ([25c13b0](https://github.com/mateusfg7/Noisekun/commit/25c13b0140974b19c6da3a36bb99cddc329679e9))
* **tailwind:** update shadow-sound ([a0baaa8](https://github.com/mateusfg7/Noisekun/commit/a0baaa871fb460da4dd1c5e29d88e81740eef626))
* **theme:** import theme ([295cf4b](https://github.com/mateusfg7/Noisekun/commit/295cf4bc75d88d60a9e26850b1f396b65e5b9448))
* **theme:** new theme ([0739ed4](https://github.com/mateusfg7/Noisekun/commit/0739ed4285752ec64909910544b6bc2d2b26210c))
* **theme:** new theme ([d4a2ea2](https://github.com/mateusfg7/Noisekun/commit/d4a2ea2225e42ab518cb6a72cf9cc0fdb3a52eb1))
* **theme:** theme object ([039102b](https://github.com/mateusfg7/Noisekun/commit/039102b5f3a74dd8606430bc3306b50003c15f97))
* **theme:** theme on Configurations ([9872b69](https://github.com/mateusfg7/Noisekun/commit/9872b69c971ec31a2bed42c115989dd2ea0aba23))
* **theme:** theme on Footer ([0c9b50b](https://github.com/mateusfg7/Noisekun/commit/0c9b50b424352448b5b22b5b12dbdfeb9c67d8e1))
* **theme:** theme on Header ([93445eb](https://github.com/mateusfg7/Noisekun/commit/93445eb76186e141f4eef880d467deb99d04df1f))
* **theme:** theme on Sound ([034b2da](https://github.com/mateusfg7/Noisekun/commit/034b2da113a9365f3928f8003e4bb2d166615668))
* **theme:** theme on VolumeController ([3f28af0](https://github.com/mateusfg7/Noisekun/commit/3f28af00673ab4024fb7d36e3f82c0943e21968b))
* **theme:** toogle theme function ([32457c1](https://github.com/mateusfg7/Noisekun/commit/32457c1c4863143cf63656d3a1dac69ef1c5ea61))
* **theme:** toogle theme function ([200cc71](https://github.com/mateusfg7/Noisekun/commit/200cc71e63a661b9f4731c3a1af9f09d33b3ca67))
* **theme:** update theme ([bfad6d5](https://github.com/mateusfg7/Noisekun/commit/bfad6d58d45642fd8eacbe399623158cc6fd1493))
* **theme:** update theme ([9a73279](https://github.com/mateusfg7/Noisekun/commit/9a7327970a9fb0a71cf696cdee30df3d3171e72c))
* **theme:** update theme function ([ec1ace4](https://github.com/mateusfg7/Noisekun/commit/ec1ace452fe3a9da964dea22d1b14b1b81c07792))
* **theme:** use ThemeProvider ([8300909](https://github.com/mateusfg7/Noisekun/commit/8300909f902ed3e9f14191a9b5eb3b65d4b57502))
* **type:** add new types ([bbab41b](https://github.com/mateusfg7/Noisekun/commit/bbab41b5afcf546e45dff3709ae6c1b9cc9d43fc))
* **type:** new type interface ([fb4f107](https://github.com/mateusfg7/Noisekun/commit/fb4f107cca8fbe8b9967da226cbbfe34676a2e9b))
* **type:** update type interfaces ([f776444](https://github.com/mateusfg7/Noisekun/commit/f776444789e7b5220a8910854bebb80a82c33e21))
* **type:** update types ([4b63fa5](https://github.com/mateusfg7/Noisekun/commit/4b63fa530a5ff81201ca2be7afb8e09ed13a941a))
* **type:** update types ([b18b7b8](https://github.com/mateusfg7/Noisekun/commit/b18b7b87d106091ffc7d3c66f95fcdd95465cf32))
* **ui:** add background-change animation on body ([bf2c818](https://github.com/mateusfg7/Noisekun/commit/bf2c8182eac020a49734c37295c8088fe081ef01))
* **ui:** add hover style on `VolumeController` component ([f3af14f](https://github.com/mateusfg7/Noisekun/commit/f3af14f9230bc2ba3e16358f58f2e90ae85a58b7))
* **ui:** add margin to `AudiosBlock` component ([252c1fd](https://github.com/mateusfg7/Noisekun/commit/252c1fd714764bb1ad9b7f2b49fcefb2ad1012e6))
* **ui:** add nunito as body font ([1271836](https://github.com/mateusfg7/Noisekun/commit/1271836c1cbb02f3586f3e48c730f20b7104f062))
* **ui:** add shimmer effect for loading sounds ([e31c360](https://github.com/mateusfg7/Noisekun/commit/e31c360d64befa0fa21cb5a8ed2d65488199ae21))
* **ui:** background change menu improvements ([64b2f30](https://github.com/mateusfg7/Noisekun/commit/64b2f30180912d0c289f04637c8ef08342dd6582))
* **ui:** change background menu icon ([2d017cc](https://github.com/mateusfg7/Noisekun/commit/2d017cce03ad2a71643e0da94455bc86c0a5cdb0))
* **ui:** change border-radius of Sound component ([fd5b645](https://github.com/mateusfg7/Noisekun/commit/fd5b64594368f8c7d70a871207fa2f9f0d776a6a))
* **ui:** change box-shadow style of Header component ([4f7b42e](https://github.com/mateusfg7/Noisekun/commit/4f7b42e3216b44244d29f986a470d4cc33f73abb))
* **ui:** change license icon ([04f5714](https://github.com/mateusfg7/Noisekun/commit/04f5714b559e9184f6ac9d2d5b2baef086021b82))
* **ui:** create "disabled" class for unloaded sounds ([11c7677](https://github.com/mateusfg7/Noisekun/commit/11c76779641f764b122029209ea3b2822ad5f160))
* **ui:** create styled scrollbar ([c79eea4](https://github.com/mateusfg7/Noisekun/commit/c79eea428370cba3e07e0c07971c3aab586069b1)), closes [#162](https://github.com/mateusfg7/Noisekun/issues/162)
* **ui:** decrease slider thumb size on VolumeController ([710bf69](https://github.com/mateusfg7/Noisekun/commit/710bf69f46a20a49f5c620f6a1eec725d4adb5af))
* **ui:** increase title weight ([212222c](https://github.com/mateusfg7/Noisekun/commit/212222c02024970daeb2a6a2a8d693b000a7ac63))
* **ui:** remove border-radius transition on Sound component ([94e290b](https://github.com/mateusfg7/Noisekun/commit/94e290ba7318a53e6f87613d6858baedf904c6e1))
* **ui:** remove footer background ([cc4beee](https://github.com/mateusfg7/Noisekun/commit/cc4beeeba20d9f0e21fc4b7bf02b02a5b46dd777))
* **ui:** remove scrollbar on background menu ([8b0210d](https://github.com/mateusfg7/Noisekun/commit/8b0210d4885675fb6b2cc46027e881650dad964b))
* **ui:** remove shadow of `Sound` when in <800px screen ([6f712bf](https://github.com/mateusfg7/Noisekun/commit/6f712bf91e6ad0649f4d3a873385f17ad273e016))
* **ui:** setup next fonts with "Nunito" font ([c6cc727](https://github.com/mateusfg7/Noisekun/commit/c6cc72742c10e95786615d69ee0eaf33e4478175))
* **ui:** update background color effect ([7fd23e1](https://github.com/mateusfg7/Noisekun/commit/7fd23e17992c1456f0264b355b5001a452da7e06))
* **ui:** update background color list ([747bec7](https://github.com/mateusfg7/Noisekun/commit/747bec7a8610d76419ff68bee046ef1b8ded5aca))
* **ui:** update background menu styles ([777f190](https://github.com/mateusfg7/Noisekun/commit/777f190985bc70fe205f711753c89d0ded5340eb))
* **ui:** update background style of `SoundButton` ([dddfb98](https://github.com/mateusfg7/Noisekun/commit/dddfb98e4aeaaa9d3288903eaa171db2947911ca))
* **ui:** update BackgroundChange styles ([d3378de](https://github.com/mateusfg7/Noisekun/commit/d3378de18562e0b3a07de56f3515a575dcf4a5fd))
* **ui:** update BackgroundMenu styles ([4a48c10](https://github.com/mateusfg7/Noisekun/commit/4a48c10f605d2f15fc327bf74ecc12b6013f5f5a))
* **ui:** update box-shadow from sound component ([8ce96c3](https://github.com/mateusfg7/Noisekun/commit/8ce96c38486e991331dd6da90b9b3432558ebf6b))
* **ui:** update font weight of header title ([c2241b3](https://github.com/mateusfg7/Noisekun/commit/c2241b37e32fc8d7b9127ee785bcc627dae65a09))
* **ui:** update gap between sounds ([c3a8ac3](https://github.com/mateusfg7/Noisekun/commit/c3a8ac328cda9a84146cdf4adad68f6da6f84af0))
* **ui:** update header box-shadown and title color ([7d55666](https://github.com/mateusfg7/Noisekun/commit/7d55666b17a117d7ef4d4393872e7bee136f10a1))
* **ui:** update slider background of `VolumeController` component ([136b8b0](https://github.com/mateusfg7/Noisekun/commit/136b8b07ee4c0a48b7c9892cc343292c4486935e))
* **ui:** update sound button style ([efb17c7](https://github.com/mateusfg7/Noisekun/commit/efb17c76ee812c09bbab752e57679ac4923693eb))
* **ui:** update volume controller height ([d84fb35](https://github.com/mateusfg7/Noisekun/commit/d84fb35dfb32af795ad3236dccec9f3793ebe39a))
* **ui:** update volume controller style ([643665e](https://github.com/mateusfg7/Noisekun/commit/643665e77e5c1e55700e24f6c49f5e12f920cff3))
* **ui:** use feather-icons instead phosphor-icons ([c682b21](https://github.com/mateusfg7/Noisekun/commit/c682b2104c20026b3f267a1d5c5c5d3b0414be8d))
* **umami:** add class envent-track on Sound component ([37f2d6f](https://github.com/mateusfg7/Noisekun/commit/37f2d6f8774ce2a095f1014b114b05a1c3415b03))
* **umami:** add class event-track to Footer component ([6b91325](https://github.com/mateusfg7/Noisekun/commit/6b9132518682b5660bd724577ea0554bd5cf52dc))
* **umami:** add class event-track to title on Header component ([4d3622d](https://github.com/mateusfg7/Noisekun/commit/4d3622d791d669a79b7d92cfe891da36357fcaa2))
* **umami:** add property `data-domains` to umami script ([f06a150](https://github.com/mateusfg7/Noisekun/commit/f06a1504eeb326feeb86cecce452bbeb02b3795d))
* **umami:** setup umami script on `_app` ([35b2073](https://github.com/mateusfg7/Noisekun/commit/35b2073d9fac69afe554c25c6502fff01575d141))
* update background color list ([6dbf046](https://github.com/mateusfg7/Noisekun/commit/6dbf046172fc76add53caa68ff867f68b56cebf5))
* update background colors ([d537e38](https://github.com/mateusfg7/Noisekun/commit/d537e38d18df80b72c4943018da65c01767472a5))
* update Background ids ([bc1f1e0](https://github.com/mateusfg7/Noisekun/commit/bc1f1e002dbbeee9b552c0de94d12516623be451))
* update meta links ([7a24397](https://github.com/mateusfg7/Noisekun/commit/7a2439758152e3884a52894ae3b608398d38ebb3))
* update sound grid layout ([6c9eed8](https://github.com/mateusfg7/Noisekun/commit/6c9eed801530722701079a14c16d423f406732e5))
* use `<Link>` as wrapper of `<a>` on header title ([b91f3ab](https://github.com/mateusfg7/Noisekun/commit/b91f3ab51e510a79d475d3aa037ef44e35332d3f))
* use `localStorage` to save volume slider position ([8275964](https://github.com/mateusfg7/Noisekun/commit/82759644d50c9e5421ec815a2ea1e2451e0ee95f))
* use dynamic backgrounds on index ([619f490](https://github.com/mateusfg7/Noisekun/commit/619f490961d70770cd957de9aea1ab9de1670aab))
* use HTML5 streaming on sounds ([af49f61](https://github.com/mateusfg7/Noisekun/commit/af49f61976e75a2b8b3d8df8629d7a980319ce1e))
* **ux/ui:** update footer ([80f8b09](https://github.com/mateusfg7/Noisekun/commit/80f8b09e338cca75f1b62ac133b324173686632c))
* **ux:** decrease global volume width ([b6fba3a](https://github.com/mateusfg7/Noisekun/commit/b6fba3a3decda287a1b8fa28b56d7a098ee43f22))
* **ux:** fix header on top ([83f2551](https://github.com/mateusfg7/Noisekun/commit/83f2551611f26d14b93da7a42e13abd84a9a66e8))
* **ux:** improves header responsiveness ([0d8b5e0](https://github.com/mateusfg7/Noisekun/commit/0d8b5e0e728450b09468a02e79aa0f1112aeaaaf))
* **ux:** increase footer text size on small screens ([874d02c](https://github.com/mateusfg7/Noisekun/commit/874d02c645c65fccbb196353931aa0a97276a95b))
* **ux:** update sound grid ([3896895](https://github.com/mateusfg7/Noisekun/commit/3896895bd407bbe9622481fe7f1d7888bf0ad119))
* **ux:** update sound grid order ([0bfe73e](https://github.com/mateusfg7/Noisekun/commit/0bfe73e3a4ed3a1b2837c339592bab1c35377954))
* **viewport:** remove `user-scalable="no"` parameter on viewport meta ([da26196](https://github.com/mateusfg7/Noisekun/commit/da26196a69a924472a7c93ab3389927dc1740fae))


### Bug Fixes

* _app errors ([a00192a](https://github.com/mateusfg7/Noisekun/commit/a00192acac7fb78ee64fbc948827788f79810588))
* **a11y:** add missing titles on sounds ([a181856](https://github.com/mateusfg7/Noisekun/commit/a181856eb27fab8eae171aa752b82bb223e3a51e)), closes [#387](https://github.com/mateusfg7/Noisekun/issues/387)
* audio loop ([31fd33b](https://github.com/mateusfg7/Noisekun/commit/31fd33b844c88d890bbfb6d19e419cff1e098de4)), closes [#363](https://github.com/mateusfg7/Noisekun/issues/363)
* cannot add property noFallthroughCasesInSwitch ([ff87227](https://github.com/mateusfg7/Noisekun/commit/ff872278319a6e7e488aa747a0287f77571719b3)), closes [#53](https://github.com/mateusfg7/Noisekun/issues/53)
* clickable sound styles when sound is not loaded ([d0a101d](https://github.com/mateusfg7/Noisekun/commit/d0a101dc0daa3a276a9b473eea8f21fe87ae3d3b))
* **deps:** pin dependencies ([2b63ed1](https://github.com/mateusfg7/Noisekun/commit/2b63ed1090be1dedbb061c0a9b93cd74b5cf05cc))
* **deps:** pin dependencies ([90c35b1](https://github.com/mateusfg7/Noisekun/commit/90c35b1f764fe2e1716c1f13ca547236e8825cad))
* **deps:** pin dependencies ([1fddb62](https://github.com/mateusfg7/Noisekun/commit/1fddb625419cbbd6e81e7ac5e1a51a6efe842654))
* **deps:** pin dependency @headlessui/react to 1.6.6 ([5a663a4](https://github.com/mateusfg7/Noisekun/commit/5a663a47873c7356e11fe971189c074ce575a291))
* **deps:** pin dependency @types/jest to v26.0.24 ([c9ae688](https://github.com/mateusfg7/Noisekun/commit/c9ae68865dacc783b04987d4a7a01a11730005c6))
* **deps:** pin dependency next-pwa to 5.4.4 ([4f3dc25](https://github.com/mateusfg7/Noisekun/commit/4f3dc2521058ff304edc76dd7dfbb127ff636de8))
* **deps:** pin dependency react-icons to 4.4.0 ([16130e3](https://github.com/mateusfg7/Noisekun/commit/16130e3524e6a9c1b2fb4e51b5e4ec4d675359ac))
* **deps:** pin dependency tailwind-scrollbar-hide to 1.1.7 ([c6fa894](https://github.com/mateusfg7/Noisekun/commit/c6fa89454c5b6e09d1d6a0753af60ba5f9461714))
* **deps:** roll back dependency next to 12.0.5-canary.6 ([2cf9e34](https://github.com/mateusfg7/Noisekun/commit/2cf9e349c3c680afc7147dcae2a3cba940a399b7))
* **deps:** update dependency @fortawesome/fontawesome-svg-core to v6 ([fa26e71](https://github.com/mateusfg7/Noisekun/commit/fa26e7173a51f780738a3110fcf30e37f5fd7284))
* **deps:** update dependency @fortawesome/free-solid-svg-icons to v6 ([1f43da6](https://github.com/mateusfg7/Noisekun/commit/1f43da6144ac318f92e206490be026de253b1062))
* **deps:** update dependency @fortawesome/react-fontawesome to v0.2.0 ([d03cfc9](https://github.com/mateusfg7/Noisekun/commit/d03cfc95141253e41c01c3705d737c0df38fdf53))
* **deps:** update dependency @headlessui/react to v1.7.10 ([65129df](https://github.com/mateusfg7/Noisekun/commit/65129df1332e1786a8eaa6675a8756001f4083bc))
* **deps:** update dependency @headlessui/react to v1.7.13 ([3ed347c](https://github.com/mateusfg7/Noisekun/commit/3ed347c28674a8ac82355a13523ab8f05f939045))
* **deps:** update dependency @headlessui/react to v1.7.14 ([d6fbf0f](https://github.com/mateusfg7/Noisekun/commit/d6fbf0f952d6e0fb0b3a8d681debacbea64a017e))
* **deps:** update dependency @headlessui/react to v1.7.15 ([0fbdba6](https://github.com/mateusfg7/Noisekun/commit/0fbdba6c98ce23fdb496b1a8499c142efc0fd4c3))
* **deps:** update dependency @headlessui/react to v1.7.2 ([1cd44dc](https://github.com/mateusfg7/Noisekun/commit/1cd44dc2f828ea985849b8bf15bd199d59bd79fc))
* **deps:** update dependency @headlessui/react to v1.7.3 ([9dd438e](https://github.com/mateusfg7/Noisekun/commit/9dd438e57bc351ffbc1948b7945e729b349c3389))
* **deps:** update dependency @headlessui/react to v1.7.5 ([48e75cc](https://github.com/mateusfg7/Noisekun/commit/48e75ccd60e09a20937f134bd2f30ab77f3aa9d7))
* **deps:** update dependency @headlessui/react to v1.7.7 ([61bd62d](https://github.com/mateusfg7/Noisekun/commit/61bd62dc4090242318387daa209ac0d053f6ae82))
* **deps:** update dependency @headlessui/react to v1.7.8 ([6129a48](https://github.com/mateusfg7/Noisekun/commit/6129a48f1e2966e98d0d9e2a27d582f38071c130))
* **deps:** update dependency @testing-library/react to v12 ([cbdae28](https://github.com/mateusfg7/Noisekun/commit/cbdae2811c03dcd6481309f044eb3a898be85c6a))
* **deps:** update dependency @testing-library/user-event to v13 ([fe592c1](https://github.com/mateusfg7/Noisekun/commit/fe592c1fa22f6efc8d076bdbb92a24cf7b11561b))
* **deps:** update dependency @types/jest to v27 ([06cde8a](https://github.com/mateusfg7/Noisekun/commit/06cde8a7afc09b072e4a5af5ab75df4fdde0d37e))
* **deps:** update dependency @types/node to v16 ([7c4c53b](https://github.com/mateusfg7/Noisekun/commit/7c4c53b7779d0d6094b228fe11487115a1f677bb))
* **deps:** update dependency @types/react to v17 ([83d4470](https://github.com/mateusfg7/Noisekun/commit/83d4470f0203f7639b69f459193386777ff28f01))
* **deps:** update dependency @types/react-dom to v17 ([c96293d](https://github.com/mateusfg7/Noisekun/commit/c96293d27c8b142c595cecd50f271f429c3c4752))
* **deps:** update dependency dotenv to v10 ([90bd873](https://github.com/mateusfg7/Noisekun/commit/90bd87338e36acff930c1c056add14c11989cf03))
* **deps:** update dependency next to v12.0.5-canary.10 ([9f7a40a](https://github.com/mateusfg7/Noisekun/commit/9f7a40a5ed6925d47e4e36b7b0f3ac66d670399b))
* **deps:** update dependency next to v12.0.5-canary.11 ([b39a83f](https://github.com/mateusfg7/Noisekun/commit/b39a83ff564ed3b4a963e285bd1ae6e959400f32))
* **deps:** update dependency next to v12.0.5-canary.13 ([a068125](https://github.com/mateusfg7/Noisekun/commit/a068125ae7b97f16d5aabc1ace12765beb41b36f))
* **deps:** update dependency next to v12.0.5-canary.14 ([e436b01](https://github.com/mateusfg7/Noisekun/commit/e436b015d52d4e4e6effd786ed53b7b9c8804948))
* **deps:** update dependency next to v12.0.5-canary.8 ([45ce065](https://github.com/mateusfg7/Noisekun/commit/45ce065b5444693a901ac1c96e07eca9c5535cb4))
* **deps:** update dependency next to v12.0.5-canary.9 ([c96a265](https://github.com/mateusfg7/Noisekun/commit/c96a265a3142b8bd60e7e5104d07f92e3ecd155f))
* **deps:** update dependency next to v12.1.0 [security] ([17f66a8](https://github.com/mateusfg7/Noisekun/commit/17f66a8be5d46cd839d0d72c59af2beb99bf2884))
* **deps:** update dependency next-pwa to v5.4.5 ([af9a197](https://github.com/mateusfg7/Noisekun/commit/af9a197eb8bf95da58a16131cc69064482a5100e))
* **deps:** update dependency next-pwa to v5.4.6 ([99d00d5](https://github.com/mateusfg7/Noisekun/commit/99d00d5c00cd992b98b13917511aa20a075e5aa6))
* **deps:** update dependency next-pwa to v5.4.7 ([1928cd2](https://github.com/mateusfg7/Noisekun/commit/1928cd2d8f2ea061abda17cf6a92e03abd747136))
* **deps:** update dependency next-pwa to v5.5.0 ([9e46be4](https://github.com/mateusfg7/Noisekun/commit/9e46be49cb820069abffb3db95bd6d098c4178b3))
* **deps:** update dependency next-pwa to v5.5.2 ([995e062](https://github.com/mateusfg7/Noisekun/commit/995e06277f0f95b79c4ea9aef8479ac19d4d5755))
* **deps:** update dependency next-pwa to v5.5.4 ([cf0eabf](https://github.com/mateusfg7/Noisekun/commit/cf0eabf420e0fcce39d5f2bb41609d141578223b))
* **deps:** update dependency next-pwa to v5.5.5 ([102f0c0](https://github.com/mateusfg7/Noisekun/commit/102f0c003c0721f16ac768bebaed00e70f2e13b3))
* **deps:** update dependency next-pwa to v5.6.0 ([e0d6c54](https://github.com/mateusfg7/Noisekun/commit/e0d6c542bf3dbb843f94b9df8befc78e76549026))
* **deps:** update dependency react-icons to v4.6.0 ([58e5366](https://github.com/mateusfg7/Noisekun/commit/58e5366dbeb556bb695920b8e580304fb436dc30))
* **deps:** update dependency react-icons to v4.7.1 ([b67a1c8](https://github.com/mateusfg7/Noisekun/commit/b67a1c846f00eb4cdd9dc38b07c5da68713f5c29))
* **deps:** update dependency react-icons to v4.8.0 ([ebbe8b8](https://github.com/mateusfg7/Noisekun/commit/ebbe8b85beee8279b19ea350f5f462d9cbd06f65))
* **deps:** update dependency react-icons to v4.9.0 ([aa70193](https://github.com/mateusfg7/Noisekun/commit/aa70193e3a381937c549683518f0d7f2ce410a10))
* **deps:** update dependency react-scripts to v4.0.3 ([04ff179](https://github.com/mateusfg7/Noisekun/commit/04ff17929f020a77771492b9d94470f5bfae1f05))
* **deps:** update dependency react-switch to v6 ([111107b](https://github.com/mateusfg7/Noisekun/commit/111107b45b8064fff4422bc5e08085e5137e78e3))
* **deps:** update dependency react-switch to v6.1.0 ([8903d6a](https://github.com/mateusfg7/Noisekun/commit/8903d6a19b78fa0c73449436e326c49fdcad0f19))
* **deps:** update dependency react-switch to v7 ([f84c673](https://github.com/mateusfg7/Noisekun/commit/f84c6736fbf2d82e7718b4031a4381ec5fe4260f))
* **deps:** update dependency styled-components to v5.3.5 ([40fd0e5](https://github.com/mateusfg7/Noisekun/commit/40fd0e58af786441a4816e43b55597d7ce19f5cb))
* **deps:** update dependency typescript to v4.4.4 ([19470b9](https://github.com/mateusfg7/Noisekun/commit/19470b96ccf911d89d79e2e89813c9875dcf25ba))
* **deps:** update dependency zustand to v4.1.1 ([1b51ab4](https://github.com/mateusfg7/Noisekun/commit/1b51ab4575cb2e1ef52b9046396bbcca6bc15a63))
* **deps:** update dependency zustand to v4.1.2 ([bd319b3](https://github.com/mateusfg7/Noisekun/commit/bd319b370f532920b01be990f1821ba7111ed697))
* **deps:** update dependency zustand to v4.1.4 ([e673d5a](https://github.com/mateusfg7/Noisekun/commit/e673d5a6a33713e4eae99664898524d2baa14c8d))
* **deps:** update dependency zustand to v4.2.0 ([7e524d7](https://github.com/mateusfg7/Noisekun/commit/7e524d75a225d3989f3619af239abc66b5eefe88))
* **deps:** update dependency zustand to v4.3.2 ([f1f6782](https://github.com/mateusfg7/Noisekun/commit/f1f6782198212ef84a51a38c4aaa682af28ccad3))
* **deps:** update dependency zustand to v4.3.7 ([bc26f37](https://github.com/mateusfg7/Noisekun/commit/bc26f37bcd4041d42d971cca5ad395c6410811a7))
* **deps:** update dependency zustand to v4.3.8 ([afe4d53](https://github.com/mateusfg7/Noisekun/commit/afe4d53cfe507cba95058c995d8f7d5b88f7bdd3))
* **deps:** update font awesome ([6cec1c0](https://github.com/mateusfg7/Noisekun/commit/6cec1c07b192e550ff1ac01f4b27923c02e7fcc2))
* **deps:** update font awesome ([4fcd329](https://github.com/mateusfg7/Noisekun/commit/4fcd3299673bfc7fb3bc57ec44b68b1ef1f4fe5d))
* **deps:** update font awesome to v6.1.1 ([bc3b9e8](https://github.com/mateusfg7/Noisekun/commit/bc3b9e85399b50cd57160e2e97ae050a1835424c))
* **deps:** update font awesome to v6.1.2 ([bb2a396](https://github.com/mateusfg7/Noisekun/commit/bb2a39664c3bd9d3639ba4ae2aa08812b3539f8f))
* **deps:** update react monorepo to v18 ([fe356cc](https://github.com/mateusfg7/Noisekun/commit/fe356cca52d789eb985e28fdf73b85a094bb6684))
* **deps:** update react monorepo to v18.1.0 ([ad8071f](https://github.com/mateusfg7/Noisekun/commit/ad8071f2ef66ff02796eb900d8a3a02955a169f4))
* **deps:** update react monorepo to v18.2.0 ([b8b5b18](https://github.com/mateusfg7/Noisekun/commit/b8b5b187036f76e8eb44bd2c8845fe1a52255799))
* **dev:** dependency tree bug ([64ab56b](https://github.com/mateusfg7/Noisekun/commit/64ab56b4057992e37670d3131d6f5afdf8bf38a8))
* env variables ([4356d3d](https://github.com/mateusfg7/Noisekun/commit/4356d3defca8207adca01a19526a905b2d9fa136))
* **lint:** eslint 8.x support ([4a3d1cd](https://github.com/mateusfg7/Noisekun/commit/4a3d1cdf8eac3c06389970bf224d4d37d8caf27b)), closes [#121](https://github.com/mateusfg7/Noisekun/issues/121)
* **lint:** remove unused imports on Sound component ([99d4f04](https://github.com/mateusfg7/Noisekun/commit/99d4f045e4b3076eef5be3a42d092d17aefa36e9))
* **next-pwa:** invalid config on `next.config.js` ([72a46fd](https://github.com/mateusfg7/Noisekun/commit/72a46fdde34cd8a4da5499189692ec541ad6165c)), closes [#352](https://github.com/mateusfg7/Noisekun/issues/352)
* **public:** fix broken 'loading' modal ([c14ecfb](https://github.com/mateusfg7/Noisekun/commit/c14ecfb402b0d8426ae39c731bf2183256279c15))
* **style:** condition for class name on Sound ([128f866](https://github.com/mateusfg7/Noisekun/commit/128f8660599cc54f61d1b762da7273952ae43d42))
* **style:** condition for class name on VolumeController ([250c85e](https://github.com/mateusfg7/Noisekun/commit/250c85e1962fc0ddf3b6aa43323a9376df549d3f))
* **style:** fix select bug on changeStateOfAudio ([7c5aef4](https://github.com/mateusfg7/Noisekun/commit/7c5aef4c3c96d14d8966a7a850c72b5721784953))
* **style:** position of background config ([89f761d](https://github.com/mateusfg7/Noisekun/commit/89f761de47798f835c642e6404b4d6b0b8be2dac))
* tailwind-styled-components with type "any" ([0f490b1](https://github.com/mateusfg7/Noisekun/commit/0f490b1bea99b6b305a2cf81c79f07626e7ffa16))
* Type 'true' is not assignable to type 'string | undefined'.  TS232 ([b14b514](https://github.com/mateusfg7/Noisekun/commit/b14b514364f551d14baa5c40b1eafad37723ef7a))
* **type:** fix some theme type bugs ([de768dd](https://github.com/mateusfg7/Noisekun/commit/de768dd970af35e8c26c987275ad08f09722fdd1))
* **ui:** add slider thumb styles ([f9df90e](https://github.com/mateusfg7/Noisekun/commit/f9df90eb43607dcd24926593b241826a3bbdd61c))
* **ui:** fast background color transition ([4a7b064](https://github.com/mateusfg7/Noisekun/commit/4a7b064701a02a9891e0432bfa752d11257f6871)), closes [#181](https://github.com/mateusfg7/Noisekun/issues/181)
* **ui:** remove horizontal scroll ([d94d2a0](https://github.com/mateusfg7/Noisekun/commit/d94d2a002050f0783d6278fec4611337a8021756))
* **volume:** fix "handle volume" function on `VolumeController` ([3d9e166](https://github.com/mateusfg7/Noisekun/commit/3d9e1664801dc8cbb921fc4c29af64abb01266a7))
* **workaround:** temp fix for type errors with react@18 ([1ba27db](https://github.com/mateusfg7/Noisekun/commit/1ba27db8310651b82a10adbe11ecb3e61d659959)), closes [#323](https://github.com/mateusfg7/Noisekun/issues/323)


### Performance Improvements

* **assets:** add camp-fire background thumb ([ed5cd21](https://github.com/mateusfg7/Noisekun/commit/ed5cd218be73f16b3707f978f09dff3ca639c0c3))
* **assets:** add gif thumbs ([4f1a618](https://github.com/mateusfg7/Noisekun/commit/4f1a6187c06172f32bc311fbe87a5059b51a8120))
* **audio:** add `preload="auto"` on audio element ([28c6c2e](https://github.com/mateusfg7/Noisekun/commit/28c6c2e982384e880e916a2190adb70590f44f76))
* delay background animation ([9905795](https://github.com/mateusfg7/Noisekun/commit/9905795079cfe95c06d3c1bbba41fc0c138f5a72))
* **howler:** howler.js complete remove ([04c83dc](https://github.com/mateusfg7/Noisekun/commit/04c83dc55c838e186aeca7bbcae8ed438dec236d))
* **image:** remove `unoptimize` config from `Image` component ([9a4674f](https://github.com/mateusfg7/Noisekun/commit/9a4674fe57a54a9ecc75d3605ac290e217c80fb3))
* remove preload and use html5 on howler ([1261fcb](https://github.com/mateusfg7/Noisekun/commit/1261fcb94bca3933e5d93d9929bbf0f64435e6b2))
* use `<Image/>` instead `<img/>` on `Sound` component ([5542346](https://github.com/mateusfg7/Noisekun/commit/5542346e7b383bba6e6062ce72cc43b0262a0e8e))


### Reverts

* Revert "build(site): change home page" ([663c224](https://github.com/mateusfg7/Noisekun/commit/663c224f1a9ba1e8585c774df7e139daa0c1987d))
* **readme:** revert changes made on readme ([3004307](https://github.com/mateusfg7/Noisekun/commit/30043071878e9425b1bf7d84f4674ce8b42832ba))
* revert the npm packages updates ([146ad5a](https://github.com/mateusfg7/Noisekun/commit/146ad5a05cf518b4a8f282fc96aca33dcb8cc7ba))
* undo previous commit ([91a13eb](https://github.com/mateusfg7/Noisekun/commit/91a13eb3eb622955bf759b5560a820ee6911aa9e))


### Miscellaneous Chores

* **pwa:** remove next-pwa config ([7f8e8bd](https://github.com/mateusfg7/Noisekun/commit/7f8e8bd9e1295574a0e31647ad2b9748fcd1694f))


### Code Refactoring

* remove umami script on `_app.tsx` ([3eca2df](https://github.com/mateusfg7/Noisekun/commit/3eca2df5b5b512240b5abd48b84b9d8d8468ad60))


### Continuous Integration

* remove ci workflow temporarily ([63d29d8](https://github.com/mateusfg7/Noisekun/commit/63d29d8daef40ec748b4e477b9040cd05bdd50f5))

