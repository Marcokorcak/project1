import axios from 'axios'
import { useState, useEffect } from 'react';


const Conversion = () => {


    const [rateInfo, setrateInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [dir, setdir] = useState('');
    const [rArray, setrArray] = useState('');
    const [gbpCur, setgbpCur] = useState(0);
    const [eurCur, seteurCur] = useState(0);
    const [usdCur, setusdCur] = useState(0);

    const getrateInfo = () => {  //function to get infromation from the api 

        setLoading(true);
        setError(null);
        setrateInfo(null);

        const rateInfoUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json'; //api url 

        axios.get(rateInfoUrl) //using axios to get the data 
            .then(({ data }) => {
                setrateInfo(data);
                setrArray([ //putting the currency rates into an array 
                    data.bpi.EUR.rate_float,  
                    data.bpi.USD.rate_float,  
                    data.bpi.GBP.rate_float   
                ]);
                seteurCur(data.bpi.EUR.rate_float);//EUR currency rate
                setusdCur(data.bpi.USD.rate_float);//USD currency rate
                setgbpCur(data.bpi.GBP.rate_float);//GBP currency rate 
            })
            .catch(error => { //catching errors
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            })



    };
    const orderConversion = () => { //sorting function 
        if (dir === 'Ascending') { //ascending direction 
            rArray.sort((a, b) => b - a); 
            setdir('Descending'); //descending direction 
        } else {
            rArray.sort((a, b) => a - b); 
            setdir('Ascending');
        }
        setrArray(rArray); //setting the array to the new sorted one

    }
    useEffect(() => {

        getrateInfo() //updating infomation about the currencies 
    }, [])


    const [num, setNum] = useState(''); 
    const [conversionVal, setconversionVal] = useState('');

    const valueHandler = (e) => {
        setNum(e.target.value); //getting the value that was enetered in 
    }

    function getNewNum() {
        const select = document.getElementById('select_box').value; //selecting the vale that was enetred in by targeting the selectbox and the value property
        if (select == "USDcur") {
            setconversionVal(num / rateInfo.bpi.USD.rate_float); //setting the conversion value when converting from USD

        } else if (select == "EURcur") {
            setconversionVal(num / rateInfo.bpi.EUR.rate_float); //setting the conversion value when converting from EUR

        } else if (select == "GBPcur") {
            setconversionVal(num / rateInfo.bpi.GBP.rate_float); //setting the conversion value when converting from GBP

        }

    }

    const disableButton = () => { //disable button function to prevent user from refreshing 
            const button = document.querySelector('#btn1');
            button.disabled = true;
        };

    function everything () { //function that is called when refresh data button is clicked 
       getrateInfo();
       setInterval(disableButton,300000);
    };

    if (rateInfo !== null) { //checking when the object values are not null 

        var theDate = new Date(Date.parse(rateInfo.time.updated)); //creating a new date 
        var newDate = theDate.toLocaleString(); //using this for local time 
        
        //variables for getting conversion rates 
        const conversionUSDc = 1 / usdCur; 
        const conversionEURc = 1 / eurCur;
        const conversionGBPc = 1 / gbpCur;

        return (
            <div>

                <p class="a"> This information was updated at {rateInfo.time.updated}</p> {/* Getting time information using UTC */}
                <p class="b">The local time is {newDate}</p> {/* Printing local time information */}
                <p class="x"> ⌄</p>

                <button className="btn" onClick={orderConversion}>Sort Exchange Rates</button>
                <p className='k'> {dir} </p>  {/* getting direction for sort */}
             {/* mapping the values */}   {rArray.map((data) => ( 
                    <div key={data.id}>
                        <div>
                            {data == rateInfo.bpi.USD.rate_float ? (
                                <><p class="e">
                                    1 USD is {conversionUSDc} BTC
                                </p>
                                <p class = "e"> and 1 BTC is ${rateInfo.bpi.USD.rate_float} USD</p></>
                            ) : data == rateInfo.bpi.EUR.rate_float ? (
                                <><p class="c">
                                        1 EUR is {conversionEURc} BTC
                                    </p><p class="c">  and 1 BTC is {rateInfo.bpi.EUR.rate_float} EUR</p></>
                            ) : (
                                <><p class="d">
                                            1 GBP is {conversionGBPc} BTC
                                        </p><p class = "d"> and 1 BTC is {rateInfo.bpi.GBP.rate_float} GBP</p></>
                            )}
                        </div>
                    </div>
                ))}
                <p class="x"> ⌄ </p>
                <div class="m">
                <select id="select_box"> {/* dropdown menu with 3 choices*/}
                    <option value="USDcur">USD</option>
                    <option value="GBPcur">GBP</option>
                    <option value="EURcur">EUR</option>
                </select>
                <input placeholder="Choose amount" onChange={valueHandler} value={num}></input> {/* input feild that takes in a number */}
                </div>
                <br>
                </br>

                <button className='btn' onClick={getNewNum}>Submit</button> {/* button that produces conversion */}
                <p class="b"> The converted value is {conversionVal} BTC</p>
                <button id="btn1" onClick={everything} className="btn">Refresh Data</button>
            
            </div>

        )

    }

}

export default Conversion;