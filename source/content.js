
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
async function main()
{   //click nút tiếp tục
    while (true) {
        await wait(5000)
        document.querySelector("#logo_button")?.click()
        document.querySelector("#connectToInternet")?.click()
        document.querySelector("#acceptconnection_BannerOverflow")?.click()
        window.scrollTo(document.body.scrollWidth,document.body.scrollHeight)
    }
}
main()