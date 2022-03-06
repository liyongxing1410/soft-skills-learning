import { createSlice, configureStore } from "@reduxjs/toolkit";

const initState = {
  weekArr: [],
  numberOfWeek: 0,
  currentWeek: 0,
};

const rootReducer = {
  addWeek(state) {
    state.numberOfWeek++;
    state.weekArr.push({
      week: {
        numberOfWeek: state.numberOfWeek,
        totalTest: 0,
        test: [],
        totalPractice: 0,
        practice: [],
      },
    });
    state.currentWeek = state.weekArr.length;
  },

  addTest(state) {
    const testArr = state.weekArr[state.currentWeek - 1].week;
    testArr.totalTest++;
    testArr.test.push({
      testNumber: state.weekArr[state.currentWeek - 1].week.totalTest,
      description: "",
      image: "",
    });

    state.weekArr[state.currentWeek - 1].week = {
      ...state.weekArr[state.currentWeek - 1].week,
      numberOfTest: state.weekArr[state.currentWeek - 1].week.totalTest,
    };
  },

  deleteTest(state, action) {
    const testArr = state.weekArr[state.currentWeek - 1].week;
    testArr.totalTest--;
    const newTestArr = testArr.test.filter((test) => {
      return test.testNumber !== action.payload;
    });
    testArr.test = [...newTestArr];
  },

  addPractice(state) {
    const practiceArr = state.weekArr[state.currentWeek - 1].week;
    practiceArr.totalPractice++;
    practiceArr.practice.push({
      practiceNumber: state.weekArr[state.currentWeek - 1].week.totalPractice,
      description: "",
      image: "",
    });

    state.weekArr[state.currentWeek - 1].week = {
      ...state.weekArr[state.currentWeek - 1].week,
      numberOfPractice: state.weekArr[state.currentWeek - 1].week.totalPractice,
    };
  },

  deletePractice(state, action) {
    const practiceArr = state.weekArr[state.currentWeek - 1].week;
    practiceArr.totalPractice--;
    const newPracticeArr = practiceArr.practice.filter((practice) => {
      return practice.practiceNumber !== action.payload;
    });
    practiceArr.practice = [...newPracticeArr];
  },

  changeCurrentWeek(state, action) {
    state.currentWeek = action.payload;
  },
};

const practiceSlice = createSlice({
  name: "practice",
  initialState: initState,
  reducers: rootReducer,
});

const practiceStore = configureStore({
  reducer: practiceSlice.reducer,
});

export const practiceAction = practiceSlice.actions;

export default practiceStore;