import React from "react";
import LinkForm from "./LinkForm";

import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

const Links = () => {
  const addOrEditLink = async (linkObject) => {
    try {
      await addDoc(collection(db, "links"), linkObject);
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
