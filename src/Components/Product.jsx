import BackgroundCarousel from "../Corousel/BackGround";




const product = [
  {
    title: "Pouch Packaging Machines",
    description: "Reliable and efficient for food & consumer products",
    image: "https://www.spackmachine.com/wp-content/uploads/2022/05/Things-to-Know-Before-Choosing-Filling-Machine-6.png", // Example for pouch packaging
    // More images or specific product details can go here
  },
  {
    title: "Liquid Packaging Machines",
    description: "Specially designed for water & milk packaging",
    image: "https://assetpackaging.com.au/wp-content/uploads/2021/06/image-1.png", // Example for liquid packaging
  },
  {
    title: "Mixtures & Conveyers",
    description: "Smooth operations for industrial needs",
    image: "https://dphengg.com/wp-content/uploads/2022/10/1753806836-1080x675.jpg", // Example for mixtures/conveyers
  },
  {
    title: "AHU Drums & Fans",
    description: "Designed for durability and performance",
    image: "https://moduflow.co.uk/wp-content/uploads/2019/12/hall-roof-2560454_640.jpg", // Example for AHU
  },
  {
    title: "Transformers",
    description: "Built with precision and quality assurance",
    image: "https://ncetest.com/wp-content/uploads/2024/05/shutterstock_1971671024-scaled.jpg", // Example for Transformers
  },
  {
    title: "Vacuum Pumps",
    description: "High-performance solutions for various industries",
    image: "https://cpimg.tistatic.com/04478093/b/8/Dry-Vacuum-Pumps.jpg", // Example for Vacuum Pumps
  },
  {
    title: "Printing Machines",
    description: "Robust machinery for printing industries",
    image: "https://i0.wp.com/printersparts.com/wp-content/uploads/2023/10/Heidelberg-Offset-Printers.jpg?resize=1080%2C675&ssl=1", // Example for Printing Machines
  },
  {
    title: "Spare Parts",
    description: "Complete spare part solutions for all our machines",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVx0KFxpVWMha2ci8YBfpDFHILgCtlQTOhg&s", // Example for Spare Parts
  },
];

export default function Products() {
  

  return (
     <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          We specialize in custom fabrication work, offering high-quality solutions for:
        </h2>
        <div className="w-full max-w-4xl space-y-8">
          {product.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-auto transform hover:scale-105 transition-transform duration-300">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}