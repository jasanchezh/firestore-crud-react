import React, { useState } from "react";

const LinkForm = (props) => {
  const initialStateValues = {
    url: "",
    name: "",
    description: "",
  };
  const [values, setValues] = useState(initialStateValues);

  const handleSubmit = (e) => {
    e.preventDefault(); // Use it to check the console.log
    props.addOrEditLink(values);
    setValues({ ...initialStateValues });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <form className="card card-body" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">insert_link</i>
        </div>
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="http://www.someurl.com"
          name="url"
          value={values.url}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-text bg-light">
          <i className="material-icons">create</i>
        </div>
        <input
          onChange={handleInputChange}
          type="text"
          className="form-control"
          name="name"
          placeholder="Website name"
          value={values.name}
        />
      </div>
      <div className="form-group">
        <textarea
          onChange={handleInputChange}
          name="description"
          rows="3"
          className="form-control"
          placeholder="Write a description"
          value={values.description}
        ></textarea>
      </div>
      <button className="btn btn-primary btn-block">Save</button>
    </form>
  );
};

export default LinkForm;
