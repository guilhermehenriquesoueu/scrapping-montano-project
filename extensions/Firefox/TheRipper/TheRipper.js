const apiUrl = 'http://localhost:3000/ask'
const numberOfTimesToScroll = 2
const windowHeight = window.innerHeight
let step = 0
let postsReddit = []
let interval = 5000

async function scrapeAndPostData() {
  if (step === 0) {
    /**
     * Execute scroll each Xpx to load more posts on page
     * */
    for (let i = 0; i < numberOfTimesToScroll; i++) {
      window.scrollBy(0, windowHeight * numberOfTimesToScroll)
    }
    step += 1
  } else if (step === 1) {
    /**
     * Get all posts on page
     * */
    const mainDiv = document.querySelector('report-flow-provider')
    postsReddit = mainDiv.querySelectorAll('shreddit-post')
    step += 1
  } else if (step === 2) {
    /**
     * Get elements of each post and send them to API
     * */
    const postCount = postsReddit.length
    for (let i = 0; i < postCount; i++) {
      const element = postsReddit[i]
      const fullPostLink = element.querySelector('[slot="full-post-link"]')
      const titleElement = element.querySelector('[slot="title"]')
      const textBodyElement = element.querySelector('div[slot="text-body"]')

      const postFormatted = {
        url: fullPostLink ? fullPostLink.getAttribute('href') : '',
        title: titleElement ? titleElement.innerText : '',
        body: textBodyElement ? textBodyElement.innerText : ''
      }

      fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(postFormatted),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    }

    step += 1
  } else if (step === 3) {
    window.location.href = 'about:blank'
  }
}

setInterval(scrapeAndPostData, interval)
