import { Dropdown } from "flowbite-react";

interface DropdownProps {
  languages: Array<string>;
  langState: string;
  handleClick: (arg0: string) => void;
  isDisabled: boolean;
}

const LanguageDropdown = ({
  languages,
  langState,
  handleClick,
  isDisabled,
}: DropdownProps) => {
  return (
    <Dropdown label={langState} placement="top" size="md" disabled={isDisabled}>
      {languages.map((item, idx) => (
        <Dropdown.Item key={idx} onClick={() => handleClick(item)}>
          {item}
        </Dropdown.Item>
      ))}
    </Dropdown>
  );
};

export default LanguageDropdown;
