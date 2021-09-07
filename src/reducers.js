import data from "./data";
function reducers(state = data, action) {
  if (action.type === "INCREMENT") {
    //console.log("xyz", state);
    //console.log("xyz1", action);
    //console.log("xyz2", counter);
    //action.id.counter=action.id.counter+1
    // while()
    // state.counter = state.counter + 1;
    //Array.isArray(state.children)? state.children.map((elem) =>elem.id === action.id.id? action.counter = action.counter + 1));

    /*const flatten=(acc,data)=>{
      if(Array.isArray(data)){
        return data.reduce(flatten,acc);
      }
      return [...acc,data];
    }
    let data1=data.reduce(flatten,[]);
    console.log(data1);*/
    let stack = [];
    //let state1 = { ...state };
    let state1 = { ...state };
    //console.log(state === state1);
    stack.push(state1);
    //console.log("de", state1);
    //console.log("stack", stack.length);
    while (stack.length > 0) {
      var nodex = stack.pop();
      //console.log("stack1", nodex);
      if (nodex.id === action.id.id) {
        nodex.counter += 1;
        //console.log("defg", nodex.parentId);
        break;
      }

      if (nodex.children) {
        var len = nodex.children.length;
        //console.log("stack2", len);
        for (var i = 0; i < len; i++) {
          //console.log("stack3", nodex.children[i].id);
          //console.log("stacxx", action.id.id);
          stack.push(nodex.children[i]);
          /* if (nodex.children[i].id === action.id.id) {
            nodex.children[i].counter = +1;
            console.log("asd", nodex.children[i].counter);
            // return;
            break;
          } else */ if (
            nodex.children[i].children &&
            nodex.children[i].children.length > 0
          ) {
            stack.push(nodex.children[i]);
          }
        }
      }
    }
    //console.log("des", state1);
    //console.log("x", state1 === state);

    //console.log("ddd", data);
    //console.log("xyz2", state.counter);
    //console.log("abc", action.id);
    //console.log("abc11", action.id.id);
    //console.log("vbg", action.counter);
    //console.log("ss", state);
    //console.log("deed", state.children);
    //console.log("hghg",action.children)
    // if(Array.isArray(state.children))
    /*return {
      ...state,
      children: state.children.reduce((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };*/
    /* return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    }*/
    console.log("woe", state1);
    return state1;
  } else if (action.type === "ADD_CHILD") {
    //console.log("xyz", state);
    //console.log("xyz1", action);
    //console.log("xyz", state);
    //console.log("xyz1", action);
    //console.log("xyz2", counter);
    //action.id.counter=action.id.counter+1
    // while()
    // state.counter = state.counter + 1;
    //Array.isArray(state.children)? state.children.map((elem) =>elem.id === action.id.id? action.counter = action.counter + 1));

    /*const flatten=(acc,data)=>{
      if(Array.isArray(data)){
        return data.reduce(flatten,acc);
      }
      return [...acc,data];
    }
    let data1=data.reduce(flatten,[]);
    console.log(data1);*/
    let stack = [];
    //let state1 = { ...state };
    let state1 = { ...state };
    //console.log(state === state1);
    stack.push(state1);
    //console.log("de", state1);
    //console.log("stack", stack.length);
    while (stack.length > 0) {
      nodex = stack.pop();
      //console.log("stack1", nodex);
      if (nodex && nodex.id === action.id.id) {
        // if (!nodex.children) nodex.children.push({});
        console.log("12x", nodex);
        nodex.children &&
          nodex.children.splice(nodex.children.length, 0, {
            id: "2" + Math.abs(Math.random() * 100),
            parentId: action.id.id,
            name: "Counter",
            counter: 0,
            children: []
          });
        break;
      }

      if (nodex.children) {
        len = nodex.children.length;
        //console.log("stack2", len);
        for (i = 0; i < len; i++) {
          //console.log("stack3", nodex.children[i].id);
          //console.log("stacxx", action.id.id);
          stack.push(nodex.children[i]);
          /* if (nodex.children[i].id === action.id.id) {
            nodex.children[i].counter = +1;
            console.log("asd", nodex.children[i].counter);
            // return;
            break;
          } else */ if (
            nodex.children[i].children &&
            nodex.children[i].children.length > 0
          ) {
            stack.push(nodex.children[i]);
          }
        }
      }
    }
    //console.log("des", state1);
    //console.log("x", state1 === state);

    //console.log("ddd", data);
    //console.log("xyz2", state.counter);
    //console.log("abc", action.id);
    //console.log("abc11", action.id.id);
    //console.log("vbg", action.counter);
    //console.log("ss", state);
    //console.log("deed", state.children);
    //console.log("hghg",action.children)
    // if(Array.isArray(state.children))
    /*return {
      ...state,
      children: state.children.reduce((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };*/
    /* return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    }*/
    //console.log("woe", state1);
    return state1;
  } else if (action.type === "REMOVE_CHILD") {
    console.log("xyz", state);
    console.log("xyz1", action);
    console.log("zxc", action.id);

    //console.log("xyz", state);
    //console.log("xyz1", action);
    //console.log("xyz2", counter);
    //action.id.counter=action.id.counter+1
    // while()
    // state.counter = state.counter + 1;
    //Array.isArray(state.children)? state.children.map((elem) =>elem.id === action.id.id? action.counter = action.counter + 1));

    /*const flatten=(acc,data)=>{
      if(Array.isArray(data)){
        return data.reduce(flatten,acc);
      }
      return [...acc,data];
    }
    let data1=data.reduce(flatten,[]);
    console.log(data1);*/
    let stack1 = [];
    //let state1 = { ...state };
    let state1 = { ...state };
    //console.log(state === state1);
    stack1.push(state1);
    //console.log("de", state1);
    //console.log("stack", stack.length);
    console.log(state1);
    while (stack1.length > 0) {
      var nodey = stack1.pop();
      console.log("stack1", nodey);
      var len1 = 0;

      if (nodey.children) {
        len1 = nodey.children.length;
        console.log("len1", len1, nodey.children);
        var f = 0;
        for (var u = 0; u < len1; u++) {
          // console.log("asd", nodey.children[u].id + " " + action.id.id);
          if (nodey.children && nodey.children[u].id === action.id.id) {
            f = 1;
            console.log("here", nodey);
            var children1 = nodey.children;
            if (f === 1 && children1) {
              children1 = children1.forEach(function (o) {
                o.children1 =
                  o.children1 &&
                  o.children1.filter((id) => id.id !== action.id.id);
              });
            }
            nodey.children = children1;
            // break;
          } else if (
            nodey.children[u].children &&
            nodey.children[u].children.length > 0
          ) {
            stack1.push(nodey.children[u]);
          }
        }
        /* if (f === 1 && children1) {
          children1 = children1.forEach(function (o) {
            o.children = o.children.filter((id) => {
              id.id !== action.id.id;
            });
          });
        }*/
        // if (nodey.children === undefined) nodey.children = [];
      }
      // if (nodex.id === action.id.parentId) {
      //console.log("alpha&",nodex.id);
      //action.id.parentId
      //console.log("aaa", nodex.children[0],nodex.children[1]);
      //gives both object
      //all the children of the parent noed whose child is to be deleted
      //console.log("lkj", nodex);
      //nodex.children&&nodex.children.filter(function (id) {
      //return id !== action.id.id;
      //});
      /*for (var x = 0; x < nodex.children.length; x++) {
          if (nodex.children[x].id === action.id.id) {
            nodex.children.remove(nodex.children[x]);
          }
        }*/

      // console.log("mko", nodex);
      //break;
      //}

      //if (nodex.children) {
      //len = nodex.children.length;
      //console.log("stack2", len);
      //for (i = 0; i < len; i++) {
      //console.log("stack3", nodex.children[i].id);
      //console.log("stacxx", action.id.id);
      //stack.push(nodex.children[i]);
      /* if (nodex.children[i].id === action.id.id) {
            nodex.children[i].counter = +1;
            console.log("asd", nodex.children[i].counter);
            // return;
            break;
          } else */ //if (
      //nodex.children[i].children &&
      //nodex.children[i].children.length > 0
      //) {
      //stack.push(nodex.children[i]);
      // }
    }
    console.log(nodey);
    return state1;
  }

  //console.log("des", state1);
  //console.log("x", state1 === state);

  //console.log("ddd", data);
  //console.log("xyz2", state.counter);
  //console.log("abc", action.id);
  //console.log("abc11", action.id.id);
  ////console.log("vbg", action.counter);
  //console.log("ss", state);
  //console.log("deed", state.children);
  //console.log("hghg",action.children)
  // if(Array.isArray(state.children))
  /*return {
      ...state,
      children: state.children.reduce((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };*/
  /* return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    }*/
  //console.log("woe", state1);
  else return state;
}

export default reducers;
/*{id: "0", name: "Counter", counter: 0, children: Array(3)}
id: "0"
name: "Counter"
counter: 0
children: Array(3)*/
//state.id
/*(parameter) state: {
    id: string;
    name: string;
    counter: number;
    children: {
        id: string;
        name: string;
        counter: number;
        children: {
            id: string;
            name: string;
            counter: number;
        }[];
    }[];
}
/src/reducers.js: Unexpected token (7:10)

   5 |     console.log("xyz1", action);
   6 |     //action.id.counter=action.id.counter+1
>  7 |     while()
     |           ^
   8 |     state.counter = state.counter + 1;
   9 |
  10 |     console.log("xyz2", state.counter);*/
/* return {
      ...state,
      children: state.children.map((elem) =>
        elem.id === action.id.id ? { ...elem, counter: elem.counter + 1 } : elem
      )
    };*/
/*forEach(function (o) {
  o.children = o.children.filter(
    (s) =>
      //console.log("xyz",s.id);
      s.id !== action.id.id
  );
})*/
