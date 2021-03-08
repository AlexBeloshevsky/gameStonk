const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disabled-setuid-sandbox']});
    const page = await browser.newPage();

    await page.goto('https://www.marketwatch.com/investing/stock/gme');
    await page.waitForTimeout(500)

    const result = await page.evaluate(() => {
		let tickerPrice = document.querySelector('.intraday__price').querySelector('.value').innerText;
		
	return tickerPrice;
	
});

	browser.close();
	return result;
}

scrape().then((value) => {
	console.log(value);
});