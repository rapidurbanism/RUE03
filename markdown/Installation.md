# Rapid Urbanism Explorer: Installation

This is version 0.3 of RUE. This version is an early prototype of the software. 

This document gives an overview of the software architecture and gives instructions on installing
the software on your own server.

## Spatial Model

For the spatial models, RUE uses Mobius Modeller, a client-side parametric modelling software in the
browser. The spatial model consist of four scripts; see below.

The input parameters for the spatial model are shown on the left hand side. The tabs along the top
of the 3D viewer show different model outputs. 

## Financial Model

For the financial models, RUE uses [LuckySheet](https://github.com/mengshukeji/Luckysheet), a
client-side spreadsheet. 

In RUE 0.3, the financial model consist of multiple linked spreadsheets.
Values from the spatial model are inserted into specific cells in the spreadsheet, which then
triggers the spreadsheet calculations to be executed. 

## Framework

RUE03 is developed using the React framework, version 17. 

The two main libraries that are used are Mobius Modeller for the spatial models, and Luckysheet for
the financial models.

### Mobius Modeller Integration

Mobius Modeller was used to create the four scripts that generate the spatial models:
- _City_: Generates the site polygon.
- _Neighbourhood_: Subdivides the site into a set of roads and partitions.
- _Tissue_: Subdivides partitions into lots.
- _Starter Buildings_: Generates 3D building massings on the lots.

The Mobius scripts are developed in Mobius Modeller and are saved with a `.mob` file extension). The
scripts generate models in a geospatial information format (with a `.gi` file extension).The four
scripts are chained. The spatial model generated by the _City_ script gets passed to the
_Neighbourhood_ script; the spatial model generated by the _Neighbourhood_ script gets passed to the
_Tissue_ script; the spatial model generated by the _Tissue_ script gets passed to the _Starter
Building_ script; 

In order to be able to execute the scripts inside RUE, they are exported as Javascript files (with a
`.js` extension). The files contain a main function, which when executed will generate both the
spatial model and the spatial data.

The four Mobius scripts (in `.js` format) can be found in the folder `/src/components/models/`
folder. The Geojson input data for the _City_ script is also saved in the same folder. 

The Mobius Javascript files require various Mobius libraries. The
source code for these Mobius libraries can be found in the `/src/mobius/` folder.

The spatial models are visualised as 3D models in a Mobius viewer, which is embedded within RUE in
an _iframe_ html component. RUE communicates with the Mobius viewer using a simple `post-messsage`
API. The API allows RUE to load the different models, depending on the tab that is selected at the
top of the viewer. 

For this version of RUE, Mobius Modeller version 0.6 was used. 
* [Mobius Modeller 0.6](https://design-automation.github.io/mobius-parametric-modeller-dev-0-6/)

### Luckysheet Integration

The financial model was developed as a Microsoft Excel spreadsheet, and then converted into the
LuckySheet format. The Excel file was manually converted, by loading the file into an [online
LuckySheet application](https://mengshukeji.github.io/LuckyexcelDemo/). The data was then extracted
and incorporated into the RUE application. 

A bill of quantities is extracted from the spatial model and written into the `Q` spreadsheet.
These values are mostly infrastructure length and land use areas extracted from the spatial model. 
Each time a new spatial model is generated, these values will be updated, which in turn will trigger 
the financial model to be recalculated. 

When this version of RUE was develop, the LuckySheet library was not yet available on the NPM
package manager. The source code for LuckySheet was therefore included, under the
`/public/luckysheet/` folder.

For more information on Luckysheet:
* [Luckysheet](https://github.com/mengshukeji/Luckysheet)

## Install and Build

RUE03 is a client side application. The only server-side process is logging-in. If you decide to
install RUE03 on your own, then you should create your own login process.

The usual nodejs/npm tools are required. (npm is part of nodejs):
- [nodejs](https://nodejs.org/en/)

The project is set up to run on Amazon AWS, using the Amplify framework. Amazon Cognito is used for
logging in, so you need to create a Cognito user pool. For more information:
- [Amazon Cognito](https://aws.amazon.com/cognito/)

In order to create the `amplify` folder and contents, you need to install the Amplify CLI on your
local machine. For more information:
- [Amplify](https://docs.amplify.aws/)
- [Amplify CLI](https://docs.amplify.aws/cli/)
- `npm install -g @aws-amplify/cli`

In addition, to generate Html files from Markdown files, `gulp.js` is used. You will therefore need
to install the Gulp CLI. For more information:
- [Gulp CLI](https://gulpjs.com/)
- `npm install -g gulp-cli`

To clone the project:
- `git clone https://github.com/rapidurbanism/RUE03`

To install, change to root folder, then:
- `npm install`

To generate the amplify folder, change to root folder and run:
- `amplify init`

To start dev server:
- `npm start`

If you get the error message `Module not found: Can't resolve './aws-exports'`, then it probably
means that you have not run `amplify init`.

## Docs

The docs are written as markdown files. To generate Html files from these Markdown files, `gulp.js`
is used. If you need to edit the docs, then you you should edit the markdown files and then
regenerate the Html files using `gulp`. You will therefore need to install the Gulp CLI. For more
information:
- [Gulp CLI](https://gulpjs.com/)
- `npm install -g gulp-cli`

There are 4 markdown files.

In the root folder:
- `README`: An overview.

In the `markdown` foler:
- `terms-conds`: Terms and conditions.
- `for-end-users`: User manual for end-users.
- `for-developers`: Help for developers (this file).

After editing the markup files, you can re-generate the Html doc files like this:
- `npm run docs`

## Direct Dependencies

The two main dependencies are:
- Mobius Modeller: https://github.com/design-automation/mobius-parametric-modeller-dev-0-6
- LuckySheet: https://github.com/mengshukeji/Luckysheet

A list of direct dependencies were extracted using 
[NPM license crawler](https://www.npmjs.com/package/npm-license-crawler), as follows:
- `npm-license-crawler- --onlyDirectDependencies --csv rue_licenses.csv`

See [the output CSV file](./rue_licenses.csv).


The website links for the dependencies are as follows:
- https://github.com/ant-design/ant-design-charts
- https://github.com/ant-design/ant-design-icons/tree/master/packages/icons-react
- https://github.com/antvis/data-set
- https://github.com/aws-amplify/amplify-js
- https://github.com/gsoft-inc/craco
- https://github.com/Doodle3D/clipper-js
- https://github.com/formulajs/formulajs
- https://github.com/gregberge/loadable-components
- https://github.com/testing-library/jest-dom
- https://github.com/testing-library/react-testing-library
- https://github.com/testing-library/user-event
- https://github.com/DefinitelyTyped/DefinitelyTyped
- https://github.com/ant-design/ant-design
- https://github.com/aws-amplify/amplify-js
- https://github.com/ant-design/babel-plugin-import
- https://github.com/alibaba/BizCharts
- https://github.com/gka/chroma.js
- https://github.com/omichelsen/compare-versions
- https://github.com/FormAPI/craco-less
- https://github.com/cytoscape/cytoscape.js
- https://github.com/d3/d3-delaunay
- https://github.com/d3/d3-polygon
- https://github.com/d3/d3-voronoi
- https://github.com/eligrey/FileSaver.js
- https://github.com/Stuk/jszip
- https://github.com/webpack-contrib/less-loader
- https://github.com/less/less.js
- https://github.com/josdejong/mathjs
- https://github.com/streamich/memfs
- https://github.com/mobxjs/mobx-react
- https://github.com/mobxjs/mobx
- https://github.com/BenjaminVanRyseghem/numbro
- https://github.com/proj4js/proj4js
- https://github.com/react-csv/react-csv
- https://github.com/facebook/react
- https://github.com/supremetechnopriest/react-idle-timer
- https://github.com/goldenyz/react-perfect-scrollbar
- https://github.com/ReactTraining/react-router
- https://github.com/facebook/create-react-app
- https://github.com/facebook/react
- https://github.com/styled-components/styled-components
- https://github.com/mrdoob/three.js
- https://github.com/Microsoft/TypeScript
- https://github.com/jashkenas/underscore
