import ReactGA from 'react-ga';

export const trackPinClicked = (locationId: string): void =>
  ReactGA.event({
    category: 'Location',
    action: 'View',
    label: locationId,
  });

export const trackLocationPrompt = (label: string): void => {
  ReactGA.event({
    category: 'Location Prompt',
    action: 'GeoIP',
    label,
  });
};

export const trackGuideStatus = (action: boolean): void => {
  ReactGA.event({
    category: 'Guide',
    action: action ? 'Close' : 'Open',
  });
};

let isLocationTracked = false;
export const trackUserLocation = (lat: number, lon: number): void => {
  if (!isLocationTracked) {
    ReactGA.event({
      category: 'Geolocation',
      action: 'Set',
      label: `${lat},${lon}`,
    });
    isLocationTracked = true;
  }
};

export const trackUiClick = (label: string, value?: string): void => {
  ReactGA.event({
    category: 'UI Element',
    action: 'Click',
    label: `${label}${value ? `::${value}` : ''}`,
  });
};

export const trackEvent = (eventData: any): void => ReactGA.event(eventData);
