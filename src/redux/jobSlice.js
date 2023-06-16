import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  filtredJobs: [],
  initialized: false,
};

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      // hem orjinal hem kopya disziye apiden gelen verileri gönderiyoruz
      state.jobs = action.payload;
      state.filtredJobs = action.payload;
      state.initialized = true;
    },
    addNewJob: (state, action) => {
      state.jobs.unshift(action.payload);
    },
    filterByStatus: (state, action) => {
      // aksiyonun payload değeriyle gelen status değerine eşit olan elemanlarla yeni bir dizi oluştuduk
      const filtredJobs = state.jobs.filter(
        (job) => job.status === action.payload
      );
      // kopya diziyi güncelleme
      state.filtredJobs = filtredJobs;
    },
    filterByType: (state, action) => {
      // aksiyonun payload değeriyle gelen status değerine eşit olan elemanlarla yeni bir dizi oluştuduk
      const filtredArr = state.jobs.filter(
        (job) => job.type === action.payload
      );
      // kopya diziyi güncelleme
      state.filtredJobs = filtredArr;
    },
    handleSearch: (state, action) => {
      const query = action.payload.toLowerCase();
      const searchJob = state.jobs.filter((job) =>
        job.company.toLowerCase().includes(query)
      );
      state.filtredJobs = searchJob;
    },
    sortState: (state, action) => {
      switch (action.payload) {
        case "a-z":
          state.filtredJobs.sort((a, b) => {
            // eğerki a objesinin şirket ismi alfabede sıra olarak
            // b den gerideyse sen a objesini dizide b ye göre daha ön sıraya koy
            // ! bu bir döngü içersinde dizideki bütün elemanlar için gerçekleşir
            if (a.company < b.company) return -1;
            if (a.company > b.company) return 1;
            return 0;
          });

          break;
        // Z den A'ya sıralama
        case "z-a":
          state.filtredJobs.sort((a, b) => {
            if (a.company < b.company) return 1;
            if (a.company > b.company) return -1;
            return 0;
          });
          break;
        /*
            tarih değerlerine göre sıralama yaparken yapılması gereken:
            öncelikle string tarih değerini bir js tarih objesine çevir 
            - eski hali = "10/1/2023"
            - yeni hali = 1231453827573
            - daha sonra teni değerler arasında çıkarma işlemi
            - sort methodu büyük olan sayıyı dizide daha öne koyucak
          */
        case "En Yeni":
          state.filtredJobs.sort((a, b) => new Date(b.date) - new Date(a.date));
          break;

        case "En Eski":
          state.filtredJobs.sort((a, b) => new Date(a.date) - new Date(b.date));
          break;

        default:
          break;
      }
    },
    handleClear: (state, action) => {
      state.filtredJobs = state.jobs;
    },
  },
});

export const {
  setJobs,
  addNewJob,
  filterByStatus,
  filterByType,
  handleSearch,
  sortState,
  handleClear,
} = jobSlice.actions;
export default jobSlice.reducer;
