import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ContestDisplay from './contests/ContestDisplay';
import { ContestProvider } from './contests/ContestProvider';
import { IDisplayContest } from './contests/IDisplayContest';

const prodProvider = new ContestProvider("https://www.draftkings.com");

function getContest() {
  const contest:IDisplayContest = {name : "hi", sport : "MLB", attributes : [""], fee : "$15", start : new Date(), entries : 2, id : 1337, maxEntries: 5, multiEntries: 1, prizes : "$1,500", style : "Classic"};
  return contest;
}

const reserveOnlyContest:IDisplayContest = getContest();
const upcomingContest:IDisplayContest = getContest();
const startedContest:IDisplayContest = getContest();

storiesOf('ContestDisplay', module)
  .add('ReserveOnly', () => <ContestDisplay contest = {reserveOnlyContest}/>)
  .add('Upcoming', () => <ContestDisplay contest = {upcomingContest}/>)
  .add('Started', () => (<ContestDisplay contest = {startedContest}/>))
  .add('ProdData', () => {
    const prodData = prodProvider.getContests("MLB");

    return (<ContestDisplay contest = {startedContest}/>);
  });

