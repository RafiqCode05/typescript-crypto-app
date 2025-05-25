import type  { Coin } from "../Types/Coin.ts";
import CoinCard from './CoinCard';

interface Props {
    coins: Coin[];
}

const CoinList = ({ coins }: Props) => {
    return (
        <div className="coin-list">
            {coins.map(coin => (
                <CoinCard key={coin.id} coin={coin} />

            ))}
        </div>
    )
}

export default CoinList