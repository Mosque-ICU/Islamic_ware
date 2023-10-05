import React from 'react'

import { ToolbarSection, ToolbarItem } from '../../editor'

export const VideoSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Youtube"
        props={undefined}
        summary={undefined}
        children={undefined}
      >
        <ToolbarItem
          full={true}
          propKey="videoId"
          type="text"
          label="Video ID"
        />
      </ToolbarSection>
    </React.Fragment>
  )
}
