import React from 'react';
import { SaveButtonFormat, DetailsBannerFormat, StatusTags, SaveButton, HeartButtonEmpty } from './Styled.jsx';
import NewBanner from './NewBanner.jsx';
import HeartButton from './HeartButton.jsx';

const DetailsBanner = (props) => {

  return (
    <DetailsBannerFormat>
        <div className="tags">
          <span>
            <StatusTags>
              <span className="for-sale-tag">
                For Sale
          </span>
            </StatusTags>
          </span>
          <span>
            <NewBanner new={props.listing.new} />
          </span>
        </div>
        <SaveButtonFormat>
            <SaveButton>
              <HeartButton saved={props.listing.saved} saveListing={props.saveListing} />
          Save
            </SaveButton>
        </SaveButtonFormat>
    </DetailsBannerFormat>
  )
}

export default DetailsBanner;