var mytodolist = /** @class */ (function () {
    function mytodolist() {
        this.list1 = [];
    }
    mytodolist.prototype.add = function (item) {
        this.list1.push(item);
    };
    return mytodolist;
}());
var list = new mytodolist();
function addTodos(id, title, status) {
    list.add({ id: id,
        title: title,
        status: status });
}
