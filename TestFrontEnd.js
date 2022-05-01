const {Builder, By, Key, util} = require("selenium-webdriver");
const assert = require('assert')

describe('HomePageNaviagate', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().forBrowser('chrome').build()
      vars = {}
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('HomePageNaviagate', async function() {
      await driver.get("http://localhost:3000/")
      await driver.manage().window().setRect({ width: 1054, height: 808 })
      await driver.findElement(By.css(".btn")).click()
      await driver.findElement(By.css(".tile-container:nth-child(1) .table-cell > div:nth-child(2)")).click()
      await driver.findElement(By.css(".btn-primary:nth-child(1)")).click()
      await driver.findElement(By.id("react-burger-menu-btn")).click()
      await driver.findElement(By.id("application")).click()
      await driver.findElement(By.id("react-burger-menu-btn")).click()
      await driver.findElement(By.id("status")).click()
      await driver.findElement(By.id("react-burger-menu-btn")).click()
      await driver.findElement(By.id("postings")).click()
      await driver.findElement(By.id("react-burger-menu-btn")).click()
      await driver.findElement(By.id("applicant")).click()
    })
  })

  describe('SignOutTest', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().forBrowser('chrome').build()
      vars = {}
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('SignOutTest', async function() {
      await driver.get("http://localhost:3000/")
      await driver.manage().window().setRect({ width: 1054, height: 808 })
      await driver.findElement(By.css(".btn")).click()
      await driver.findElement(By.css(".signOutBtn")).click()
      assert(await driver.switchTo().alert().getText() == "You are successfully signed out.")
      await driver.close()
    })
  })

  describe('ViewJobListingsPage', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().forBrowser('chrome').build()
      vars = {}
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('ViewJobListingsPage', async function() {
      await driver.get("http://localhost:3000/")
      await driver.manage().window().setRect({ width: 1054, height: 808 })
      await driver.findElement(By.css(".btn")).click()
      await driver.findElement(By.css(".tile-container:nth-child(1) div:nth-child(2) > small")).click()
      await driver.findElement(By.css(".btn:nth-child(4)")).click()
    })
  })

  describe('LoginTest', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder().forBrowser('chrome').build()
      vars = {}
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('LoginTest', async function() {
      await driver.get("http://localhost:3000/")
      await driver.manage().window().setRect({ width: 1054, height: 808 })
      await driver.findElement(By.css(".btn")).click()
    })
  })
