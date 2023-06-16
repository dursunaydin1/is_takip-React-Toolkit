import { useDispatch } from "react-redux";
import { typeOptions, statusOptions, sortOptions } from "../constants";

import {
  filterByStatus,
  filterByType,
  handleSearch,
  sortState,
  handleClear,
} from "../redux/jobSlice";
import { useRef } from "react";
const Filter = () => {
  const inputRef = useRef();
  const selectStatusRef = useRef();
  const selectTypeRef = useRef();
  const selectSortRef = useRef();

  const dispatch = useDispatch();
  const handleStatusChange = (e) => {
    dispatch(filterByStatus(e.target.value));
    // console.log(e.target.value);
  };
  const handleTypeChange = (e) => {
    dispatch(filterByType(e.target.value));
    // console.log(e.target.value, "merhaba");
  };
  const handleChange = (e) => {
    dispatch(handleSearch(e.target.value));
  };
  const handleSortChange = (e) => {
    dispatch(sortState(e.target.value));
  };
  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    selectStatusRef.current.value = "Durum Seçiniz";
    selectTypeRef.current.value = "Tip Seçiniz";
    selectSortRef.current.value = "Sıralama Seçiniz";
    dispatch(handleClear());
  };
  return (
    <section className="filter-sec">
      <h1>Filtreleme Formu</h1>
      <form>
        <div className="input-field">
          <label>Şirket Adı</label>
          <input
            placeholder="aranacak kelimeyi giriniz"
            ref={inputRef}
            onChange={handleChange}
            type="text"
          />
        </div>
        <div className="input-field">
          <label>Durum</label>
          <select ref={selectStatusRef} onChange={handleStatusChange}>
            <option selected hidden>
              Durum Seçiniz
            </option>
            {statusOptions.map((opt) => (
              <option value={opt.label}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="input-field">
          <label>Tip</label>
          <select ref={selectTypeRef} onChange={handleTypeChange}>
            <option selected hidden>
              Tip Seçiniz
            </option>
            {typeOptions.map((opt) => (
              <option value={opt.label}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div className="input-field">
          <label>Sıralama</label>
          <select ref={selectSortRef} onChange={handleSortChange}>
            <option selected hidden>
              Sıralama Seçiniz
            </option>
            {sortOptions.map((opt) => (
              <option value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <button onClick={handleClick}>Filtreleri Temizle</button>
      </form>
    </section>
  );
};

export default Filter;
