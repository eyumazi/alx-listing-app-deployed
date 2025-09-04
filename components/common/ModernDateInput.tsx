import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface ModernDateInputProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  inputClassName?: string;
  style?: React.CSSProperties;
}

const ModernDateInput: React.FC<ModernDateInputProps> = ({
  selected,
  onChange,
  placeholder,
  inputClassName,
}) => {
  return (
    <DatePicker
      selected={selected}
      onChange={onChange}
      placeholderText={placeholder}
      className={
        inputClassName ||
        "w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      }
      dateFormat="yyyy-MM-dd"
      minDate={new Date()}
      showPopperArrow={false}
    />
  );
};

export default ModernDateInput;
