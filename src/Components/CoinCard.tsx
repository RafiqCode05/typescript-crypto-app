import type { Coin } from "../Types/Coin";
import PriceChart from './PriceChart';

interface Props {
    coins: Coin[];
}

const CoinCard = ({ coin }: Props) => {
    return (
        <div className="coin-card">
            <div className="coin-header">
                <img src={coin.image} alt={coin.name} width={32} height={32} />
                <div>
                    <h3>
                        {coin.name} <span>({coin.symbol.toUpperCase()})</span>
                    </h3>
                    <div className="coin-price">
                        ${coin.current_price.toLocaleString()}
                    </div>
                    <div className={`coin-change ${coin.price_change_percentage_24h >= 0 ? "up" : "down"}`}>
                        {coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                </div>
            </div>
            <PriceChart data={coin.sparkline_in_7d.price} />
        </div>
    )
}

export default CoinCard