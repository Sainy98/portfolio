import { useState, useEffect, useRef } from 'react';

const useProjectData = () => {
  const [projectData, setProjectData] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading as true
  const isMounted = useRef(true); // Use useRef to manage mounted state

  useEffect(() => {
    isMounted.current = true; // Set to true when the component is mounted

    const fetchData = async () => {
      try {
        const res = await fetch(
          'https://script.google.com/macros/s/AKfycbypAtLughqo4sIREPfkWhN50B1hWC30XG6EMV1MVxYBWTY6fId08Qrlr54KfMKMX_GW/exec?sheet=Project'
        );
        const data = await res.json();
        if (isMounted.current) {
          setProjectData(data);
          setLoading(false); // Data fetched, set loading to false
        }
      } catch (error) {
        console.error('Error fetching project data:', error);
        if (isMounted.current) {
          setLoading(false); // Set loading to false if there's an error
        }
      }
    };

    fetchData();

    return () => {
      isMounted.current = false; // Cleanup, set to false when component unmounts
    };
  }, []); // Empty dependency array ensures this runs only once

  return { projectData, loading };
};

export default useProjectData;
