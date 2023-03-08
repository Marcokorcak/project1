# Project 1

## Table of contents  
* [Task Description](#Task-description)
* [Screenshots](#Screenshots)


## Task Description

Using the public API https://api.coindesk.com/v1/bpi/currentprice.json

Use the Vite starter + styling of your choosing, i.e., Bootstrap, Tailwind, custom, whichever you are comfortable with, and do the following in a react application:

* Have a navbar with sections:

   * Current Conversions Rates
  * Display the conversion rate in both directions (see here and here and here)
  * $ (USD) to BTC, 1 BTC to $
  * 1 € (EUR) to BTC, 1 BTC to €
  * £ (GBP) to BTC, 1 BTC to £
             
* Conversions
   * Allow the user to sort the exchange rates (highest number of fiat to BTC to lowest number of fiat to BTC and reverse) by clicking a button
  * Create
  * a single SELECT dropdown with selections of Euro, GBP, and USD
  * an input
  * convert the selected currency and the amount to its value in BTC.


Always visible, regardless of the section displayed, in the app should be the following:
The data date (hint it comes back from the API) should always be visible to the user. Let’s see if you can convert the UTC time to the current browser’s time zone and output both times.

Allow a user to refetch the rate; limit them to once per 5 minutes (that should persist in refreshes; that is, if a user hits refresh, they should not be able to hit refresh again (and be warned if they try) in the same browser (assuming they don’t clear their local data manually) for 5 minutes, regardless if they refresh the browser.
The state should include:


## Screenshots

<img src="https://user-images.githubusercontent.com/77298953/223835385-06f74477-5564-4afa-9251-599c3bc3c4b9.png" width=60% height=60%>

The image above shows the current rates page and that is the original page laoded. This is the home page which has the UTC dates/time, local date/time, along with conversions from EUR, GBP, USD to BTC

<img src="https://user-images.githubusercontent.com/77298953/223836169-dbac49a0-d1f6-4285-a01b-c8b6a517f5c7.png" width=60% height=60%>

The image above shows the result when the conversions page is clicked and this includes the time (UTC) along with local and then a sorting button to sort the currencies, a conversion input box and a refresh data button



