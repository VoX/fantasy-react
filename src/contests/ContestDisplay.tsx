import * as React from 'react';
import { IContest } from './IContest';


class ContestDisplay extends React.Component<{contest:IContest}> {
    public render() {
        const {name, style} = this.props.contest;
        return (
            <div className="contest-display">
                <span>{name}</span><span>{style}</span>
            </div>
          );
    }
}

export default ContestDisplay;