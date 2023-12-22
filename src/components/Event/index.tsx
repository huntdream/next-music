/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { IEvent } from '@/types/event';

interface Props {
  style?: stylex.StyleXStyles;
  event: IEvent;
}

const styles = stylex.create({});

const Event: React.FC<Props> = ({ style, event }) => {
  const [showComment, setShowComment] = useState(false);

  return (
    <div className='mb-8'>
      <div>{event.user.nickname}</div>
      {event.json.msg && (
        <div className='whitespace-pre my-4'>{event.json.msg}</div>
      )}
      {event.json.mv && (
        <img className='w-40 max-w-xs' src={event.json.mv.imgurl} alt='' />
      )}
      {event.pics?.length > 0 && (
        <div className='flex flex-wrap max-w-xs'>
          {event.pics.map((pic) => (
            <img
              src={pic.originUrl}
              key={pic.originUrl}
              height={100}
              width={100}
              alt=''
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Event;
