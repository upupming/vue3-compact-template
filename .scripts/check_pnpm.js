if (!/pnpm\.[cm]js$/.test(process.env.npm_execpath || '')) {
  console.warn(
    '\u001b[33mThis repository requires pnpm for scripts to work properly.\u001b[39m\n'
  )
  process.exit(1)
}
