
const getHistory = async () => {
  const res = await fetch('http://localhost:8080/orders');
  if (!res.ok) {
    console('error');
  } else {
    const apiData = await res.json();
    console.log(apiData.results);
    return apiData.results;
  }
};
export default getHistory;
