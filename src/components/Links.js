import React, { useEffect } from "react";
import LinkForm from "./LinkForm";

import { db } from "../firebase";
import {
  addDoc,
  collection,
  // getDocs,
  query,
  onSnapshot,
} from "firebase/firestore";

const Links = () => {
  const addOrEditLink = async (linkObject) => {
    try {
      const q = query(collection(db, "links"));
      await addDoc(q, linkObject);
      console.log("New task created");
    } catch (e) {
      console.log(e);
    }
  };

  const getLinks = () => {
    try {
      const allTasks = [];
      const q = query(collection(db, "links"));
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log("doc.data()");
          console.log(doc.data());
          allTasks.push(doc.data());
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div>
      <LinkForm addOrEditLink={addOrEditLink} />
      <h1>Links</h1>
    </div>
  );
};

export default Links;
