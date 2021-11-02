import { useEffect } from 'react';
import useQuery from 'hooks/useQuery';

export default function UtmTags() {
  const query = useQuery();

  useEffect(() => {
    const utmSource = query.get('utm_source');
    const utmMedium = query.get('utm_medium');
    const utmCampaign = query.get('utm_campaign');

    sessionStorage.clear();

    utmSource && sessionStorage.setItem('utm_source', utmSource);
    utmMedium && sessionStorage.setItem('utm_medium', utmMedium);
    utmCampaign && sessionStorage.setItem('utm_campaign', utmCampaign);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
