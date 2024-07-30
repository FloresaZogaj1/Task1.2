import React from 'react';
import Card from './components/Card';
import image1 from '../src/assets/download.jpg'

const cardsData = [
  {
    version: "3.3.0",
    date: "14/05/2018",
    label: "New",
    labelColor: "green",
    author: "Kevin Joe",
    authorImage: image1,
    description: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization"
  },
  {
    version: "3.1.0",
    date: "20/05/2015",
    label: "Fix",
    labelColor: "blue",
    author: "Kevin Joe",
    authorImage: image1, 
    description: "Introducing Host Cloud Drive - virtual drive functionality New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes"
  },
  {
    version: "3.1.0",
    date: "20/05/2015",
    label: "Improvement",
    labelColor: "fuchsia",
    author: "Kevin Joe",
    authorImage: image1, 
    description: "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes"
  },
  
  {
    version: "3.3.0",
    date: "14/05/2018",
    label: "New",
    labelColor: "green",
    author: "Kevin Joe",
    authorImage: image1, 
    description: "File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share permissions re-design and optimization"
  },
  {
    version: "3.1.0",
    date: "20/05/2015",
    label: "Fix",
    labelColor: "blue",
    author: "Kevin Joe",
    authorImage: image1, 
    description: "Introduction Host Cloud Drive - virtual drive functionality New Share options and management New, more user friendly design Sync optimizations Various performance improvements and bug fixes "
  },
  {
    version: "2.9.0",
    date: "20/05/2015",
    label: "Improvement",
    labelColor: "fuchsia",
    author: "Kevin Joe",
    authorImage: image1, 
    description:  "Added Settings for Auto Start Added Update Notification Speed Optimization Bug Fixes"
  }
];

const App = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsData.map((card, index) => (
          <Card 
            key={index}
            version={card.version}
            date={card.date}
            label={card.label}
            labelColor={card.labelColor}
            author={card.author}
            authorImage={card.authorImage}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
