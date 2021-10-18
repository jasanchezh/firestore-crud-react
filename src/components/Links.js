import React from "react";
import LinkForm from "./LinkForm";

import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const Links = () => {
  const addOrEditLink = async (linkObject) => {
    console.log("linkObject");
    console.log(linkObject);
    // const docRef = await addDoc(collection(db, "links"), linkObject);
    await setDoc(doc(db, "links"), linkObject);
    console.log("New task created");
  };

  return (
    <div>
      <LinkForm addOrEditLink={addOrEditLink} />
      <h1>Links</h1>
    </div>
  );
};

export default Links;
