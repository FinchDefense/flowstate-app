import "./ImageUploader.css";

interface ImageUploaderProps {
  setShowImageUploader: (value: React.SetStateAction<boolean>) => void;
  imageUrl: string | null;
  setImageUrl: React.Dispatch<React.SetStateAction<string | null>>;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ setShowImageUploader, imageUrl, setImageUrl, fileInputRef }) => {
  

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setImageUrl(base64String);
        localStorage.setItem("savedImage", base64String);
      };
    }
  };

  const removeImage = () => {
    setImageUrl(null);
    localStorage.removeItem("savedImage");
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="upload-container">
      <div className="fixed-button-container">
        <button className="back-button" onClick={() => setShowImageUploader(false)}>
          ← Back to Menu
        </button>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleImageChange}
        accept="image/*"
        style={{ display: "none" }}
      />

      <div className="dropzone-box" onClick={triggerFileInput}>
        {imageUrl ? (
          <div className="image-placeholder-text">
            <span>Change Wallpaper</span>
          </div>
        ) : (
          <div className="Image-placeholder-text">
            <span>Click to choose an image</span>
          </div>
        )}

        {imageUrl && (
          <div className="action-buttons">
            <button
              className="remove-image-button"
              onClick={(e) => {
                e.stopPropagation();
                removeImage();
              }}
            >
              Delete Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
