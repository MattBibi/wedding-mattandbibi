import {test,expect} from '@playwright/test';
test('approved illustration, real details and readable desktop layout', async ({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');
 await expect(page).toHaveTitle(/Bibi & Matt/);
 await expect(page.locator('.hero-art').first()).toBeVisible();
 expect(await page.locator('.hero-art').first().evaluate(i=>i.complete&&i.naturalWidth>1000)).toBe(true);
 await expect(page.locator('#ceremony h3')).toHaveText('Paróquia São João Batista');
 await expect(page.locator('#ceremony .text-link')).toHaveAttribute('href','https://maps.app.goo.gl/K4VxHE4jRkmT7xyH6');
 await expect(page.locator('.date-note')).toContainText('confirmed');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
 expect(errors).toEqual([]);
});
test('language and visual theme are independent, translated and persistent', async({page})=>{
 await page.goto('/');
 await page.getByRole('button',{name:'PT-BR',exact:true}).click();
 await expect(page.locator('html')).toHaveAttribute('lang','pt-BR');
 await expect(page.locator('#hero-title')).toContainText('Nossa forma');
 await expect(page.locator('label[for=guest-name]')).toHaveText('Seu nome');
 await page.getByRole('switch').click();
 await expect(page.locator('html')).toHaveAttribute('data-theme','australia');
 await expect(page.locator('html')).toHaveAttribute('lang','pt-BR');
 await expect(page.locator('#heritage-note')).toContainText('sol australiano');
 await page.reload();
 await expect(page.locator('html')).toHaveAttribute('data-theme','australia');
 await expect(page.locator('html')).toHaveAttribute('lang','pt-BR');
 await page.getByRole('button',{name:'EN',exact:true}).click();
 await expect(page.locator('#hero-title')).toContainText('Our favourite');
 await expect(page.locator('html')).toHaveAttribute('data-theme','australia');
});
test('Brazilian Portuguese browser gets Portuguese on first visit',async({browser})=>{
 const context=await browser.newContext({locale:'pt-BR'});
 const page=await context.newPage();await page.goto('http://127.0.0.1:8080');
 await expect(page.locator('html')).toHaveAttribute('lang','pt-BR');await context.close();
});
for (const width of [360,390,768,1440]) {
 test('no horizontal overflow at '+width+'px, in both languages',async({page})=>{
  await page.setViewportSize({width,height:900});
  await page.goto('/');
  for(const lang of ['en','pt']){
   await page.locator('[data-language='+lang+']').click();
   await page.locator('#rsvp').scrollIntoViewIfNeeded();
   if(await page.locator('#open-letter').isVisible()) await page.locator('#open-letter').click();
   await expect(page.locator('#envelope-stage')).toHaveClass(/is-open/);
   await expect(page.locator('#rsvp-letter')).not.toHaveAttribute('inert','');
   await page.waitForTimeout(1100);
   expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),lang+' overflow at '+width).toBe(true);
   await expect(page.locator('#guest-name')).toBeVisible();
   await expect(page.locator('.send-button')).toBeVisible();
  }
 });
}
async function fillRsvp(page){
 await page.goto('/');await page.locator('#rsvp').scrollIntoViewIfNeeded();
 await page.locator('#open-letter').click();
   await expect(page.locator('#envelope-stage')).toHaveClass(/is-open/);
   await expect(page.locator('#rsvp-letter')).not.toHaveAttribute('inert','');
 await page.locator('#guest-name').fill('Website test - never emailed');
 await page.locator('#guest-email').fill('test@example.com');
 await page.locator('input[name=Attendance][value=Yes]').check();
 await page.locator('#guest-count').selectOption('2');
}
test('RSVP submits in-page to the configured recipients without sending test mail',async({page})=>{
 let payload;
 await page.route('https://formsubmit.co/ajax/**',async route=>{
  payload=route.request().postDataJSON();
  await route.fulfill({status:200,contentType:'application/json',body:JSON.stringify({success:'true',message:'Form submitted successfully'})});
 });
 await fillRsvp(page);
 await page.getByRole('button',{name:'Send RSVP',exact:true}).click();
 await expect(page.locator('#rsvp-success')).toBeVisible();
 expect(payload._cc).toBe('matt@mattcarolan.net');
 expect(payload['Number of guests']).toBe('2');
 expect(payload['Dietary requirements']).toBeUndefined();
 expect(payload['Wedding date']).toContain('2027');
});
test('service failure keeps the answers and offers a retry',async({page})=>{
 await page.route('https://formsubmit.co/ajax/**',route=>route.fulfill({status:503,contentType:'application/json',body:'{"success":false}'}));
 await fillRsvp(page);await page.locator('.send-button').click();
 await expect(page.locator('#form-status')).toContainText("couldn't confirm");
 await expect(page.locator('#guest-name')).toHaveValue('Website test - never emailed');
 await expect(page.locator('.send-button')).toBeEnabled();
 await expect(page.locator('#rsvp-success')).toBeHidden();
});
test('activation acknowledgement never pretends an RSVP was delivered',async({page})=>{
 await page.route('https://formsubmit.co/ajax/**',route=>route.fulfill({status:200,contentType:'application/json',body:'{"success":true,"message":"Please activate your form by checking your email"}'}));
 await fillRsvp(page);await page.locator('.send-button').click();
 await expect(page.locator('#form-status')).toContainText('awaiting activation');
 await expect(page.locator('#rsvp-success')).toBeHidden();
});
test('declining records zero guests and preserves form accessibility',async({page})=>{
 let payload;
 await page.route('https://formsubmit.co/ajax/**',async route=>{payload=route.request().postDataJSON();await route.fulfill({contentType:'application/json',body:'{"success":true}'});});
 await fillRsvp(page);await page.locator('input[name=Attendance][value=No]').check();
 await expect(page.locator('#guest-count')).toBeDisabled();
 await page.locator('.send-button').click();
 await expect(page.locator('#rsvp-success')).toBeVisible();
 expect(payload['Number of guests']).toBe('0');
});
test('reduced motion opens envelope and permits keyboard form use',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.goto('/');await page.locator('#rsvp').scrollIntoViewIfNeeded();
 await page.locator('#open-letter').focus();await page.keyboard.press('Enter');
 await expect(page.locator('#rsvp-letter')).not.toHaveAttribute('inert','');
 await page.locator('#guest-name').focus();await expect(page.locator('#guest-name')).toBeFocused();
});
 test('scroll leaves letter sealed until the wax seal is activated',async({page})=>{
 await page.goto('/');await page.locator('#rsvp').scrollIntoViewIfNeeded();
 await page.waitForTimeout(1200);
 await expect(page.locator('#envelope-stage')).not.toHaveClass(/is-open/);
 await expect(page.locator('#rsvp-letter')).toHaveAttribute('inert','');
 await expect(page.locator('#open-letter')).toHaveText(/Click to Open/);
 await expect(page.locator('#dietary')).toHaveCount(0);
 await expect(page).toHaveTitle(/2027/);
 await page.locator('#open-letter').click();
 await expect(page.locator('#rsvp-letter')).not.toHaveAttribute('inert','');
 await expect(page.locator('#guest-name')).toBeFocused();
 });
