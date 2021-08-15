const githubUrl = "https://raw.githubusercontent.com/MarinaCouso/cyferd/master/src/data/Apps.json"

export const getData = async () => {
  return await fetch(githubUrl).then((response) => response.json())
}
