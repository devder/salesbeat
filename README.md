# Salesbeat Hiring Challenge

This is a skeleton app that shows the user a list of continents on the home screen. When the user clicks on any continent on the list, we want to be able to show a list of all countries in that continent alongwith the name of the capital, currency and the languages spoken there. The data is being fetched from a public graphQL API at `https://countries.trevorblades.com/`. 

The basic structure of the app is already in place. There are two routes `/` and `/:continent-code`. When on the `/` route, the user is shown a list of all continents from within the `Continents.tsx` component. And when the user clicks on any continent on the list, s/he is navigated to the `/:continent-code` route where the continent code is passes as a url parameter. 

In the `CountryList.tsx` component, we extract the continent code from the URL parameter, run 

## How to begin

Begin by working through each of the `//TODO` marked in the codebase.

## Styling and library

Feel free to use any styling library you want. While we are looking for a good UI, we recommend you to not spend too much time on perfecting the UI. Simple and clean UI is perfecly acceptable. Keep your codebase as clean as possible and use type annotations as much as you can.

When it doubt, give out shout! Reach out to ankit@salesbeat.co for any clarifications. 
