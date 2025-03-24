
import { useState, useEffect } from 'react';

export type CountryInfo = {
  country: string;
  countryCode: string;
  isLoading: boolean;
  error: string | null;
};

export function useGeolocation() {
  const [countryInfo, setCountryInfo] = useState<CountryInfo>({
    country: '',
    countryCode: '',
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        // Using free IP API service - no API key required
        const response = await fetch('https://ipapi.co/json/');
        
        if (!response.ok) {
          throw new Error('Failed to fetch location data');
        }
        
        const data = await response.json();
        
        setCountryInfo({
          country: data.country_name,
          countryCode: data.country_code,
          isLoading: false,
          error: null,
        });
      } catch (error) {
        console.error('Error fetching country info:', error);
        setCountryInfo({
          country: '',
          countryCode: '',
          isLoading: false,
          error: error instanceof Error ? error.message : 'Unknown error',
        });
      }
    };

    fetchCountryInfo();
  }, []);

  return countryInfo;
}
