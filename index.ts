export function replaceAll(str: string, r: string, to: string): string {
  let result = str
  while(result.indexOf(r) !== -1) {
    result = result.replace(r, to)
  }

  return result
}
