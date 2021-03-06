// @flow
import React from 'react';
import moment from 'moment';
import type {
  StatelessFunctionalComponent,
  Node,
} from 'react';
import type Moment from 'moment';
import type {
  Worklog,
} from 'types';

import {
  stj,
} from 'utils/time-util';

import * as S from './styled';


type Props = {
  date: Moment,
  worklogs: Array<Worklog>,
};

const TimestampItem: StatelessFunctionalComponent<Props> = ({
  date,
  worklogs,
}: Props): Node => (
  <S.Timestamp>
    <span>
      {moment(date).calendar()}&nbsp;
    </span>
    <span>
      {stj(worklogs.reduce((total, item) => total + item.timeSpentSeconds, 0), 'h[h] m[m]')}
    </span>
  </S.Timestamp>
);

export default TimestampItem;
