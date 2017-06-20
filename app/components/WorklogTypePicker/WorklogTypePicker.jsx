import React, { PropTypes } from 'react';
import Select from 'react-select';


const WorklogTypePicker = ({
  options,
  uploading,
  running,
  selectWorklogType,
  updateWorklogType,
  currentWorklogType,
  currentWorklogId,
  disabled,
}) => (
  <div className="worklog-type-picker">
    <Select
      options={options}
      value={currentWorklogType}
      placeholder="Select worklog type"
      onChange={(option) => {
        const value = option ? option.value : null;
        if (running) {
          selectWorklogType(value);
        } else {
          updateWorklogType(value, currentWorklogId);
        }
      }}
      clearable
      disabled={uploading || disabled}
    />
  </div>
);

WorklogTypePicker.propTypes = {
  options: PropTypes.array.isRequired,
  uploading: PropTypes.bool.isRequired,
  running: PropTypes.bool.isRequired,
  selectWorklogType: PropTypes.func.isRequired,
  updateWorklogType: PropTypes.func.isRequired,
  currentWorklogType: PropTypes.number,
  currentWorklogId: PropTypes.string,
  disabled: PropTypes.bool,
};

WorklogTypePicker.defaultProps = {
  currentWorklogType: null,
  currentWorklogId: null,
  disabled: false,
};

export default WorklogTypePicker;
