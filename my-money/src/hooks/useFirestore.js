import { useEffect } from "react";
import { useReducer, UseEffect, useState } from "react";
// used everytime we want to interact with the project firestore
import { projectFirestore } from "../firebase/config";

const initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //    collection ref
  const ref = projectFirestore.collection(collection);

  //   add document
  const addDocument = (doc) => {};
  //  delete document
  const deleteDocument = (id) => {};
  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { addDocument, deleteDocument, response };
};
