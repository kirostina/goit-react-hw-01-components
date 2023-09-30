import PropTypes from 'prop-types';
import { TransactionItem } from "../TransactionItem/TransactionItem";
import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return <table className={css.transactionHistory}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) =>
                <TransactionItem
                    key={id}
                    idItem={id}
                    typeItem={type}
                    amountItem={amount}
                    currencyItem={currency}
                />
            )}
        </tbody>
    </table>
}

TransactionHistory.prototype = {
    items: PropTypes.arrayOf(PropTypes.string)
}