// npm is a package manager for node.js just like pip is for python.

//Packages must be installed for each project

//npm install [package-name]

//packages are stored inside node_modules. Even if the folder is deleted, the package can be recovered by simply running 'npn install' to install all the dependencies given that the package.json is intact

//The “package. json” file defines the rules required to run your application and install dependencies. On the other hand, the “package-lock. json” file holds detailed information on all the dependencies installed based on the package. A person having both can ensure that the correct version is intalled.

// Installing Development only modules
// e.g. nodemon, used to refresh server without closing and opening it.

// use 'npm install nodemon --save-dev'

// It appears like this in the package.json

/*"devDependencies": {
    "nodemon": "^3.0.1"
}*/
// The ^ before the version number ensures that the exact same version is installed the next time around. Use ~ instead of ^ to install if newer patches are available
// > ensures that the latest version is installed

//INSTALLING PACKAGES GLOBALLY

// use --global OR the -g flag before or after the pacakge name


