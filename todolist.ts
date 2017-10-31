/**
 * Created by anoopjain on 10/26/2017.
 */
interface  todos
{
    id: number;
    title : string;
    status : string;
}
class mytodolist
{
  public  list1 : todos[];
  constructor()
  {
      this.list1=[];
  }
  add(item:todos)
  {
    this.list1.push(item);
  }
  //display()
}
var list=new mytodolist();
function  addTodos(id:number,title:string,status:string)
{
    list.add({id:id,
    title:title,
    status:status});
}
