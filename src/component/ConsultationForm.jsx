import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ConsultationForm.css';
import localDoctors from './doctors.json';

const ConsultationForm = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    city: '',
    company: '',
    chiefComplaints: '',
    previousExperience: '',
  });
  const initialSelectedCity =
    localDoctors.doctors.length > 0 ? localDoctors.doctors[0].city : '';
  const [doctors, setDoctors] = useState(localDoctors.doctors);
  const [selectedCity, setSelectedCity] = useState(initialSelectedCity);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setDoctors(localDoctors.doctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const cityFromUrl = urlParams.get('city');
    if (cityFromUrl) {
      setSelectedCity(cityFromUrl);
      setFormData((prevData) => ({ ...prevData, city: cityFromUrl }));
    }
  }, [location.search]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCityChange = (e) => setSelectedCity(e.target.value);

  const nextStep = () => setStep((prevStep) => prevStep + 1);
  const prevStep = () => setStep((prevStep) => prevStep - 1);

  const submitForm = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="container mx-auto my-8 p-8 dark-theme">
      <h2 className="text-5xl font-bold mb-6 text-center text-white">
        Book a Consultation
      </h2>
      <form className="max-w-md mx-auto space-y-4">
        {step === 1 && (
          <div className="flex flex-col items-center">
            <label
              className="block text-2xl font-medium text-white mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="dark-input mb-4"
            />

            <label
              className="block text-2xl font-medium text-white mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="dark-input mb-4"
            />

            <div className="flex gap-4">
              <button className="dark-button" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col items-center">
            <label
              className="block text-2xl font-medium text-white mb-2"
              htmlFor="age"
            >
              Age:
            </label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
              className="dark-input mb-4"
            />

            <label
              className="block text-2xl font-medium text-white mb-2"
              htmlFor="city"
            >
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="dark-input mb-4"
            />

            <label
              className="block text-2xl font-medium text-white mb-2"
              htmlFor="company"
            >
              Company:
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="dark-input mb-4"
            />

            <div className="flex gap-4">
              <button className="dark-button" onClick={prevStep}>
                Previous
              </button>
              <button className="dark-button" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col items-center">
            <label
              className="block text-2xl font-medium text-white mb-2"
              htmlFor="cityFilter"
            >
              Filter Doctors by City:
            </label>
            <select
              id="cityFilter"
              onChange={handleCityChange}
              value={selectedCity}
              className="dark-input mb-4"
            >
              {doctors.map((doctor) => (
                <option key={doctor.city} value={doctor.city}>
                  {doctor.city}
                </option>
              ))}
            </select>

            <h3 className="text-2xl font-bold mb-2">Best Available Doctors:</h3>
            <ul className="mb-4">
              {doctors
                .filter((doctor) => doctor.city === selectedCity)
                .map((doctor) => (
                  <li key={doctor.name} className="text-white">
                    {doctor.name}
                  </li>
                ))}
            </ul>

            <label
              className="block text-2xl font-medium text-white mb-2"
              htmlFor="chiefComplaints"
            >
              Chief Complaints:
            </label>
            <input
              type="text"
              id="chiefComplaints"
              name="chiefComplaints"
              value={formData.chiefComplaints}
              onChange={handleInputChange}
              required
              className="dark-input mb-4"
            />

            <div className="flex gap-4">
              <button className="dark-button" onClick={prevStep}>
                Previous
              </button>
              <button className="dark-button" onClick={nextStep}>
                Next
              </button>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="flex flex-col items-center">
            <label
              className="block text-2xl font-medium text-white mb-2"
              htmlFor="previousExperience"
            >
              Previous Experience with Physiotherapy:
            </label>
            {formData.age >= 40 ? (
              <textarea
                id="previousExperience"
                name="previousExperience"
                rows="4"
                value={formData.previousExperience}
                onChange={handleInputChange}
                className="dark-input mb-4"
              ></textarea>
            ) : (
              <p className="text-white">
                You are less than 40 years old, no check for previous experience
                with physiotherapy.
              </p>
            )}

            <div className="flex gap-4">
              <button className="dark-button" onClick={prevStep}>
                Previous
              </button>
              <button className="dark-button" onClick={submitForm}>
                Submit
              </button>
            </div>
          </div>
        )}
      </form>
    </section>
  );
};

export default ConsultationForm;
