//This function takes the browser page, types in the credentials, clicks login, and returns the message

async function testLoginForm(page, user, pass) {
  const username = page.locator("#username");
  const password = page.locator("#password");
  const btn = page.locator("#loginBtn");
  const msg = page.locator("#msg");

  await username.fill(user);
  await password.fill(pass);
  await btn.click();

  return await msg.textContent();
}

export default testLoginForm;