# lo-fi-prototype-2
Lo-Fi Prototype 2 (study flow)

## Getting Started
Learning Vue:
- [Official Docs](https://vuejs.org/guide/introduction.html)
- Docs here
- [MDN Docs](https://developer.mozilla.org/en-US/)
- [MusicPlayer](https://github.com/janishutz/MusicPlayer/tree/dev/web) by @janishutz (as a reference for implementation)
- [EYE-TAP frontend](https://github.com/eye-tap/frontend) (as a reference for implementation)
- Any other docs online
- [FontAwesome](https://fontawesome.com/search?ic=free-collection)


### Development
There are two ways of installing things, one is directly on your system (install `node.js`), or by running the docker container I created for you.
Below a guide for using the container.

Run the following command with docker installed:
```bash
docker run -it -p 8081:8081 --name prototype -v .:/mnt ghcr.io/janishutz/dev-container-node
```
To launch the container again later, you can use
```bash
docker start -i prototype
```
or to start the container and removing it whenever you exit it:
```bash
docker run -it -p 8081:8081 --rm -v .:/mnt ghcr.io/janishutz/dev-container-node
```


### Dependency management
Vue is a JS/TS framework and thus uses `npm` or `yarn`. Which one you prefer doesn't matter, both are installed in the container.
I personally am still using `npm` over `yarn` in many cases, but am currently switching to using `yarn` more, because it is the better tool in most cases.

In any case, both use the [npm registry](https://npmjs.com) and for the main project,
we will be able to benefit from some of the sdks that I have written (and of course the ones written by so many other people).

Basic `npm` and `yarn` commands:
| Task | `npm` | `yarn` |
|---|---|---|
| Install required deps | `npm i` | `yarn` |
| Install new dep | `npm i <pkg name>` | `yarn add <pkg name>` |
| Install new dep as dev dep | `npm i -D <pkg name>` | `yarn add --dev <pkg name>`
| Remove dep | `npm uninstall <pkg name>` | `yarn remove <pkg name>` |


### Viewing the page
In the docker container, run
```bash
npm run dev -- --host
```
Note that you only need the `-- --host` argument because of how docker networking in bridge mode works.


### Colours
Remember, don't "hard-code" colours, use `var(--primary)` for the primary colour.

You may find the colour definitions in `./src/scss/_main.scss`, inside the `:root` element's style.
