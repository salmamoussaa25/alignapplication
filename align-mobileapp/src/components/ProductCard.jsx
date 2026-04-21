import React from 'react';
import PrimaryButton from './PrimaryButton';
import './ProductCard.css';

const ProductCard = ({ item, lang, text, onView, onBook }) => {
  const title = lang === 'ar' ? item.title_ar : item.title_en;
  const summary = lang === 'ar' ? item.summary_ar : item.summary_en;

  return (
    <article className="productcard_box">
      <div className="productcard_glow" />
      <div className="productcard_head">
        <h3 className="productcard_title">{title}</h3>
        <span className="productcard_time">{item.duration}</span>
      </div>
      <p className="productcard_text">{summary}</p>
      <div className="productcard_meta">
        <span>{item.focus}</span>
        <span>{item.price}</span>
      </div>
      <div className="productcard_actions">
        <PrimaryButton label={text.detailsBtn} soft onClick={onView} />
        <PrimaryButton label={text.addBtn} onClick={onBook} />
      </div>
    </article>
  );
};

export default ProductCard;
