import React, { Component } from "react";
import propTypes from 'prop-types';
import { Formik } from 'formik';
import { Search, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput } from "./Searchbar.styled";
import * as Yup from 'yup';

export class Searchbar extends Component {
  state = {
    name: '',
  };

  validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!')
    .max(50, 'Too Long!').required(),
  });

  handlerSubmit = (values, { resetForm }) => {
    const { onSubmit } = this.props;
    onSubmit(values.name); //
    resetForm();
  };


    render() {
  
      return (
        <Formik
        initialValues={{ name: '' }}
        validationSchema={this.validationSchema}
        onSubmit={this.handlerSubmit}
        >
          <Search>
          <SearchForm>
            <SearchFormButton type="submit">
              <SearchFormButtonLabel>Search</SearchFormButtonLabel>
            </SearchFormButton>
        
            <SearchFormInput
              type="text"
              name="name"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </SearchForm>
        </Search>
      </Formik>
      )
  
    }
  }
  




Searchbar.propTypes = {
    onSubmit: propTypes.func,
}