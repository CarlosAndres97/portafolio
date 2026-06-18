import net from 'net'

/**
 * Detects the next available port starting from `startPort`.
 * Tries up to `maxAttempts` ports in sequence.
 */
export const detectAvailablePort = async (
  startPort: number,
  maxAttempts: number = 20
): Promise<number> => {
  const isPortAvailable = (port: number): Promise<boolean> => {
    return new Promise((resolve) => {
      const tester = net
        .createServer()
        .once('error', (err: NodeJS.ErrnoException) => {
          if (err.code === 'EADDRINUSE') {
            resolve(false)
          } else {
            resolve(false)
          }
        })
        .once('listening', () => {
          tester.close(() => resolve(true))
        })
        .listen(port, '0.0.0.0')
    })
  }

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const port = startPort + attempt
    const available = await isPortAvailable(port)
    if (available) {
      return port
    }
  }

  throw new Error(
    `No se encontró un puerto disponible entre ${startPort} y ${startPort + maxAttempts - 1}`
  )
}
