import React, { useState } from 'react';
import './Contact.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.length < 6) {
      newErrors.fullName = 'Por favor verifique su información nuevamente';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Por favor verifique su información nuevamente';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const { fullName } = formData;
      setSuccessMessage(`Gracias ${fullName}, te contactaremos cuanto antes vía mail.`);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Contacto</h1>
        <h2>Dejanos tus datos y te contactaremos</h2>
        {successMessage ? (
          <p className="success">{successMessage}</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nombre Completo:</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <span className="error">{errors.fullName}</span>
            </div>
            <div>
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <span className="error">{errors.email}</span>
            </div>
            <button type="submit">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contacto;