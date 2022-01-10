# Personal Website


My personal website. An [MIT](https://github.com/mykytazhum0823/personal-site/blob/main/LICENSE) licensed, simple, easily modifiable, statically-exportable [React](https://reactjs.org/), [Jamstack](https://jamstack.org/) application that deploys automatically for free using [github pages](https://pages.github.com/). Built using modern javascript, based on [create-react-app](https://github.com/facebook/create-react-app) with [React-Router](https://reactrouter.com/), SCSS, [github actions](https://github.com/features/actions), and many other useful technologies.



## Dependencies

Tested with: [node](https://nodejs.org/) >= v12 and optional [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) for managing node versions.

## Set up

To download the repository and install dependencies, run the following commands:

```bash
git clone git://github.com/mykytazhum0823/personal-site.git # replace [mykytazhum0823] with your github username if you fork first.
cd personal-site
nvm install # this is optional - make sure you're running >= node 12 with `node --version`
npm install
```

## Running

Run the following command to build the react application and serve it with fast refresh:

```bash
npm start
```

Your web browser should automatically open to `<ip>:<port>:<path>` default: [http://localhost:3000/](http://localhost:3000/).
