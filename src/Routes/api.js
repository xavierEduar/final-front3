export const getDentistsFromAPI = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('No se pudo obtener la lista de dentistas');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('Error al obtener la lista de dentistas: ' + error.message);
    }
  };