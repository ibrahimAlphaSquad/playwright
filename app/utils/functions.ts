export async function getSubVendors() {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL_V1}/v1/casino/subVendors?language=en&datasource=NewLobby`)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.error('Error:', error)
        })
  }