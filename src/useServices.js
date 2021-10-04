import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/2982280d-9afb-4ce1-9228-0a3b2311f7bc")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services];
};
export default useServices;
