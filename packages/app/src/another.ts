interface Obj {
  title: string;
  id: number;
}

function another(obj: Obj): void {
  console.log('another', obj);
}

export default another;
