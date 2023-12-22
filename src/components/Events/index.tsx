import React, { useEffect, useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { IEvent, IFeed } from '@/types/event';
import request from '@/utils/fetch';
import Event from '../Event';
import useEvents from '@/fetchers/useEvents';

interface Props {
  style?: stylex.StyleXStyles;
}

const styles = stylex.create({});

const Events: React.FC<Props> = ({ style }) => {
  const { data } = useEvents();

  return (
    <div>
      {data?.events.map((event) => (
        <Event key={event.id} event={event} />
      ))}
    </div>
  );
};

export default Events;
