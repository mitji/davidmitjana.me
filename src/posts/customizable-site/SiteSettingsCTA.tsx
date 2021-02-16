import React, { useContext } from 'react';
import { InnerCTA } from '../../elements';
import { AppContext } from '../../utils';

export default function SiteSettingsCTA() {
  const { setIsSettingsOpen } = useContext(AppContext);

  return (
    <InnerCTA
      type="button"
      onClick={() => setIsSettingsOpen(true)}
      inline
    >
      Site settings
    </InnerCTA>
  )
}
