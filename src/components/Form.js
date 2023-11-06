import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    comment: "",
    subscription: false,
    employment: "",
    favAnimal: "",
    // se crea un objeto vacio que se  completa cuando se rellana el formulario
  });

  console.log(formData);

  function handleChange(event) {
    // esta funcion actualiza de forma automatica nuestro objeto en useState cada vez que se aprieta una tecla gracias al onChange
    const { name, type, value, checked } = event.target;
    // esta desestructuracion permite al event.target a acceder a name, type, value, checked
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
      // aqui la cibla es name y dentro de name queremos saber si el typo es checkbox. Si es checbox entonces utlizaremos el valor checked si no solo value. Recuerda que todos los inputs utilzan value para obtener la informcion de nuestro objecto. Sin embargo checkbox no. Checkbox no usa value pero checked
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // event.preventDefault se utiliza para evitar que la informacion submitted desaparezca de la form

    

    if (formData.email === "") {
      alert("Email is an obligatory field");
      return;
    }

    if (formData.subscription) {
      alert("");
    }
  }

  return (
    <div className="form--container">
      <form onSubmit={handleSubmit}>
        {/* onSubmit va a permiter que el button al final de la form envie la informacion a donde haya dicho. Ademas, onSubmit va a permitir establecer unas carazteristicas que deben cumplirser antes de enviar una form */}
      
          <input
            onChange={handleChange}
            name="email"
            value={formData.email}
            type="text"
            placeholder="Email"
          />

          <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            type="text"
            placeholder="Enter password"
          />

          <input
            onChange={handleChange}
            name="confirmPassword"
            value={formData.confirmPassword}
            type="text"
            placeholder="Repeat password"
          />

          <textarea
            onChange={handleChange}
            name="comment"
            value={formData.comment}
            type="text"
            placeholder="Enter your comment"
          />
      

        {/* checked form */}
        <div className="check--container">
          {" "}
          <label htmlFor="subscription">Do you want to subscribe to our channel?</label>
          <input
            onChange={handleChange}
            name="subscription"
            checked={formData.subscription}
            type="checkbox"
            id="subscription"
          />
        </div>

        {/* rafio form  */}
        <div className="radio--container">
        <fieldset>
          <legend>Current employment status</legend>
          <label htmlFor="unemployed">Unemployed</label>
          <input
            onChange={handleChange}
            name="employment"
            value="unemployed"
            checked={formData.employment === "unemployed"}
            type="radio"
            id="unemployed"
          />
         
         <label htmlFor="employed">Employed</label>
          <input
            onChange={handleChange}
            name="employment"
            value="employed"
            checked={formData.employment === "employed"}
            type="radio"
            id="employed"
          />
         
         <label htmlFor="part-time">Part-time</label>
          <input
            onChange={handleChange}
            name="employment"
            value="part-time"
            checked={formData.employment === "part-time"}
            type="radio"
            id="part-time"
          />
          
          <label htmlFor="student">Student</label>
          <input
            onChange={handleChange}
            name="employment"
            value="student"
            checked={formData.employment === "student"}
            type="radio"
            id="student"
          />
          
        </fieldset>
        </div>

        {/* drop form  */}
<div className="drop--container">
        <label htmlFor="favAnimal">What is your favourite animal?</label>

        <select
          onChange={handleChange}
          name="favAnimal"
          id="favAnimal"
          value={formData.favAnimal}
        >
          <option value="">--Choose one--</option>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="tiger">Tiger</option>
          <option value="whale">Whale</option>
          <option value="panda">Panda</option>
          <option value="myBrother">My brother</option>
        </select>
        </div>

        <button>Submit</button>
        {/* el elemento button no requiere de ningun tipo de input extra ya que si lo ponemos dentro de la <form></form> de forma automatica va a functionar como un submit button */}
      </form>
    </div>
  );
}

export default Form;
