import {test,expect} from '@playwright/test';

for (const width of [390,1440]) {
 test('scene and stationery transform together at '+width+'px',async({page})=>{
  await page.setViewportSize({width,height:900});
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.goto('/');
  await expect(page.locator('.hero-art-au')).toHaveCSS('opacity','0');
  await expect(page.locator('.bird-brasil')).toHaveCSS('opacity','1');
  const lining=await page.locator('.envelope-lining').evaluate(el=>getComputedStyle(el).backgroundImage);
  const wax=await page.locator('#open-letter').evaluate(el=>getComputedStyle(el).backgroundImage);
  await page.getByRole('switch').click();
  await expect(page.locator('#petal-transition span')).toHaveCount(28);
  await expect(page.locator('.hero-art-au')).toHaveCSS('opacity','1');
  expect(await page.locator('.hero-art-au').evaluate(i=>i.complete&&i.naturalWidth>1000)).toBe(true);
  await expect(page.locator('.bird-australia')).toHaveCSS('opacity','1');
  await expect(page.locator('.bird-brasil')).toHaveCSS('opacity','0');
  await expect(page.locator('.flight-path')).toHaveCSS('opacity','1');
  await expect(page.locator('.postage-australia')).toHaveCSS('opacity','1');
  expect(await page.locator('.envelope-lining').evaluate(el=>getComputedStyle(el).backgroundImage)).not.toBe(lining);
  expect(await page.locator('#open-letter').evaluate(el=>getComputedStyle(el).backgroundImage)).toBe(wax);
  await expect(page.locator('#petal-transition span')).toHaveCount(0);
  await page.locator('#rsvp').scrollIntoViewIfNeeded();
  await expect(page.locator('#envelope-stage')).not.toHaveClass(/is-open/);
  await page.locator('#open-letter').click();
  await expect(page.locator('#rsvp-letter')).not.toHaveAttribute('inert','');
  await expect(page.locator('#guest-name')).toBeFocused();
  await page.locator('#guest-name').fill('Draft preserved');
  await page.getByRole('switch').click();
  await expect(page.locator('.postage-brasil')).toHaveCSS('opacity','1');
  await expect(page.locator('#guest-name')).toHaveValue('Draft preserved');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  expect(errors).toEqual([]);
 });
}

test('reduced motion shows both themes without sweeping petals',async({page})=>{
 await page.emulateMedia({reducedMotion:'reduce'});
 await page.goto('/');
 await page.getByRole('switch').click();
 await expect(page.locator('#petal-transition span')).toHaveCount(0);
 await expect(page.locator('.hero-art-au')).toHaveCSS('opacity','1');
 await expect(page.locator('.sky-plane')).toHaveCSS('animation-name','none');
 await page.reload();
 await expect(page.locator('html')).toHaveAttribute('data-theme','australia');
});

test('rapid switches clear their transition and keep the final choice',async({page})=>{
 await page.goto('/');
 for(let i=0;i<5;i++) await page.getByRole('switch').click();
 await expect(page.locator('html')).toHaveAttribute('data-theme','australia');
 await expect(page.locator('#petal-transition span')).toHaveCount(0);
 await expect(page.locator('#culture-switch')).not.toHaveClass(/is-switching/);
});
