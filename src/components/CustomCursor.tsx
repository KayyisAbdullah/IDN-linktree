import { useEffect } from 'react';

const CustomCursor = () => {
  useEffect(() => {
    // Tambahkan style untuk cursor default
    document.body.style.cursor = 'url("/images/cursor1.png"), auto';

    // Tambahkan style untuk elements yang bisa di-klik
    const style = document.createElement('style');
    style.textContent = `
      a, button, [role="button"], .cursor-pointer, 
      input[type="submit"], input[type="button"], 
      select, .btn, .clickable {
        cursor: url("/images/cursor2.png"), pointer !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.style.cursor = 'auto';
      if (style.parentNode) {
        document.head.removeChild(style);
      }
    };
  }, []);

  return null;
};

export default CustomCursor;