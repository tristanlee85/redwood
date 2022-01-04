export const command = 'setup <commmand>'
export const description = 'Initialize project config and install packages 2'
import terminalLink from 'terminal-link'

import detectRwVersion from '../middleware/detectProjectRwVersion'

export const builder = (yargs) =>
  yargs
    .commandDir('./setup', { recurse: true })
    .demandCommand()
    .middleware(detectRwVersion)
    .epilogue(
      `Also see the ${terminalLink(
        'Redwood CLI Reference',
        'https://redwoodjs.com/reference/command-line-interface#setup'
      )}`
    )
