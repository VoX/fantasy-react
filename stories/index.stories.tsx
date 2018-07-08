import * as React from 'react';

import { storiesOf } from '@storybook/react';

import ContestDisplay from 'src/contests/ContestDisplay';
import { IContest } from 'src/contests/IContest';


function getContest() {
  const contest:IContest = {name : "hi", sport : "MLB", attributes : [""], fee : "$15", start : new Date(), entries : 2, id : 1337, maxEntries: 5, multiEntries: 1, prizes : "$1,500", style : "Classic"};
  return contest;
}


const reserveOnlyContest:IContest = getContest();
const upcomingContest:IContest = getContest();
const startedContest:IContest = getContest();

storiesOf('ContestDisplay', module)
  .add('ReserveOnly', () => <ContestDisplay contest = {reserveOnlyContest}/>)
  .add('Upcoming', () => <ContestDisplay contest = {upcomingContest}/>)
  .add('Started', () => (<ContestDisplay contest = {startedContest}/>));
