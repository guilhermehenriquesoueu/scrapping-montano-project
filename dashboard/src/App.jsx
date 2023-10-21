import { useState } from 'react'

export default function App() {
  const [url, setUrl] = useState('')
  const [posts, setPosts] = useState([])

  async function handleSubmit(e) {
    e.preventDefault()
    await fetch('http://localhost:3000/url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url })
    })
  }

  async function getPosts() {
    const response = await fetch('http://localhost:3000/ask')
    const data = await response.json()
    setPosts(data)
  }

  return (
    <div className='container'>
      <header className='division'>
        <img
          src='/header.png'
          sizes=''
        />
      </header>
      <main className='is-flex is-flex-direction-column'>
        <form
          onSubmit={handleSubmit}
          style={{ marginBottom: '1rem' }}
        >
          <div className='is-flex is-justify-content-space-between'>
            <div
              className='is-flex'
              style={{ width: '800px' }}
            >
              <input
                className='input is-primary'
                type='text'
                name='url'
                placeholder='Enter URL to open'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button
                className='button is-primary'
                type='submit'
              >
                Open Url
              </button>
            </div>
            <div className=''>
              <button
                className='button is-info'
                onClick={getPosts}
              >
                Load posts
              </button>
            </div>
          </div>
        </form>
        <div>
          {posts.map((post) => (
            <div
              className='card'
              key={post.url}
              style={{ marginBottom: '1rem' }}
            >
              <div className='card-content'>
                <div className='media'>
                  <div className='media-content'>
                    <p className='title is-4'>{post.title}</p>
                    <p className='subtitle'>{post.body}</p>
                    <a
                      className='button is-primary'
                      href={'https://reddit.com' + post.url}
                      target='_blank'
                      rel='noreferrer'
                    >
                      open post
                    </a>
                  </div>
                </div>
                <div className='content'>{post.textBody}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
