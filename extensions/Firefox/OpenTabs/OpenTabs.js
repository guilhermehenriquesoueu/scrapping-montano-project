const apiUrl = 'http://localhost:3000/url'
const interval = 5000
const tabInterval = 1000

async function openTabs(urls) {
  if (!urls || urls.length === 0) {
    return
  }

  for (const url of urls) {
    await browser.tabs.create({ url: url })
    await new Promise((resolve) => setTimeout(resolve, tabInterval))

    // Send a DELETE request with the URL in the request body
    await fetch(apiUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: url })
    })
  }
}

async function main() {
  try {
    const response = await fetch(apiUrl, { method: 'GET' })
    const urls = await response.json()

    await openTabs(urls)
  } catch (error) {
    console.error(error)
  } finally {
    setTimeout(main, interval)
  }
}

main()
