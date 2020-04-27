package com.weborders.pages;

import com.weborders.utilities.BrowserUtilities;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class OrdersPage extends BasePage {

    @FindBy(id = "ctl00_MainContent_fmwOrder_ddlProduct")
    private WebElement productSelection;

    @FindBy(id = "ctl00_MainContent_fmwOrder_txtQuantity")
    private WebElement productQuantity;

    @FindBy(id= "ctl00_MainContent_fmwOrder_txtUnitPrice")
    private WebElement productUnitPrice;

    @FindBy(id= "ctl00_MainContent_fmwOrder_txtDiscount")
    private WebElement productDiscount;

    @FindBy(id= "ctl00_MainContent_fmwOrder_txtTotal")
    private WebElement totalPrice;

    @FindBy(xpath = "//input[@value='Calculate']")
    private WebElement calculateBtn;


    public void setProductSelection(String product){
        BrowserUtilities.waitForPageToLoad(20);
        Select productSelect = new Select(productSelection);
        //index starts from 0
        productSelect.selectByVisibleText(product); // visible text will be "ScreenSaver"
    }

    public void setQuantity(String quantity){
        productQuantity.sendKeys(quantity);
    }

    public void setProductUnitPrice(String price){
        productQuantity.sendKeys(price);
    }

    public void setProductDiscount(String discount){
        productQuantity.sendKeys(discount);
    }



}
