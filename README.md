# Media viewer

This project is created with React as frontend framework, CSS for styling and Axios for data fetching

## Project description

An app where user can search for images and look into its detail information including license and pricing.

## Project structure

In the project directory, you can find:

- apis

  - Where the method is located to fetch the record from the API

- components

  - Where Smaller components are located that are used to build a main page
    - There are 6 components
      - Gallery -> It will render the media in the SearchPage
      - Header -> It is a simple component to display a header on top.
      - Loader -> A spinner that is visible when user searches for some data.
      - MediaInfo -> Component to render Media information such as creator, creation date, size etc.
      - NoMedia -> Fallback component when there is no media available.
      - SearchMedia -> Component that displays the search box where user can search for some media and clear the input.

- pages

  - Where main pages are located
    - There are two main pages
      - SearchPage -> Main page where all the media is displayed, and search input where user can search for any media e.g. Berlin
      - SingleMediaView -> Page that will display detail information about the media which user has selected from the SearchPage. Information includes license, creator, creation date etc.

- routes
  - Where all the routes are defined

The project is responsive for small screens as well.

## Running the project

To run the project

- Download it or fork it.
- Run `npm install` to install all the dependencies.
- Run `npm start` to run in your browser.
- The project will automatically open you browser and display the project on dev mode.
