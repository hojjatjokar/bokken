interface Obj {
  title: string,
  id: number,
};

function another(obj: Obj){
  console.log('another', obj);
}

export default another;
