https://user-images.githubusercontent.com/100006431/204389050-86269e5f-8f4a-45a2-a9dd-a715cd00b0c7.mp4


# Notice
Before you start the app you need to set .env file with REACT_APP_URL={your mockAPI link}

Data in the mockAPI looks like this:
[{"id":"2","year":2019,"effectiveRent":21,"startingRent":22}, ....]


# Description

A web application, which contains two widgets on one screen: a chart and a table.
Both widgets are visible on the page at the same time.

The chart’s y-axis is based on “startingRent” and “effectiveRent” fields.
In a chart component you can select/deselect which data you want to see by clicking one of 
the two options (Effective Rent, Starting Rent).

Bellow the Rent Data Chart is the Rent Data Table. The table allows you to add, update and 
delete data from the table. The changes of the table immediately affect the chart, so you
don't need to reload the page.

If you want to ADD data to the table then you need to press +Add button, which opens a modal.
In the modal, the inputs are empty and you need fill them with some data. If you leave them empty
and press Save, then you will get an error ("Inputs are empty!"). Also you can't add data with
the year that already exists. If you try to do that and you click Save, error will occur 
("Year is already taken!").

If you want to EDIT the data from the table then you need to press the pen icon in the column
ACTIONS, which opens a modal.
In the modal, the inputs are filled with data from a row you selected and you can change the 
existing data by filling the inputs with some new data. If you leave them empty and press 
Save, then you will get an error ("Inputs are empty!"). Also you can't update the data with
the year that already exists. If you try to do that and you click Save, error will occur 
("Year is already taken!").

If you want to DELETE the data from the table then you need to press the trash icon in the column
ACTIONS, which opens a modal. In the modal you can confirm that you want to delete the data, or
you can press CANCEL if you changed your mind.

To start the application:

### `npm install`
### `npm start` 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
