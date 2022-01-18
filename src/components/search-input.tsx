import SearchRounded from "@mui/icons-material/SearchRounded";
import { ChangeEvent } from "react";

interface Props {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: React.FC<Props> = ({ onChange }) => {
  return (
    <div className="countries_input_wrapper">
      <SearchRounded color="inherit" />
      <input className="countries_input" placeholder="Search..." onChange={onChange} />
    </div>
  );
};
