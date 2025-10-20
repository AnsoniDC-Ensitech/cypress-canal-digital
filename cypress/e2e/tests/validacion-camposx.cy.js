import { LogInData } from "../pages/LogIn/LogIn.data";
import { LogInMethods } from "../pages/logIn/logIn.methods";
import { MainPageData } from "../pages/main-page/main-page.data";
import { MainPageMethods } from "../pages/main-page/main-page.methods";

const urlUser = MainPageData.url.urlSite;
const urlCreate = MainPageData.url.urlCreateUser;
const inpUser = LogInData.selectorLogIn.inputname;
const inpPassword = LogInData.selectorLogIn.inputPassword;
const btnLogIn = LogInData.selectorBtnLogIn.loginButton;

describe ('test navegacion', ()=>{
    let users;

  beforeEach(() => {
    cy.fixture('user').then((data) => {
      users = data;
    });
  });
    it ('navegacion', ()=>{
        MainPageMethods.browseWebsite(urlUser)
        LogInMethods.logIn(inpUser,users.validAcceses.username,inpPassword, users.validAcceses.password,btnLogIn);
        //MainPageMethods.browseWebsite(urlCreate);
        // cy.visit("https://appweb-plantillanet9-cgb8cnhydgd3d7c8.southcentralus-01.azurewebsites.net/User/Create");
        // cy.get('li[class="breadcrumb-item active"]').should('be.visible');
    })
})