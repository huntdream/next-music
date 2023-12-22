import useSWR from 'swr';
import { IEvent, IFeed } from '../types/event';
import request from '@/utils/fetch';

interface Params {
  lasttime?: number;
  pagesize?: number;
  limit?: number;
  id?: number;
}

const useEvents = ({ id, ...params }: Params = {}) => {
  const { data, error } = useSWR(
    id ? `/user/event?uid=${id}` : '/event',
    (url: string) =>
      request(url, {
        params,
      }).then((event) => {
        const newEvents = event[id ? 'events' : 'event'].map((it: any) => {
          const json = JSON.parse(it.json);
          if (json.song) {
            json.song = {
              ...json.song,
              al: json.song?.album,
              ar: json.song?.artists,
            };
          }

          return {
            ...it,
            json,
          };
        });

        return { ...event, events: newEvents } as IFeed;
      }),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return { data, error };
};

export default useEvents;
