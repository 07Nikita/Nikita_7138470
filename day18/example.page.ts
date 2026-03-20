class Eaxmple{
    usernameTF:string
    passwordTF:string
    SubmitBtn:any

    constructor(page){
        this.usernameTF=page.locator("#username")
        this.passwordTF=page.locator("#password")
        this.SubmitBtn=page.locator("#submit")
    }
    async btn(){
        await this.usernameTF.fill(username)
        await this.
        await this.SubmitBtn.click()
    }
}

export default Eaxmple