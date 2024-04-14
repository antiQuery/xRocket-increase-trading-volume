authorization = '' //your token from xrocket

crypto_for_sell = 'TONCOIN'
crypto_for_buy = 'USDT'

sellingCoinId = 1
buyingCoinId = 30

pareId = 23

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function getFreeBalance(coinId) {
    amount = await fetch(`https://private.ton-rocket.com/user/balances/${coinId}`, {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
            "authorization": authorization,
            "if-none-match": "W/\"54-ygIyR2dv11FU/JCMX8BzrUnRfpM\"",
            "sec-ch-ua": "\"Microsoft Edge\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\", \"Microsoft Edge WebView2\";v=\"123\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "Referer": "https://web.ton-rocket.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
    }).then(response => {
        return response.json();
    }).then(data => {
        return data.data.freeBalance
    })
    return amount
}

async function changer(amount, pairId, currency, type) {
    result = fetch("https://private.ton-rocket.com/orders/order", {
        "headers": {
            "accept": "application/json, text/plain, */*",
            "accept-language": "ru,en;q=0.9,en-GB;q=0.8,en-US;q=0.7",
            "authorization": authorization,
            "content-type": "application/json",
            "sec-ch-ua": "\"Microsoft Edge\";v=\"123\", \"Not:A-Brand\";v=\"8\", \"Chromium\";v=\"123\", \"Microsoft Edge WebView2\";v=\"123\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            "Referer": "https://web.ton-rocket.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": `{\"amount\":${amount},\"pairId\":\"${pairId}\",\"currency\":\"${currency}\",\"executeType\":\"MARKET\",\"rate\":0,\"type\":\"${type}\",\"checkBalance\":false}`,
        "method": "POST"
    }).then(response => {
        return response.json();
    }).then(data => {
        return data
    })
    return result
}

async function main() {
    while (true) {
        amount = await getFreeBalance(sellingCoinId)
        data = await changer(amount, pareId, crypto_for_sell, 'SELL')
        console.log(`success: ${data.success}\nSell ${amount} TON\n`)
        await sleep(2000)

        amount = await getFreeBalance(buyingCoinId)
        data = await changer(amount, pareId, crypto_for_buy, 'BUY')
        console.log(`success: ${data.success}\nBuy ${amount} USDT\n`)
        await sleep(2000)
    }
}

main()
