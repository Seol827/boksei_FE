import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

//1. actions
const SET_INFO = "SET_INFO";
const SET_POLICY = "SET_POLICY";
const ADD_INFO = "ADD_INFO";
const EDIT_INFO = "EDIT_INFO";
//const DELETE_USER = "DELETE_USER";

//2. initialState
const initialState = {
  policyList : [],
  list : {
    lifeCycle : [],
    gender : [],
    region : [],
    disability : [],
    obstacle : [],
  },
  lifeCycle : [],
  gender : [],
  region : [],
  disability : [],
  obstacle : [],
};

const initialInfo = {
  lifeCycle : [],
  gender : [],
  region : [],
  disability : [],
  obstacle : [],
}

//3. Action Create
const setInfo = createAction(SET_INFO, (info_list) => ({ info_list }));
const setPolicy = createAction(SET_POLICY, (policy_list) => ({ policy_list }));
//const addInfo = createAction(ADD_INFO, (one, two, three, four) => ({ one, two, three, four }));
const addInfo = createAction(ADD_INFO, (one) => ({ one }));
// const editInfo = createAction(EDIT_INFO, (email, post_list) => ({
//   email,
//   post_list,
// }));
//const deleteUser = createAction(DELETE_USER, () => ({}));


//4. middleware
//User 입력 정보 GET
export const getInfoDB =
  (userId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await apis.infoGet(userId);
       //console.log(data.data);
       dispatch(setInfo(data.data));
    } catch (err) {
      console.log(err);
    }
  };


//User 정보 입력 POST
const addInfoDB = (userId, lifeCycle, gender, region, disability, obstacle) => {
  return function (dispatch, getState, { history }) {

    const _info = {
      ...initialInfo,
      lifeCycle : lifeCycle,
      gender : gender,
      region : region,
      disability : disability,
      obstacle : obstacle,
    }

    console.log(_info);

    // console.log(_info.lifeCycle);
    // console.log(_info.obstacle);
    // console.log(_info.obstacleYN);
    // console.log(_info.target);



    // Object.entries(_info.lifeCycle).map((item, idx) => {
    //   return(
        
    //   );
    // })

    apis
      .infoAdd(userId, lifeCycle, gender, region, disability, obstacle)
      .then((res) => {
        console.log(res);
        //dispatch(addInfo(_info.lifeCycle, _info.obstacle, _info.obstacleYN, _info.target));
        dispatch(addInfo(_info));
        //dispatch(_info.obstacleYN[0]);
        
        //history.replace("/main");
      })
      .catch((err) => {
        console.log("infoAdd 실패", err);
      });
  };
};

//User 정보 수정 PUT


//User 맞춤 정책 GET
export const getPolicyDB =
  (userId) =>
  async (dispatch, getState, { history }) => {
    try {
      const { data } = await apis.policyGet(userId);
      //console.log(data.checkedData);
      //console.log(data);
      dispatch(setPolicy(data.checkedData));
    } catch (err) {
      console.log(err);
    }
  };


//5. reducer
export default handleActions({

  [SET_INFO]: (state, action) =>  produce(state, (draft) => {
    draft.list = action.payload.info_list;
  }),

  [SET_POLICY] : (state, action) => produce(state, (draft) => {
    draft.policyList = action.payload.policy_list;
    //console.log(action.payload.policy_list);
  }),


  [ADD_INFO]: (state, action) => produce(state, (draft) => {
    //  draft.list.unshift(action.payload.one);
    //  draft.list.unshift(action.payload.two);
    //  draft.list.unshift(action.payload.three);
    //  draft.list.unshift(action.payload.four);
    // draft.list.unshift(action.payload.one);
    draft.list = {...action.payload.one};


  }),

  [EDIT_INFO]: (state, action) => produce(state, (draft) => {}),


  },
  initialState
);

const actionCreators = {
  getInfoDB,
  addInfo,
  addInfoDB,
  getPolicyDB,
  setInfo,
  //editInfo,
  //deleteUser,
};

export { actionCreators };