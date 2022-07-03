import {useState, useEffect} from 'react'
import "../StyleAndImg/style.css";
import NavBar from "../components/NavBar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import BackBtn from '../BackBtn';

const CompanyList = (props) => {

    var [data, setData] = useState([])

    useEffect(() => {
        fetch("/compdata/").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    const options = [{value: 'name', text: 'Name'},
                    {value: 'year', text: 'Year'},
                    {value: 'location', text: 'Location'},
                    {value: 'rating', text: 'Overall Rating'},
                    {value: 'games', text: 'Top 3 Games'},];
    const [selected, setSelected] = useState(options[0].value);
    const orders = [{value: 1, text: 'Ascending (A-Z or numerical)'},
                    {value: '-1', text: 'Descending (Z-A or numerical)'}];
    const [order, setOrder] = useState(orders[0].value);

    const handleSelectChg = event => {
        setSelected(event.target.value);
    };

    const handleOrderChg = event => {
        setOrder(event.target.value);
    };

    sortByProperty();

    return (
        <div className='page'>
            <link rel="stylesheet" href="style.css" type="text/css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link
                href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap"
                rel="stylesheet"
            />

            <NavBar></NavBar>
            <div className="listTitleText" style={{ animation: "fadeIn 0.5s" }}>
                Companies
            </div>
            <div id="sort">
                Sort By:
            </div>
            <select value={selected} onChange={handleSelectChg}>
                {options.map(option => (
                    <option key ={option.value} value ={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
            <select value={order} onChange={handleOrderChg}>
                    {orders.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.text}
                    </option>
                    ))}
            </select>
            <div class="container">
                <div className="row" style={{marginTop: "3%"}}>
                        {data.map(item => (
                        <div className="col-lg col-12 card">
                            <Link to="/companies/comp" className="link-style" onClick={() => {localStorage.setItem("COMPANY", JSON.stringify(item))}} style={{ textDecoration: 'none' }}>
                                
                            <img class="companyLogo" src={item.img} alt="company logo"></img>
                            
                            <div class="compName">
                                {item.name}
                            </div>
                            <div class="">
                                Est. {item.year}
                            </div>
                            <div class="">
                                {item.location}
                            </div>
                            <div>
                                Overall Rating: {item.rating}%
                                <br/><br/>
                            </div>
                            <div class="topThree">
                                <b>Top 3 Games:</b>
                                <ol>
                                    <li>
                                        {item.games[0]}
                                    </li>
                                    <li>
                                        {item.games[1]}
                                    </li>
                                    <li>
                                        {item.games[2]}
                                    </li>
                                </ol>
                            </div>
                              
                            </Link>
                        </div>
                        ))}
                </div>
            </div>
            <BackBtn></BackBtn>
        </div>
    )

    function sortByProperty() {
        var objArr = data;
        var prop = "attributes." + selected;
        var dir = order;

        if (!Array.isArray(objArr)) throw new Error("FIRST ARGUMENT NOT AN ARRAY");

        const clone = objArr.slice(0);
        const propPath = (prop.constructor === Array) ? prop : prop.split(".");

        clone.sort(function(a,b) {
            for (let p in propPath) {
                if (a[propPath[p]] && b[propPath[p]]) {
                    a = a[propPath[p]];
                    b = b[propPath[p]];
                }
            }
            // convert numeric str's to ints
            /*a = a.match(/^\d+$/) ? +a : a;
            b = b.match(/^\d+$/) ? +b : b;*/
            return ((a < b) ? -1*dir : ((a > b) ? 1*dir : 0));
        });
        // update the data
        data = clone;
    }

}

export default CompanyList