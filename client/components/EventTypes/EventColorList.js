import React from 'react'
import { FormGroup, FormLabel } from '../../helpers/form';
import Error from '../Error';
import Select from 'react-select';

const colorStyles = {
    control: styles => ({...styles, backgroundColor: "#fff"}),
    option: ( styles, { data, isDisabled, isFocused, isSelected}) => {
        const color = data.value;

        return {
            ...styles,
            fontWeight: 500,
            backgroundColor: isDisabled
                ? null
                : isSelected ? color : isFocused ? color : null,
            color: isDisabled
                ? "#ccc"
                : isSelected
                ? "#fff" 
                : isFocused 
                ? "#fff"
                : data.value,
            cursor: isDisabled ? "not-allowed":"default"
        };
    },
    singleValue: (styles, { data }) => ({ ...styles, borderRadius: 3, background: data.value, color: "white", display: "flex", padding: 5, fontWeight: 500})
}

class EventColorList extends React.Component {

    handleChange = value => {
        this.props.onChange("event_color", value);
    };

    handleBlur = () => {
        this.props.onBlur("event_color", true);
    }

    render() {
        return (
            <FormGroup>
                <FormLabel>Event color *</FormLabel>
                <Select 
                    id="event_color"
                    name="event_color"
                    defaultValue={this.props.value}
                    options={this.props.colorOptions}
                    styles={colorStyles}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                />
                {
                    this.props.error && this.props.touched &&
                    <Error error={this.props.error} type="event_color"/>
                }
            </FormGroup>
        )
    }
}

export default EventColorList