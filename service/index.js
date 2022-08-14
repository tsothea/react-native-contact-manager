import axios from "axios";
import {
  addContact,
  addFavorite,
  fetchPeople,
  removeContact,
  removeFavorite,
} from "./actions";
import { fetchCompanies } from "./companyAction";
import { addNewContact, editContact } from "./contactAction";
import {
  REACT_APP_FIREBASE_URL,
  REACT_APP_GET_PEOPLE,
  REACT_APP_FILTER_PEOPLE,
  REACT_APP_ADD_CONTACT,
  REACT_APP_REMOVE_CONTACT,
  REACT_APP_ADD_FAVOURITE,
  REACT_APP_REMOVE_FAVOURITE,
  REACT_APP_GET_LOCATION,
  REACT_APP_VIEW_DISPLAY,
  REACT_APP_GET_COMPANIES,
  REACT_APP_DELETE_COMPANY,
  REACT_APP_EDIT_COMPANY,
  REACT_APP_ADD_NEW_CONTACT,
  REACT_APP_EDIT_CONTACT,
  REACT_APP_DELETE_CONTACT,
} from "@env";

export const getPeople = async (dispatch) => {
  return await axios
    .get(REACT_APP_FIREBASE_URL + "/people.json")
    .then((response) => {
      let people = [];
      Object.entries(response.data).forEach(([index, value]) => {
        people.push({ ...value, key: index });
      });
      dispatch(fetchPeople(people));
    });
};

export const saveContact = async (key, dispatch) => {
  let updateData = { isContact: true };
  await axios
    .patch(REACT_APP_FIREBASE_URL + "/people/" + key + ".json", updateData)
    .then(() => {
      dispatch(addContact(key));
    });
};

export const deleteContact = async (key, dispatch) => {
  let updateData = { isContact: false, isFavourite: false };
  await axios
    .patch(REACT_APP_FIREBASE_URL + "/people/" + key + ".json", updateData)
    .then(() => {
      dispatch(removeContact(key));
    });
};

export const saveFavourite = async (key, dispatch) => {
  let updateData = { isFavourite: true };
  await axios
    .patch(REACT_APP_FIREBASE_URL + "/people/" + key + ".json", updateData)
    .then(() => {
      dispatch(addFavorite(key));
    });
};

export const deleteFavourite = async (key, dispatch) => {
  let updateData = { isFavourite: false };
  await axios
    .patch(REACT_APP_FIREBASE_URL + "/people/" + key + ".json", updateData)
    .then(() => {
      dispatch(removeFavorite(key));
    });
};

export const getCompanies = async (dispatch) => {
  return await axios
    .get(REACT_APP_FIREBASE_URL + "/companies.json")
    .then((response) => {
      let companies = [];
      Object.entries(response.data).forEach(([index, value]) => {
        companies.push({ ...value, key: index });
      });
      dispatch(fetchCompanies(companies));
    });
};

export const addNewCompany = async (company, dispatch) => {
  return await axios
    .post(REACT_APP_FIREBASE_URL + "/companies.json", company)
    .then(() => {
      dispatch(addCompany(company));
    });
};

export const editCompany = async (dispatch) => {
  return await axios
    .get(REACT_APP_FIREBASE_URL + "/companies.json")
    .then((response) => {
      dispatch(fetchCompanies(response.data));
    });
};

export const removeCompany = async (key, dispatch) => {
  return await axios
    .delete(REACT_APP_FIREBASE_URL + "/companies/" + key + ".json")
    .then(() => {
      dispatch(deleteCompany(key));
    });
};

export const saveNewContact = async (formData, dispatch) => {
  await axios
    .post(REACT_APP_FIREBASE_URL + "/people.json", formData)
    .then((response) => {
      formData["key"] = response.data["name"];
      dispatch(addNewContact(formData));
    });
};

export const updateNewContact = async (formData, dispatch) => {
  await axios
    .patch(
      REACT_APP_FIREBASE_URL + "/people/" + formData.key + ".json",
      formData
    )
    .then(() => {
      dispatch(editContact(formData.key, formData));
    });
};
