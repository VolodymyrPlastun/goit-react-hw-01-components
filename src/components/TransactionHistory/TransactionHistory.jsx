import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <table className={s.transactionHistory}>
        <thead className={s.tableHead}>
            <tr >
                <th className={s.tableRow}>Type</th>
                <th className={s.tableRow}>Amount</th>
                <th className={s.tableRow}>Currency</th>
            </tr>
        </thead>

        <tbody className={s.tableBody}>
            {items.map(item => (
                <tr>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}

        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
    })
)
}

export default TransactionHistory;