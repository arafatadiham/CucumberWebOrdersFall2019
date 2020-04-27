package com.weborders.step_definitions;

import com.weborders.pages.LoginPage;
import com.weborders.utilities.ConfigurationReader;
import com.weborders.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;

public class LoginStepDefinitions {

    LoginPage loginPage = new LoginPage();

    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        System.out.println("Open login page");
        String URL = ConfigurationReader.getProperty("url");
        Driver.getDriver().get(URL);
    }

    @Given("user logs in")
    public void user_logs_in() {
        System.out.println("Login as tester");
        loginPage.login("Tester", "test");
        System.out.println("Login successfully");
    }

}
