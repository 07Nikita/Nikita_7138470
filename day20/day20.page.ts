import { Page } from "@playwright/test";

class amazonp {

    searchBox:string
    searchButton:any
    ramFilter:string
    phones:string
    quantityDropdown:any
    addToCartBtn:any

    constructor(page){

        this.searchBox = page.locator("#twotabsearchtextbox")
        this.searchButton = page.locator("#nav-search-submit-button")
        this.ramFilter = page.getByLabel("10 GB & Above")
        this.phones = page.locator('//img[@class="s-image"]')
        // this.quantityDropdown = page.locator("#quantity")
        this.addToCartBtn = page.locator('(//input[@id="add-to-cart-button" and @title="Add to Shopping Cart"])[1]')
    }

    async searchProduct(product){
        await this.searchBox.fill(product)
        await this.searchButton.click()
    }

    async applyRamFilter(){
        await this.ramFilter.click()
    }

    async selectPhone(index){
        const phone = this.phones.nth(index)
        await phone.click()
    }

    // async changeQuantity(quantity){
    //     await this.quantityDropdown.selectOption(quantity)
    // }

    // async addToCart(){
    //     await this.addToCartBtn.click()
    // }
}

export default amazonp