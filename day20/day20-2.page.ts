import {Page} from "@playwright/test";
import { AnyARecord } from "node:dns";
class shopperstack{
    loginbtn:any
    email:string
    serchbox:string
    login:any
    searchbtn:any
    addtocart:any
    removecart:any
    checkout:any
    logoutbtn:any

    constructor(page){
        this.loginbtn= page.locator("#loginBtn")
        this.email=page.locator("#Email")
        this.pass=page.locator("#Password")
        this.login=page.getByLable("Login")
        this.serchbox=page.locator("#search")
        this.searchbtn=page.locator("#searchBtn")
        this.addtocart=page.locator('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeSmall MuiButton-outlinedSizeSmall  css-k58djc"]').first()
    }

    async loginprocess(em,pas){
        await this.loginbtn.click()
        await this.email.fill(em)
        await this.pass.fill(pas)
        await this.login.click()
    }

    async searchprocess(prod){
        await this.serchbox.fill(prod)
        await this.searchbtn.click()
    }

    async cart(){
        await this.addtocart.click()
    }
}
export default shopperstack