# Installation
1. Install Node.js
2. Clone this repo:
   ```bash
   git clone https://github.com/antiQuery/xRocket-increase-trading-volume.git
   ```
4. Change directory:
   ```bash
   cd xRocket-increase-trading-volume
   ```

# Configuration
1. Open up your Telegram Desktop and go to Settings > Advanced > Experimental settings > Enable webview inspecting
2. Turn on Enable webview inspecting
3. Restart your Telegram Desktop
4. Open xRocket's Web Exchange
5. Press combination Ctrl + Shift + i
6. In a webview inspect window, search for "Network" tab and switch to it![image](https://github.com/antiQuery/xRocket-increase-trading-volume/assets/152047659/357edb98-10d9-4f62-a0f3-bdb3e5598b01)
##
### Open ```main.js``` and edit the variables (For example, let's use the pair TON - USDT)
##
- ```authorization``` - Press combination Ctrl + R in web app window, search "user" request, scroll down the "Headers" tab and find the "Authorization" field![image](https://github.com/antiQuery/xRocket-increase-trading-volume/assets/152047659/fb692a3a-5069-447f-8e83-a8c8fc57adc4)

- ```crypto_for_sell```, ```crypto_for_buy```, ```pareId``` - Do convert currencies in web app and search "order" request, switch to "Payload" tab. For example, if the order type is "SELL" and the currency is "TONCOIN", then crypto_for_sell = "TONCOIN" and crypto_for_buy is the opposite currency of the order![Untitled](https://github.com/antiQuery/xRocket-increase-trading-volume/assets/152047659/0a101bb6-a5e2-4166-b79b-16819fa7aaa1)

- ```sellingCoinId```, ```buyingCoinId``` - In the convert menu in the upper field select first the currency for sell, then for buy and look for the number in the request name. The number is your coin id.
  - ![Screenshot 2024-04-15 042012](https://github.com/antiQuery/xRocket-increase-trading-volume/assets/152047659/a1b85caa-55bb-47c6-9123-873911e575af) ![Screenshot 2024-04-15 041809](https://github.com/antiQuery/xRocket-increase-trading-volume/assets/152047659/b88c5bd9-1934-469c-87b0-d87919ead84d)

# Run
For every 1k$ of trading value, it takes about 2$ of commission.
```bash
  node main.js
```

## Donations
```UQC2dmPrV6qO04s9RKM-b9Mz3GIVD8DJl5pJRkkTfuj_FrrP```

## Copyright & License
- Copyright (©) 2020 by [antiQuery](https://github.com/antiQuery)
- Licensed under the terms of the [GPL-3.0](./LICENSE)
