# opsdroid web

<a href="https://github.com/opsdroid/opsdroid-web/actions"><img src="https://github.com/opsdroid/opsdroid-web/actions/workflows/node.js.yml/badge.svg" alt="Github CI Status"></img></a>
![GitHub](https://img.shields.io/github/license/opsdroid/opsdroid-web)
![GitHub last commit](https://img.shields.io/github/last-commit/opsdroid/opsdroid-web)
<a href="https://app.element.io/#/room/#opsdroid-general:matrix.org"><img src="https://img.shields.io/matrix/opsdroid-general:matrix.org.svg?logo=matrix" alt="Matrix Chat" /></a>

A browser based web app for chatting with [opsdroid](https://github.com/opsdroid/opsdroid).

<img width="499" alt="Screenshot 2022-06-19 at 20 15 14" src="https://user-images.githubusercontent.com/3131401/174496947-dcd648e1-14ea-4d44-9850-f058d85e8054.png">

## Development

```bash
git clone https://github.com/opsdroid/opsdroid-web.git
cd opsdroid-web
pre-commit install
yarn install
yarn start
```

## Available scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn lint`

Runs eslint on all the files under `scr/` and informs you of any linting issues.

### `yarn lintfix`

Because fixing lint manually is so 2000, you can run this command to automatically fix all the lint issues that your files may have.

### `yarn build-check`

Runs the typescript compiler to confirm that all files are typed correctly and don't have any issues.
Note: This is the script run with pre-commit.

## Contributing

Pull requests are welcome!
