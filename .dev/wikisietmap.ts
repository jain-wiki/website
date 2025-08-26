export { }
// Loop through 1 to 100

let myTxt = ''
for (let i = 1; i <= 100; i++) {
  myTxt += `https://data.jain.wiki/wiki/Item:Q${i}\n`
}

// save to file in public/wikisitemap.txt
await Bun.write('public/wikisitemap.txt', myTxt)
console.log('Wrote public/wikisitemap.txt')