import { useEffect, useState, useRef } from "react";
import "./ImageUploader.css";

export const ImageUploader: React.FC = () => {
  const [imageUrl, setimageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const savedImage = localStorage.getItem("savedImage");
    if (savedImage) {
      setimageUrl(savedImage);
    }
  }, []);

  useEffect(() => {
    if (imageUrl) {
      document.body.style.backgroundImage = `url('${imageUrl}')`;
      document.body.style.backgroundSize = 'cover'; 
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundAttachment = 'fixed';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.background = '';
      document.body.style.overflow = '';
    }
  }, [imageUrl]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setimageUrl(base64String);
        localStorage.setItem("savedImage", base64String);
      };
    }
  };

  const removeImage = () => {
    setimageUrl(null);
    localStorage.removeItem("savedImage");
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="upload-container">
      <h3>Your Wallpaper</h3>
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
            <span>Wallpaper Active</span>
          </div>
        ) : (
          <div className="Image-placeholder-text">
            <span>Click to choose an image</span>
          </div>
        )}

        {imageUrl && (
          <div className="action-buttons">
            <button className="remove-image-button" onClick={removeImage}>
              Delete Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
