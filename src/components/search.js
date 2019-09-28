import React, { useState } from "react";
import axios from "axios";
import Movies from "./movies";
import { Formik, Form, Field } from "formik";

export default function Search() {
    //creating closure
    let [movieData, setMovieData] = useState();
    // Button Function
  function submitButton(values) {
      // search for movie based on specific values entered into search bar
    axios
      .get(
        `http://www.omdbapi.com/?apikey=d793ee5b&t=${values.search}&Season=${values.searchSeason}&plot=full`
      )
      .then(res => {
        //   console.log(res)    
        
        setMovieData(res.data)
     
     })
      .catch(err => {
        console.log("Err", err);
      });  
  }

  return (
    <>
      <div
        style={{
          background: "#C4C4C4",
          height: "274px",
          width: "333px",
          margin: "100px auto",
          borderRadius: "29px"
        }}
      >
        <div
          style={{
            marginTop: "100px",
            padding: "70px"
          }}
        >
          <Formik
            initialValues={{ search: "", searchSeason: "" }}
            onSubmit={values => {
              submitButton(values);
            }}
            render={({ handleSubmit, values, touched, errors }) => (
              <Form onSubmit={handleSubmit}>
                {errors.search && touched.search && <p>{errors.search}</p>}
                <Field
                  name="search"
                  value={values.search}
                  placeholder="Search Movies"
                  style={{ width: "200px" }}
                />
                 <Field
                  name="searchSeason"
                  value={values.searchSeason}
                  placeholder="Search Season"
                  style={{ width: "200px" }}
                />
                <button type="submit" style={{ background: "#ff5e13" }}>
                  Lets Go!
                </button>
              </Form>
            )}
          />
        </div>
      </div>
    
      <Movies movieData={movieData}/>
    </>
  );
}
