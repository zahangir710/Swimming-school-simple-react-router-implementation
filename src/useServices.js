import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/1c569292-a310-4bf2-9ca6-8d3ebb6e9cd1")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services];
};
export default useServices;
