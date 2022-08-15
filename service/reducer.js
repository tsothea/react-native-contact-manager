import {
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
  REACT_APP_ADD_COMPANY,
  REACT_APP_EDIT_COMPANY,
  REACT_APP_ADD_NEW_CONTACT,
  REACT_APP_EDIT_CONTACT,
  REACT_APP_DELETE_CONTACT,
} from "@env";

const initialState = {
  people: [],
  listPeople: [],
  isListView: false,
  search: "",
  location: "",
  companies: [],
  isLoad: false,
};

const searchContact = (person, txtSearch) => {
  if (
    txtSearch === "" ||
    txtSearch === undefined ||
    (txtSearch !== "" &&
      (person.name.toLowerCase().includes(txtSearch) ||
        person.position.toLowerCase().includes(txtSearch) ||
        person.company.toLowerCase().includes(txtSearch)))
  ) {
    return true;
  }
  return false;
};

const searchbyLocation = (person, location) => {
  if (
    location === "" ||
    location === undefined ||
    (location !== "" && person.city.toLowerCase() === location.toLowerCase())
  ) {
    return true;
  }
  return false;
};

const reducer = (state = initialState, action) => {
  let people = [];
  let companies = [];
  switch (action.type) {
    case REACT_APP_GET_PEOPLE:
      return {
        ...state,
        listPeople: action.payload,
        people: action.payload,
      };
    case REACT_APP_FILTER_PEOPLE:
      if (action.payload.param === "") {
        people = state.listPeople;
      } else {
        people = state.listPeople.filter((person) => {
          if (
            searchContact(person, action.payload.param.toLowerCase()) &&
            searchbyLocation(person, state.location)
          )
            return person;
        });
      }

      return {
        ...state,
        search: action.payload.param,
        people,
      };
    case REACT_APP_ADD_CONTACT:
      people = state.listPeople.filter((person) => {
        if (person.key === action.payload.key) {
          person["isContact"] = true;
        }
        if (
          searchContact(person, state.search.toLowerCase()) &&
          searchbyLocation(person, state.location)
        )
          return person;
      });
      return {
        ...state,
        people,
      };
    case REACT_APP_REMOVE_CONTACT:
      people = state.listPeople.filter((person) => {
        if (person.key === action.payload.key) {
          person["isContact"] = false;
          person["isFavourite"] = false;
        }
        if (
          searchContact(person, state.search.toLowerCase()) &&
          searchbyLocation(person, state.location)
        )
          return person;
      });
      return {
        ...state,
        people,
      };
    case REACT_APP_ADD_FAVOURITE:
      people = state.listPeople.filter((person) => {
        if (person.key === action.payload.key) {
          person["isFavourite"] = true;
        }
        if (
          searchContact(person, state.search.toLowerCase()) &&
          searchbyLocation(person, state.location)
        )
          return person;
      });
      return {
        ...state,
        people,
      };
    case REACT_APP_REMOVE_FAVOURITE:
      people = state.listPeople.filter((person) => {
        if (person.key === action.payload.key) {
          person["isFavourite"] = false;
        }
        if (
          searchContact(person, state.search.toLowerCase()) &&
          searchbyLocation(person, state.location)
        )
          return person;
      });
      return {
        ...state,
        people,
      };
    case REACT_APP_GET_LOCATION:
      if (action.payload.location === "") {
        people = state.listPeople;
      } else {
        people = state.listPeople.filter((person) => {
          if (
            searchContact(person, state.search.toLowerCase()) &&
            searchbyLocation(person, action.payload.location)
          )
            return person;
        });
      }
      return {
        ...state,
        people,
        location: action.payload.location,
      };
    case REACT_APP_VIEW_DISPLAY:
      return {
        ...state,
        isListView: action.payload.isListView,
      };
    case REACT_APP_GET_COMPANIES:
      return {
        ...state,
        isLoad: true,
        companies: action.payload.companies,
      };
    case REACT_APP_ADD_COMPANY:
      return {
        ...state,
        companies: [...state.companies, action.payload.company],
      };
    case REACT_APP_EDIT_COMPANY:
      return {
        ...state,
        companies: action.payload.companies,
      };
    case REACT_APP_DELETE_COMPANY:
      companies = state.companies.filter((company) => {
        if (company.key !== action.payload.key) {
          return company;
        }
      });
      return {
        ...state,
        companies,
      };
    case REACT_APP_ADD_NEW_CONTACT:
      return {
        ...state,
        listPeople: [...state.listPeople, action.payload.params],
        people: [...state.people, action.payload.params],
      };
    case REACT_APP_EDIT_CONTACT:
      people = state.people.map((person) => {
        if (person.key === action.payload.key) {
          return action.payload.params;
        }
        return person;
      });
      return {
        ...state,
        people,
      };
    case REACT_APP_DELETE_CONTACT:
      people = state.people.filter((person) => {
        if (person.key !== action.payload.key) {
          return person;
        }
      });
      return {
        ...state,
        people,
      };
    default:
      return {
        ...state,
        people: [],
      };
  }
};

export default reducer;
