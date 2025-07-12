import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select option',
  icon,
  className = '',
  size = 'md'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Size classes
  const sizeClasses = {
    sm: {
      container: 'text-sm',
      button: 'py-1.5 px-3',
      icon: 'h-4 w-4',
      chevron: 'h-4 w-4',
      options: 'py-1',
      option: 'px-3 py-1.5 text-sm'
    },
    md: {
      container: 'text-base',
      button: 'py-2 px-4',
      icon: 'h-5 w-5',
      chevron: 'h-5 w-5',
      options: 'py-2',
      option: 'px-4 py-2 text-base'
    },
    lg: {
      container: 'text-lg',
      button: 'py-2 px-5',
      icon: 'h-6 w-6',
      chevron: 'h-6 w-6',
      options: 'py-2',
      option: 'px-5 py-2 text-lg'
    }
  };

  const currentSize = sizeClasses[size];

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full flex items-center justify-between
          border border-gray-200 rounded-xl
          bg-gray-50 hover:bg-white focus:bg-white
          transition-all duration-200
          focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20
          shadow-sm hover:shadow-md
          ${currentSize.button}
          ${currentSize.container}
        `}
      >
        <div className="flex items-center gap-3">
          {icon && (
            <div className="text-gray-400 group-hover:text-orange-500 transition-colors duration-200">
              {icon}
            </div>
          )}
          <span className={value === 'All' ? 'text-gray-500' : 'text-gray-900'}>
            {value || placeholder}
          </span>
        </div>
        <ChevronDown 
          className={`text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          } ${currentSize.chevron}`} 
        />
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
          <div className={`${currentSize.options} max-h-60 overflow-y-auto`}>
            {options.map((option, index) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center justify-between
                  hover:bg-orange-50 hover:text-orange-600
                  transition-all duration-150
                  ${currentSize.option}
                  ${value === option ? 'bg-orange-50 text-orange-600' : 'text-gray-700'}
                  ${index === 0 ? 'rounded-t-lg' : ''}
                  ${index === options.length - 1 ? 'rounded-b-lg' : ''}
                `}
              >
                <span className="font-medium">{option}</span>
                {value === option && (
                  <Check className="h-4 w-4 text-orange-600" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown; 