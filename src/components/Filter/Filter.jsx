import React from "react";
import PropTypes from "prop-types";
import { StyledForm, FilterLabel, FilterInput } from "./Filter.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from "../../redux/selectors";
import { setFilter } from "../../redux/filtersSlice";

export const FormFilter = ({ label }) => {
  const filters = useSelector(selectFilters);
  const dispatch = useDispatch();
  const initialValues = {
    filter: "",
  };

  const onChangeFilter = (evt) => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <StyledForm initialValues={initialValues}>
      <FilterLabel htmlFor="filter">{label}</FilterLabel>
      <FilterInput
        type="text"
        id="filter"
        name={filters.query}
        onChange={onChangeFilter}
      />
    </StyledForm>
  );
};

FormFilter.propTypes = {
  label: PropTypes.string.isRequired,
};
