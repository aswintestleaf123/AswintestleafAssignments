import {chromium, firefox,expect, test} from '@playwright/test'

test('Load redbus in edge',async({ },testInfo)=>{
    test.skip(testInfo.project.name !== 'chromium', 'This test only runs in Chromium/Edge')
      const edgebrowser= await chromium.launch({channel:'msedge'})
      const edgeContext=await edgebrowser.newContext()
      const edgePage=await edgeContext.newPage()
      await edgePage.goto("http://www.redbus.in")
      // Retrieve and print Title and URL
    const edgeTitle = await edgePage.title();
    const edgeUrl = edgePage.url();
  
})

test('Load flipkart in firefox',async({ },testInfo)=>{    
    test.skip(testInfo.project.name !== 'Firefox Browser', 'This test only runs in Firefox');  //Both async and await is for keyword
      const ffBrowser= await firefox.launch({headless:false})//await is a dynamic wait without which script may fail 
      const ffbrowserContext=await ffBrowser.newContext()
      const ffPage=await ffbrowserContext.newPage()
      await ffPage.goto("https://www.flipkart.com/")
        const ffTitle = await ffPage.title();
    const ffUrl = ffPage.url();
})