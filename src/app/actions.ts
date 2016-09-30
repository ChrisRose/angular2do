export interface IContactAction {
  type: string;
  id: number;
  name?: string;
}

export function addContact(name: string, id: number): IContactAction {
  return {
    type: 'ADD',
    id,
    name
  };
}

export function removeContact(id: number): IContactAction {
  return {
    type: 'REMOVE',
    id
  };
}

export function starContact(id: number): IContactAction {
  return {
    type: 'STAR',
    id
  };
}

export function setVisibilityFilter (filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}
