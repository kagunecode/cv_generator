const imageUpload = (img, set) => {
  const imageUrl = URL.createObjectURL(img);
  set('generalInfo', 0, 'photo', imageUrl);
};

export default imageUpload;
