import axios from 'axios';
import { useState, useEffect } from 'react';

const CurRates = () => {
	const [rateInfo, setrateInfo] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const getrateInfo = () => {
		//function to get infromation from the api

		setLoading(true);
		setError(null);
		setrateInfo(null);

		const rateInfoUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'; //api url

		axios
			.get(rateInfoUrl)
			.then(({ data }) => {
				setrateInfo(data);
			})
			.catch((error) => {
				setError(error);
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		getrateInfo();
	}, []);

	const disableButton = () => {
		//disable button function to prevent user from refreshing
		const button = document.querySelector('#btn1');
		button.disabled = true;
	};

	function everything() {
		//function that is called when refresh data button is clicked
		getrateInfo();
		setInterval(disableButton, 300000);
	}

	if (rateInfo !== null) {
		//checking that object are not null

		var theDate = new Date(Date.parse(rateInfo.time.updated)); //getting the UTC time from the object
		var newDate = theDate.toLocaleString(); //converting to local time

		//variables that claulate the worth
		const btcConversionUSD = 1 / rateInfo.bpi.USD.rate_float;
		const btcConversionEUR = 1 / rateInfo.bpi.EUR.rate_float;
		const btcConversionGBP = 1 / rateInfo.bpi.GBP.rate_float;

		return (
			<div>
				{!!error && <pre>{JSON.stringify(error, 0, 1)}</pre>}
				{!!loading && <p>Loading</p>}
				{/* printing out infomration using teh objects declared before */}
				<p className="a">
					{' '}
					This information was updated at {rateInfo.time.updated}
				</p>
				<p className="b">The local time is {newDate}</p>
				<p className="x"> ⌄</p>

				<p className="c">
					{' '}
					The conversion rate of {rateInfo.bpi.USD.code} ($) to BTC is{' '}
					{btcConversionUSD}
				</p>
				<p className="c">
					{' '}
					1 BTC to {rateInfo.bpi.USD.code} is ${rateInfo.bpi.USD.rate_float}
				</p>
				<p className="x"> ⌄</p>

				<p className="d">
					{' '}
					The conversion rate of {rateInfo.bpi.EUR.code} (€) to BTC is{' '}
					{btcConversionEUR}
				</p>
				<p className="d">
					{' '}
					1 BTC to {rateInfo.bpi.EUR.code} is €{rateInfo.bpi.EUR.rate_float}
				</p>
				<p className="x"> ⌄</p>
				<p className="e">
					{' '}
					The conversion rate of {rateInfo.bpi.GBP.code} (£) to BTC is{' '}
					{btcConversionGBP}
				</p>
				<p className="e">
					{' '}
					1 BTC to {rateInfo.bpi.GBP.code} is £{rateInfo.bpi.GBP.rate_float}
				</p>

				<button id="btn1" onClick={everything} className="btn">
					Refresh Data
				</button>
			</div>
		);
	}
};

export default CurRates;
