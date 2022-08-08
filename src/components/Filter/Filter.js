import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import { SearchWrapper, Label, Input } from "../Filter/Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <SearchWrapper>
      <Label htmlFor="name">Find contacts by name </Label>
      <div>
        <Input
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Search name"
          onChange={({ target: { value } }) => dispatch(setFilter(value))}
        />
      </div>
    </SearchWrapper>
  );
};
