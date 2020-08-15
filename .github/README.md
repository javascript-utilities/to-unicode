# Character To Unicode
[heading__top]:
  #to-unicode
  "&#x2B06; Converts character or string to Hex Unicode"


Converts character or string to Hex Unicode


## [![Byte size of Character To Unicode][badge__main__character_to_unicode__source_code]][character_to_unicode__main__source_code] [![Open Issues][badge__issues__character_to_unicode]][issues__character_to_unicode] [![Open Pull Requests][badge__pull_requests__character_to_unicode]][pull_requests__character_to_unicode] [![Latest commits][badge__commits__character_to_unicode__main]][commits__character_to_unicode__main] [![to-unicode Demos][badge__gh_pages__character_to_unicode]][gh_pages__character_to_unicode][![Build Status][badge_travis_ci]][build_travis_ci]



------


- [:arrow_up: Top of Document][heading__top]

- [:building_construction: Requirements][heading__requirements]

- [:zap: Quick Start][heading__quick_start]

  - [:memo: Edit Your ReadMe File][heading__your_readme_file]
  - [:floppy_disk: Commit and Push][heading__commit_and_push]
  - [&#x1F9F0; Usage][heading__usage]

- [&#x1F5D2; Notes][heading__notes]

- [:card_index: Attribution][heading__attribution]

- [:balance_scale: Licensing][heading__license]


------



## Requirements
[heading__requirements]:
  #requirements
  "&#x1F3D7; Prerequisites and/or dependencies that this project needs to function properly"


NodeJS developer dependencies may be installed via NPM...


```Bash
npm install
```


> Note, NPM is **not** required to utilize this project, only for tracking development dependencies.


______


## Quick Start
[heading__quick_start]:
  #quick-start
  "&#9889; Perhaps as easy as one, 2.0,..."


For use with GitHub Pages, this repository encourages the use of Git Submodules to track dependencies


**Bash Variables**


```Bash
_module_name='to-unicode'
_module_https_url="https://github.com/javascript-utilities/to-unicode.git"
_module_base_dir='assets/javascript/modules'
_module_path="${_module_base_dir}/${_module_name}"
```


**Bash Submodule Commands**


```Bash
cd "<your-git-project-path>"

git checkout gh-pages
mkdir -vp "${_module_base_dir}"

git submodule add -b main\
                  --name "${_module_name}"\
                  "${_module_https_url}"\
                  "${_module_path}"
```


### Your ReadMe File
[heading__your_readme_file]:
  #your-readme-file
  "&#x1F4DD; Suggested additions for your ReadMe.md file so everyone has a good time with submodules"


Suggested additions for your _`ReadMe.md`_ file so everyone has a good time with submodules


```MarkDown
Clone with the following to avoid incomplete downloads


    git clone --recurse-submodules <url-for-your-project>


Update/upgrade submodules via


    git submodule update --init --merge --recursive
```


### Commit and Push
[heading__commit_and_push]:
  #commit-and-push
  "&#x1F4BE; It may be just this easy..."


```Bash
git add .gitmodules
git add "${_module_path}"


## Add any changed files too


git commit -F- <<'EOF'
:heavy_plus_sign: Adds `javascript-utilities/to-unicode#1` submodule



**Additions**


- `.gitmodules`, tracks submodules AKA Git within Git _fanciness_

- `README.md`, updates installation and updating guidance

- `_modules_/to-unicode`, Converts character or string to Hex Unicode
EOF


git push origin gh-pages
```


**:tada: Excellent :tada:** your project is now ready to begin unitizing code from this repository!


------


### Usage
[heading__usage]:
  #usage
  "&#x1F9F0; How to utilize code within this repository"


This project is compatible with NodeJS and _most_ browsers that support ECMAScript (version 6 or greater)


NodeJS example usage...


```JavaScript
const toUnicode = require('to-unicode');

var panda_code = toUnicode.fromCharacter('🐼');

console.log(panda_code);
//> '1f43c'
```


Example usage within a web project...


**`index.html`**


```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>toUnicode Usage Example</title>
    <script type="text/javascript" src="assets/js/modules/to-unicode.js" differ></script>
    <script type="text/javascript" src="assets/js/index.js" differ></script>
  </head>


  <body>
    <span>Prefix: </span>
    <input type="text" id="client__text--prefix" value="0x">

    <br>

    <span>Input: </span>
    <input type="text" id="client__text--input" value="">

    <pre id="client__text--output"></pre>
  </body>
</html>
```


**`assets/js/index.js`**


```JavaScript
const text_input__callback = (_event) => {
  const client_input = document.getElementById('client__text--input').value;
  const client_prefix = document.getElementById('client__text--prefix').value;

  const output_element = document.getElementById('client__text--output');

  const unicode_list = toUnicode.fromString(client_input, client_prefix);
  console.log(unicode_list);
  output_element.innerText = unicode_list.join('\n');
};


window.addEventListener('load', () => {
  const client_text_input = document.getElementById('client__text--input');
  const client_text_prefix = document.getElementById('client__text--prefix');

  client_text_input.addEventListener('input', text_input__callback);
  client_text_prefix.addEventListener('input', text_input__callback);
});
```


______


## Notes
[heading__notes]:
  #notes
  "&#x1F5D2; Additional things to keep in mind when developing"


This repository may not be feature complete and/or fully functional, Pull Requests that add features or fix bugs are certainly welcomed.


- [Fork][character_to_unicode__fork_it] this repository to an account that you have write permissions for.

- Add remote for fork URL. The URL syntax is _`git@github.com:<NAME>/<REPO>.git`_...


```Bash
cd ~/git/hub/javascript-utilities/to-unicode

git remote add fork git@github.com:<NAME>/to-unicode.git
```


- Commit your changes and push to your fork, eg. to fix an issue...


```Bash
cd ~/git/hub/javascript-utilities/to-unicode


git commit -F- <<'EOF'
:bug: Fixes #42 Issue


**Edits**


- `<SCRIPT-NAME>` script, fixes some bug reported in issue
EOF


git push fork main
```


> Note, the `-u` option may be used to set `fork` as the default remote, eg. _`git push fork main`_ however, this will also default the `fork` remote for pulling from too! Meaning that pulling updates from `origin` must be done explicitly, eg. _`git pull origin main`_


- Then on GitHub submit a Pull Request through the Web-UI, the URL syntax is _`https://github.com/<NAME>/<REPO>/pull/new/<BRANCH>`_


> Note; to decrease the chances of your Pull Request needing modifications before being accepted, please check the [dot-github](https://github.com/javascript-utilities/.github) repository for detailed contributing guidelines.


______


## Attribution
[heading__attribution]:
  #attribution
  "&#x1F4C7; Resources that where helpful in building this project so far."


- [GitHub -- `github-utilities/make-readme`](https://github.com/github-utilities/make-readme)


______


## License
[heading__license]:
  #license
  "&#x2696; Legal side of Open Source"


```
Converts character or string to Hex Unicode
Copyright (C) 2020 S0AndS0

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, version 3 of the License.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
```


For further details review full length version of [AGPL-3.0][branch__current__license] License.



[branch__current__license]:
  /LICENSE
  "&#x2696; Full length version of AGPL-3.0 License"


[badge__commits__character_to_unicode__main]:
  https://img.shields.io/github/last-commit/javascript-utilities/to-unicode/main.svg

[commits__character_to_unicode__main]:
  https://github.com/javascript-utilities/to-unicode/commits/main
  "&#x1F4DD; History of changes on this branch"


[character_to_unicode__community]:
  https://github.com/javascript-utilities/to-unicode/community
  "&#x1F331; Dedicated to functioning code"

[character_to_unicode__gh_pages]:
  https://github.com/javascript-utilities/to-unicode/tree/
  "Source code examples hosted thanks to GitHub Pages!"

[badge__gh_pages__character_to_unicode]:
  https://img.shields.io/website/https/javascript-utilities.github.io/to-unicode/index.html.svg?down_color=darkorange&down_message=Offline&label=Demo&logo=Demo%20Site&up_color=success&up_message=Online

[gh_pages__character_to_unicode]:
  https://javascript-utilities.github.io/to-unicode/index.html
  "&#x1F52C; Check the example collection tests"

[issues__character_to_unicode]:
  https://github.com/javascript-utilities/to-unicode/issues
  "&#x2622; Search for and _bump_ existing issues or open new issues for project maintainer to address."

[character_to_unicode__fork_it]:
  https://github.com/javascript-utilities/to-unicode/
  "&#x1F531; Fork it!"

[pull_requests__character_to_unicode]:
  https://github.com/javascript-utilities/to-unicode/pulls
  "&#x1F3D7; Pull Request friendly, though please check the Community guidelines"

[character_to_unicode__main__source_code]:
  https://github.com/javascript-utilities/to-unicode/
  "&#x2328; Project source!"

[badge__issues__character_to_unicode]:
  https://img.shields.io/github/issues/javascript-utilities/to-unicode.svg

[badge__pull_requests__character_to_unicode]:
  https://img.shields.io/github/issues-pr/javascript-utilities/to-unicode.svg

[badge__main__character_to_unicode__source_code]:
  https://img.shields.io/github/repo-size/javascript-utilities/to-unicode

[badge_travis_ci]:
  https://travis-ci.com/javascript-utilities/to-unicode.svg?branch=main

[build_travis_ci]:
  https://travis-ci.com/javascript-utilities/to-unicode

