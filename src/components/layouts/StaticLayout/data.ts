const getAsideStretchStatus = () =>
  localStorage.getItem('aside_stretch_status') !== null
    ? localStorage.getItem('aside_stretch_status') === 'true'
    : true;

export { getAsideStretchStatus };
