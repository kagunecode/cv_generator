import { useData } from '../store';
import imageUpload from '../utilities/imageUpload';

export default function ImageUpload() {
  const [generalInfo, updateItem] = useData(state => [
    state.generalInfo,
    state.updateItem,
  ]);

  return (
    <div className="flex flex-col md:ml-4">
      <h1>Photo</h1>
      <div className="relative flex items-center justify-center">
        <label className="left-50 bottom-50 absolute flex h-[15rem] w-[15rem] cursor-pointer items-center justify-center border text-2xl font-bold text-white opacity-5 duration-200 hover:opacity-100 hover:backdrop-blur-xl">
          <h1>Upload Photo</h1>
          <input
            type="file"
            className="hidden"
            onChange={e => imageUpload(e.target.files[0], updateItem)}
            accept="image/png, image/jpg, image/jpeg"
          />
        </label>
        <img
          src={generalInfo[0].photo}
          className="col-span-2 h-[15rem] w-[15rem] justify-self-center border object-cover"
        />
      </div>
    </div>
  );
}
