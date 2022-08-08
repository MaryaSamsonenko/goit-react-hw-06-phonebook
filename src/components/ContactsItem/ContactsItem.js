import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { remove } from "../../redux/contactsSlice";
import { Item, Description, Button } from "./ContactsItem.styled";

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      <Description>{name}:</Description> <Description>{number}</Description>
      <Button type="button" onClick={() => dispatch(remove(id))}>
        Delete
      </Button>
    </Item>
  );
};
ContactItem.propType = {
  contact: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
