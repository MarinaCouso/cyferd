const githubAppUrl = "https://raw.githubusercontent.com/MarinaCouso/cyferd/master/src/data/Apps.json"
const githubDataUrl = "https://raw.githubusercontent.com/MarinaCouso/cyferd/master/src/data/Data.json"

export const getAppsInfo = async () => {
  return await fetch(githubAppUrl).then((response) => response.json())
}

export const getObjectsData = async () => {
  return await fetch(githubDataUrl).then((response) => response.json())
}
