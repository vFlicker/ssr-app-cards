export const apiService = {
  async fetchApps() {
    const response = await fetch(`assets/data.json`)
    return response.json()
  },
}