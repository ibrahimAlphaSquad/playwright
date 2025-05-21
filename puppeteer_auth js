module.exports = async (browser) => {
  const page = await browser.newPage();
 
  console.log('🟨 navigating to login page...');

  await page.goto('login-page');
 
  await page.waitForNavigation();

  await page.type('#username', 'username');
  await page.type('#password', 'password');
  await page.click('#submit');

  await page.close();
  // from now on lighthouse take control of the browser
};