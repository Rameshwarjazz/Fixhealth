import  { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ConsultationForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    age: '',
    city: '',
    company: '',
    chiefComplaints: '',
    previousExperience: '',
  });
  const [doctors, setDoctors] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('/doctors.json');
        setDoctors(response.data.doctors);
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

  const filteredDoctors = doctors.filter((doctor) => !selectedCity || doctor.city === selectedCity);

  return (
    <section className="container mx-auto my-8 p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Book a Consultation</h2>
      <form className="max-w-md mx-auto space-y-4">
        <div className="grid grid-cols-2 gap-4">
          
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="input-style"
            />
         
          
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="input-style"
            />
          
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              required
              className=""
            />
          
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="input-style"
            />
          
            <label htmlFor="company">Company:</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              required
              className="input-style"
            />
          
            <label htmlFor="previousExperience">Previous Experience with Physiotherapy:</label>
            <textarea
              id="previousExperience"
              name="previousExperience"
              rows="4"
              value={formData.previousExperience}
              onChange={handleInputChange}
              className="input-style"
            ></textarea>
          
            <label htmlFor="cityFilter">Filter Doctors by City:</label>
            <select
              id="cityFilter"
              onChange={handleCityChange}
              value={selectedCity}
              className="input-style"
            >
              <option value="">All Cities</option>
              {doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.city}>
                  {doctor.city}
                </option>
              ))}
            </select>
          
        </div>
        <div className="mt-4">
          <label>Available Doctors:</label>
          <ul>
            {filteredDoctors.map((doctor) => (
              <li
                key={doctor.id}
                className="bg-white p-4 rounded shadow-md mb-4"
              >
                {doctor.name} - {doctor.expertise} - {doctor.city}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          type="submit"
        >
          Book Now
        </button>
      </form>
    </section>
  );
};

export default ConsultationForm;