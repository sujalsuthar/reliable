/**
 * cPanel / MassarCloud Node.js entry point.
 * Set as "Application startup file" in Setup Node.js App → server.js
 */
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000

const app = next({ dev: false })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true)
        await handle(req, res, parsedUrl)
      } catch (err) {
        console.error('[server] request error:', err)
        res.statusCode = 500
        res.end('Internal Server Error')
      }
    }).listen(port, () => {
      console.log(`> Ready on port ${port}`)
    })
  })
  .catch((err) => {
    console.error('[server] failed to start:', err)
    process.exit(1)
  })
