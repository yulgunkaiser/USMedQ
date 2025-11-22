document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('img.profile-img') as HTMLImageElement | null;
  if (img) {
    img.addEventListener('mouseover', () => {
      img.style.transform = 'scale(1.05)';
    });
    img.addEventListener('mouseout', () => {
      img.style.transform = 'scale(1)';
    });
  }
});
