const works = [
  {
    title: "Playground Equipment",
    description: "Slides, chain swings, sea-saws, merry-go-rounds",
    imageUrl: "https://www.playlsi.com/globalassets/1440x560-hero/challenging-play-02_1440x560.jpg",
  },
  {
    title: "Government & Contractor Works",
    description: "Trolleys, custom industrial fabrication",
    imageUrl: "https://media.biltrax.com/wp-content/uploads/2022/07/iStock-1028568006.jpg",
  },
  {
    title: "Schools & Hospitals",
    description: "Durable and safe structures",
    imageUrl: "https://cdn.prod.website-files.com/66009083978d59646ab59be1/6799cdab67f89ea7bf001207_tmppy6c_h5b.jpeg",
  },
  {
    title: "Public & Society Parks",
    description: "Benches, canopies, play structures",
    imageUrl: "https://d34c09ztlk5mrb.cloudfront.net/cunningham-recreation/d2sacxxyngi6cb_cloudfront_net/Hoover_183d17ce614a305ef7e14498bef98c4b.jpg",
  },
  {
    title: "Gates, Grills & Railings",
    description: "Modern and long-lasting designs",
    imageUrl: "https://i0.wp.com/laitoncrafts.com/wp-content/uploads/2023/04/grills-Image-copy.webp?fit=1920%2C1080&ssl=1",
  },
  {
    title: "SS 304 Steel Work",
    description: "Professional quality assurance in stainless steel",
    imageUrl: "https://www.azom.com/images/Article_Thumbs/ThumbForArticle_2867_16010306047694886.png",
  },
  {
    title: "Industrial Sheds",
    description: "Design and fabrication with structural strength",
    imageUrl: "https://assets.jswonemsme.com/medium_peb_industrial_28c55e9222/medium_peb_industrial_28c55e9222.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          We specialize in custom fabrication work, offering high-quality solutions for:
        </h2>
        <div className="w-full max-w-4xl space-y-8">
          {works.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden w-full mx-auto transform hover:scale-105 transition-transform duration-300">
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Maintenance />
    </section>
  );
}

function Maintenance() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Maintenance & Repair</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We provide end-to-end maintenance and repair services for machines across government and private companies. Our trained team ensures minimum downtime and maximum efficiency for your equipment.
        </p>
      </div>
    </section>
  );
}