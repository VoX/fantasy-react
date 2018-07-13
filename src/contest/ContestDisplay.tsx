import * as React from 'react';
import { IDisplayContest } from './IDisplayContest';


class ContestDisplay extends React.Component<{contest:IDisplayContest}> {
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