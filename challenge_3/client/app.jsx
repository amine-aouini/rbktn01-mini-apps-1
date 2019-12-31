

class Checkout extends React.Component {
    render() {
        return (
            <div>
                <button onclick={() => { ReactDOM.render(<Adress />, document.getElementById("root")); }}>check out</button>
            </div>
        )
    }
}

class Adress extends React.Component {
    render() {
        return (
            <div>
                <label>Address 1:* </label>
                <input type="text"></input>
                <br />
                <label>Address 2:* </label>
                <input type="text"></input>
                <br />
                <label>City/State/ZIP:* </label>
                <input type="text"></input>
                <select>
                    <option value="" selected disabled hidden>State</option>
                    <option value="tunis">tunis</option>
                    <option value="safax">safax</option>
                    <option value="sousse">sousse</option>
                    <option value="hammamat">hammamat</option>
                    <option value="klibia">klibia</option>
                    <option value="binzart">binzart</option>
                    <option value="gabes">gabes</option>
                    <option value="other">other</option>
                </select>
                <input type="number"></input>
                <br />
            </div>
        )
    }
}

class AccountCreation extends React.Component {
    render() {
        return (
            <div>
                <label>First Name:* </label>
                <input type="text"></input>
                <br />
                <label>Last Name:* </label>
                <input type="text"></input>
                <br />
                <label>Email:* </label>
                <input type="text"></input>
                <br />
                <label>password:* </label>
                <input type="text"></input>
                <br />
                <button>next</button>
            </div>
        )
    }
}

class Cart extends React.Component {

    render() {
        return (
            <div>
                <label>credit card:* </label>
                <input type="number"></input>
                <br />
                <label>expiry date:* </label>
                <input type="number"></input>
                <br />
                <label>CVV:* </label>
                <input type="number"></input>
                <br />
                <label>billing zip code:* </label>
                <input type="number"></input>
                <br />
                <button>Checkout</button>
            </div>
        )
    }
}

ReactDOM.render(<Checkout />, document.getElementById("root"));

