let apiKey = '';

const makeApiConnection = async(location) => {
  let linkAPI = `http://api.openweathermap.org/data/2.5/weather?q=${location}&limit=5&appid=${apiKey}&units=metric`; 

  try {
    const response = await fetch (linkAPI);
    if(!response.ok){
      throw new Error(`Error. problem with connection`);
    } else {
      let data = await response.json()
      return data;
    }
  } catch {
    throw new Error (`Error in Weather API for: ${error.message}`);
  }
}

// Export
export {makeApiConnection};