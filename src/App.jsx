// src/App.jsx

import ImageCard from './ImageCard';

// (Step 6) Create your array of image objects
const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0', 
    title: 'Sunset',
    description: 'A beautiful sunset over the mountains.',
    author: 'Alice',
    uploadedDatetime: '25/09/2025, 12:00:00'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e',
    title: 'Forest',
    description: 'A dense forest with tall trees.',
    author: 'Bob',
    uploadedDatetime: '25/09/2025, 12:30:00'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e',
    title: 'Beach',
    description: 'Relaxing waves hitting the sandy beach.',
    author: 'Charlie',
    uploadedDatetime: '25/09/2025, 13:00:00'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3',
    title: 'Cityscape',
    description: 'Skyscrapers lighting up the night sky.',
    author: 'Diana',
    uploadedDatetime: '25/09/2025, 13:30:00'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=400',
    title: 'Desert',
    description: 'Golden sands stretching into the horizon.',
    author: 'Ethan',
    uploadedDatetime: '25/09/2025, 14:00:00'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cml2ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=400',
    title: 'River',
    description: 'A calm river flowing through the valley.',
    author: 'Fiona',
    uploadedDatetime: '25/09/2025, 14:30:00'
  }
];

function App() {
  // (Step 7) Inline style for the 3-column grid
  const galleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 equal columns
    gap: '16px',                            // Space between cards
    padding: '20px',
    backgroundColor: '#f0f2f5'              // Light gray background like the demo
  };

  const headingStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333'
  };

  return (
    <div>
      <h1 style={headingStyle}>Image Gallery</h1> {/* Added a title like the demo */}

      <div style={galleryStyle}>
        {/* (Step 7) Loop through the images array */}
        {images.map(image => (
          <ImageCard
            key={image.id} // <-- React needs a unique key for lists
            url={image.url}
            title={image.title}
            description={image.description}
            author={image.author}
            uploadedDatetime={image.uploadedDatetime}
          />
        ))}
      </div>
    </div>
  );
}

export default App;