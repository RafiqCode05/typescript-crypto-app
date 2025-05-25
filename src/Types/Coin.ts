import { useEffect, useState } from "react";

export interface Coin {
    id: string;
    name: string;
    symbol: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    sparkline_in_7d: { price: number[] };
}

export function useCoins() {
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=true"
        )
            .then(res => res.json())
            .then(setCoins)
            .catch(() => setError("Məlumat yüklənmədi..."))
            .finally(() => setLoading(false))
    }, []);

    return { coins, loading, error };
}

