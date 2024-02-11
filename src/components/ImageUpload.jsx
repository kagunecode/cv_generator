import { useData } from '../store';

export default function ImageUpload() {
  const updateItem = useData(state => state.updateItem);

  const handleImageUpload = img => {
    const imageUrl = URL.createObjectURL(img);
    updateItem('generalInfo', 0, 'photo', imageUrl);
  };

  return (
    <div className="mb-4 flex h-[50%] justify-center self-center align-middle">
      <label
        className="mb-2 cursor-pointer self-center border px-20 py-8 font-bold text-slate-500 duration-150 hover:bg-emphasis-500 hover:text-black"
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
    </div>
  );
}
