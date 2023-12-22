'use client';

import Event from '@/components/Event';
import Events from '@/components/Events';
import { IEvent } from '@/types/event';
import request from '@/utils/fetch';
import React, { useEffect, useState } from 'react';

interface Props {}

const Me: React.FC<Props> = () => {
  const getAccount = () => {
    request('/user/account');
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <div>
      <Events />
    </div>
  );
};

export default Me;
