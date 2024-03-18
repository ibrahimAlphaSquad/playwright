const baseUrl = "https://monkeytilt-api.stage.norway.everymatrix.com/";

export async function getSubVendors(): Promise<any> {
  return fetch(`${baseUrl}/v1/casino/subVendors?datasource=NewLobby&fields=id,identity,name&language=en`,
    {
      cache: 'no-cache'
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error('Error:', error);
      return [];
    });
}