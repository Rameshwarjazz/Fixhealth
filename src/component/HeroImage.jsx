const HeroImage = () => {
  return (
    <section className=" bg-cover bg-center h-screen flex items-center justify-center text-white">
      <div className="hero-content text-center text-gray-600 ">
      <img src='https://thumbs.dreamstime.com/b/hospital-bed-icon-isolated-dark-background-simple-vector-logo-hospital-bed-icon-isolated-dark-background-194229769.jpg' 
      alt="Hospital Icon" 
      className="w-35 h-20 mx-auto mb-4 transition duration-500 ease-in-out hover:text-blue-500" />
        <h1 className="text-4xl font-bold mb-4">Experience Wellness</h1>
        <p className="text-2xl">Your Journey to a Healthier Life Starts Here</p>
      </div>
    </section>
  );
};

export default HeroImage;
