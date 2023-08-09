import { Selector } from 'testcafe'

fixture`Getting Started`
    .page`http://zero.webappsecurity.com/`

test('User can search for a product', async t => {
    const searchInput = Selector('#searchTerm');

    const resultTitle = Selector('.top_offset');

    await t
        .typeText(searchInput, 'online bank');
    await t.pressKey('enter');
    await t.expect(resultTitle.innerText).contains('online bank');
})
test('Valid Login test', async t => {
    const usernameInput = Selector('#user_login');
    const passwordInput = Selector('#user_password');
    const submitButton = Selector('input[type="submit"][name="submit"][value="Sign in"][class="btn btn-primary"][tabindex="4"]');

    await t.click("#signin_button");
    await t.typeText(usernameInput, 'username');
    await t.typeText(passwordInput, 'password');
    await t.click(submitButton);
});