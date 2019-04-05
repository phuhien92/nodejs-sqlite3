import React, { PureComponent } from 'react'
import styled from 'styled-components';
import NeverEndRadioBox from './NeverEndRadioBox';
import DateRadioBox from './DateRadioBox';
import InternvalRadioBox from './InternalRadioBox';

const RepetitionOptions = [
    "never", "date","interval"
]

const RadioBoxWrapper = styled.div`
    margin-top: 30px;
    > div {
        margin-left: 10px;
        margin-bottom: 35px;
        position: relative;
        label, input {
            cursor: pointer;
            
        }
        label {
            padding-left: 20px;
        }
    }
`;

class RepetitionBoxes extends PureComponent {

    state = {
        startDate: null,
        endDate: null,
        dateRange: [null,null]
    }

    componentWillUpdate = (nextProps) => {
        let {
            repetition,
            startDate,
            endDate
        } = nextProps,
        update = {};

        if ( this.props.startDate !== startDate || this.props.endDate !== endDate ) {
            if (repetition === "date") {
                update = {
                    endDate: endDate ? new Date(endDate) : null
                }
            } else if (repetition === "interval") {
                update = {
                    dateRange: [
                        startDate === null ? null : new Date(startDate), 
                        endDate === null ? null : new Date(endDate)
                    ]
                }
            }

            this.setState(update);
        }

    }

    selectThisRepOpt = (e) => {
        this.props.onChange("repetition", e.target.value);
    }

    setDateRange = (date) => {
        let end_date = date ? date[1]:null;
        let start_date = date ? date[0]:null;

        this.props.onChange("start_date", start_date.toString());
        this.props.onChange("end_date", end_date.toString());
        return false;
    }

    changeEndDate = (date) => {
        //this.props.onChange("start_date", new Date());
        this.props.onChange("end_date", date.toString());
        return false;
    }

    render () {

        return (
            <RadioBoxWrapper>
                <NeverEndRadioBox value="never" repetition={this.props.repetition} onChange={this.selectThisRepOpt}/>
                <DateRadioBox 
                    value="date" 
                    endDate={this.state.endDate}
                    repetition={this.props.repetition} 
                    onChange={this.selectThisRepOpt}
                    onEndDateChange={this.changeEndDate}
                />
                <InternvalRadioBox 
                    value="interval" 
                    dateRange={this.state.dateRange}
                    repetition={this.props.repetition} 
                    onChange={this.selectThisRepOpt}
                    setDateRange={this.setDateRange}
                />
            </RadioBoxWrapper>
        )
    }
}

export default RepetitionBoxes