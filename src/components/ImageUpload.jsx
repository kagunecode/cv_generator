import { useDataContext } from '../contexts/DataContext';

export default function ImageUpload() {
  const { data, setData } = useDataContext();
  let imageUrl = '';

  const handleImageUpload = img => {
    imageUrl = URL.createObjectURL(img);
    setData(prevData => ({
      ...prevData,
      generalInfo: prevData.generalInfo.map((item, i) =>
        i == 0 ? { ...item, photo: imageUrl } : item,
      ),
    }));
  };

  const handleImageDelete = () => {
    setData(prevData => ({
      ...prevData,
      generalInfo: prevData.generalInfo.map((item, i) =>
        i == 0 ? { ...item, photo: '' } : item,
      ),
    }));
  };

  return (
    <div className="flex h-[50%] justify-center self-center align-middle">
      <label
        className="cursor-pointer self-center border-2 px-20 py-8 font-bold text-slate-500 duration-150 hover:bg-emphasis-500 hover:text-black"
        htmlFor="image_upload"
      >
        Upload Image
      </label>
      <input
        id="image_upload"
        type="file"
        className="hidden"
        onChange={e => handleImageUpload(e.target.files[0])}
        accept="image/png, image/jpg, image/jpeg"
      />
      <button
        className="ml-4 cursor-pointer self-center border-2 px-20 py-8 font-bold text-slate-500 duration-150 hover:bg-emphasis-500 hover:text-black"
        onClick={handleImageDelete}
      >
        Delete Image
      </button>
    </div>
  );
}
