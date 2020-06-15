import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../../index';

const Demo = () => {
  return <Button text={'Hello Button'} onClick={action('clicked')} />
};

storiesOf('通用/Button 按钮', module)
  .add('Button', () => <Demo />, {})

