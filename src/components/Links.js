import React from "react";
import LinkForm from "./LinkForm";

import { db } from "../firebase";
import { addDoc, collection, query, onSnapshot } from "firebase/firestore";

const Links = () => {
  const addOrEditLink = async (linkObject) => {
    try {
      const allTask = [];
      const q = query(collection(db, "links"));
      await addDoc(q, linkObject);
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allTask.push(doc.data());
        });
      });
      console.log("allTask");
      console.log(allTask);
      console.log("New task created");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <LinkForm addOrEditLink={addOrEditLink} />
      <h1>Links</h1>
    </div>
  );
};

export default Links;
