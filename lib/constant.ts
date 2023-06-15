export const optionsFilter = [
  { value: 'Mặc định', key: '' },
  { value: 'Từ A-Z', key: 'title' },
  { value: 'Từ Z-A', key: '-title' },
  { value: 'Cũ nhất', key: 'date_created' },
  { value: 'Mới nhất', key: '-date_created' },
  { value: 'Giá tăng dần', key: 'price' },
  { value: 'Tiền giảm dần', key: '-price' },
];
export const popuplateTags = [
  { value: 'Giày Mizuno', key: '' },
  { value: 'Giày ', key: 'price' },
  { value: 'Thời gian', key: 'time' },
];
export const variantsToast = {
  visible: { opacity: 1, y: -70 },
  hidden: { opacity: 0, y: -0 },
  exit: { opacity: 0, y: -20 },
};
