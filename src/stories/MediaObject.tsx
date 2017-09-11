/*! Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license. */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar, { AvatarSize } from '../components/Avatar';
import Block from '../components/Block';
import { FixedGridRow, FixedGridColumn } from '../components/FixedGrid';
import MediaObject, { MediaObjectSize } from '../components/MediaObject';
import Button, { ButtonColor, ButtonSize } from '../components/Button';
import withReadme from 'storybook-readme/with-readme';
const readme = require('../components/MediaObject/README');

const smiley = require('./assets/img/smiley.png');

function getAvatar(size: AvatarSize) {
  return <Avatar imageUrl={smiley} name="Smiley Face" size={size} />;
}

storiesOf('MediaObject', module)
  .addDecorator(withReadme(readme))
  .add('with avatar', () => (
    <div>
      <MediaObject size={MediaObjectSize.XLARGE}
                   imageContent={getAvatar(AvatarSize.XLARGE)}
                   titleContent="First name Last name"
                   metadataContent="Job Title - Metadata"
                   extraContent="Extra information" />
      <MediaObject size={MediaObjectSize.LARGE}
                   imageContent={getAvatar(AvatarSize.LARGE)}
                   titleContent="First name Last name"
                   metadataContent="Job Title - Metadata"
                   extraContent="Extra information" />
      <MediaObject size={MediaObjectSize.MEDIUM}
                   imageContent={getAvatar(AvatarSize.MEDIUM)}
                   titleContent="First name Last name"
                   metadataContent="Job Title - Metadata"
                   extraContent="Extra information" />
      <MediaObject size={MediaObjectSize.SMALL}
                   imageContent={getAvatar(AvatarSize.SMALL)}
                   titleContent="First name Last name"
                   metadataContent="Job Title - Metadata"
                   extraContent="Extra information" />
      <MediaObject size={MediaObjectSize.XSMALL}
                   imageContent={getAvatar(AvatarSize.XSMALL)}
                   titleContent="First name Last name"
                   metadataContent="Job Title - Metadata"
                   extraContent="Extra information" />
    </div>
  ))
  .add('with additional UI', () => (
    <div>
      <MediaObject size={MediaObjectSize.SMALL}
                   imageContent={getAvatar(AvatarSize.SMALL)}
                   titleContent="Eddie Eagle"
                   metadataContent="Sr. Product Manager"
                   extraContent="Extra information">
        <Block push={4}>
          <FixedGridRow>
            <FixedGridColumn>
              <Button text="Follow" size={ButtonSize.SMALL} color={ButtonColor.SECONDARY} />
            </FixedGridColumn>
            <FixedGridColumn fixed>
              <Button text="..." size={ButtonSize.SMALL} color={ButtonColor.SECONDARY} />
            </FixedGridColumn>
          </FixedGridRow>
        </Block>
      </MediaObject>
    </div>
  ));
