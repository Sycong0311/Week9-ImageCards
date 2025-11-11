function ImageCard(props) {
    const { url, title, description, author, uploadedDatetime } = props;
    const cardStyle = {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '8px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      textAlign: 'center', 
      backgroundColor: '#ffffff'
    };

    const imageStyle = {
      width: '100%',    
      height: '200px',  
      objectFit: 'cover', 
      borderRadius: '4px'
    };
  
    return (
      <div style={cardStyle}>
        <img src={url} alt={title} style={imageStyle} />
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Author:</strong> {author}</p>
        <p><small><strong>Uploaded:</strong> {uploadedDatetime}</small></p>
      </div>
    );
  }
  
  export default ImageCard;