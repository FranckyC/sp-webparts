# semaphore-search #

## Description ##

Theses Azure functions are related to the search over Semaphore classified content. They are especially used by front-end components to build the search experience (mainly SPFx Web Parts).

## How to debug JS functions locally ? ##

### Prerequisites ###

- In VSCode, open the root folder `pnp-query-enhancer`
- Install all dependencies using `npm i`
- Install [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli-windows?view=azure-cli-latest)
- Install Azure Function Core tools globaly using `npm install -g azure-functions-core-tools@2`
- In a Node.js console, build the solution using `npm run build:dev` cmd. For production use, execute `npm run build` (minified version of the JS code)
- In a Node.js console, from the `pnp-query-enhancer/dist` folder, run the following command `func start`
- In VSCode, launch the *'Debug Local Azure Function'* debug configuration
- Set breakpoints directly in your **'.ts'** files
- Send your requests using Postman using localhost according to your settings (i.e. `http://localhost:7071/api/enhanceQuery`)
- Enjoy ;)

### Azure Function Proxy configuration ###

This solution uses an Azure function proxy to get an only single endpoint URL for multiple functions. See the **proxies.json** file to see defined routes.

## How to deploy the solution ? ##

### DEV

We recommend to use Visual Studio Code to work with this solution.

- In VSCode, download the ["Azure Function" extension](ms-azuretools.vscode-azurefunctions)
- Sign-in to to Azure account into the extension
- In a Node.js console, build the application using the command `npm run build` (minified version)
- Use the **"Deploy to Function App"** feature (in the extension top bar) using the *'dist'* folder. Make sure you've run the `npm run build` cmd before.
- Upload the application settings according to your environment (`local.settings.<env>.json`)
- Use Postman to test proxies and functions with the URLs provided by Azure. If you test using a SPFx component, don't forget to add the SharePoint domain to the CORS settings to allow this origin. 

### PROD