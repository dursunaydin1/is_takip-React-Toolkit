import { useState } from "react";
import { typeOptions, statusOptions } from "../constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addNewJob } from "../redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddJop = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({
    id: new Date().getTime(),
    position: "",
    company: "",
    location: "",
    status: "mülakat",
    type: "tam-zaman",
    date: new Date().toLocaleDateString(),
  });
  // console.log(formState);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!formState.position || !formState.company || !formState.location) {
      toast.warn("Lütfen bütün alanları doldurun");
      return;
    }
    axios
      .post("http://localhost:3055/jobs", formState)
      .then(() => {
        dispatch(addNewJob(formState));
        navigate("/"); // Ana sayfaya yönlendirme
        toast.success("Başarıyla eklendi");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="add-sec">
      <h2>Yeni İş Ekle</h2>
      <div className="form">
        <form onSubmit={handleAdd}>
          <div className="input-field">
            <label>Pozisyon</label>
            <input
              type="text"
              onChange={(e) =>
                setFormState({ ...formState, position: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label>Şirket</label>
            <input
              type="text"
              onChange={(e) =>
                setFormState({ ...formState, company: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label>Lokasyon</label>
            <input
              type="text"
              onChange={(e) =>
                setFormState({ ...formState, location: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label>Durum</label>
            <select
              onChange={(e) =>
                setFormState({ ...formState, status: e.target.value })
              }
            >
              {statusOptions.map((opt) => (
                <option value={opt.label}>{opt.label}</option>
              ))}
            </select>
          </div>
          <div className="input-field">
            <label>Tür</label>
            <select
              onChange={(e) =>
                setFormState({ ...formState, type: e.target.value })
              }
            >
              {typeOptions.map((opt) => (
                <option value={opt.label}>{opt.label}</option>
              ))}
            </select>
          </div>
          <button>Ekle</button>
        </form>
      </div>
    </section>
  );
};

export default AddJop;
