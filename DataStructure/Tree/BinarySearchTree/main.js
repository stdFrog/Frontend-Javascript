class Node{
    constructor(Value){
        this.Value = Value;
        this.Left = null;
        this.Right = null;
    }
}

class BST{
    constructor(){
        this.Root = null;
    }

    Search(Value){
        var Current = this.Root;

        while(1){
            if(Current === null){return null;}
            if(Value === Current.Value){return Current;}
            if(Value > Current.Value){
                Current = Current.Right;
            }else{
                Current = Current.Left;
            }
        }
    }

    Insert(Value){
        var NewNode = new Node(Value);

        if(this.Root === null){
            this.Root = NewNode;
            return this;
        }else{
            var Current = this.Root;

            while(1){
                if(Value < Current.Value){
                    if(Current.Left === null){
                        Current.Left = NewNode;
                        return this;
                    }else{
                        Current = Current.Left;
                    }
                }else if(Value > Current.Value){
                    if(Current.Right === null){
                        Current.Right = NewNode;
                        return this;
                    }else{
                        Current = Current.Right;
                    }
                }
            }
        }
    }

    SearchMinNode(Tree){
        var Current = Tree;
        var Max = Current.Value;
        while(1){
            if(Current === null){return null;}
            else{
                if(Current.Left !== null){
                    Current = Current.Left;
                }else{
                    return Current;
                }
            }
        }
    }

    Remove(Value){
        var Parent, Current;
        Parent = Current = this.Root;
        while(1){
            if(Current === null){return null;}
            if(Current.Value < Value){Parent = Current; Current = Current.Right;}
            else if(Current.Value > Value){Parent = Current; Current = Current.Left;}
            else{
                if(Current.Left === null && Current.Right === null){
                    if(Parent.Left === Current){
                        Parent.Left = null;
                    }else{
                        Parent.Right = null;
                    }
                }else{
                    var Removed = Current;

                    if(Current.Left !== null && Current.Right !== null){
                        var Min = this.SearchMinNode(Current.Right);
                        Removed = this.Remove(Min);
                        Current.Value = Min;
                    }else{
                        var Temp = null;
                        if(Current.Left !== null){
                            Temp = Current.Left;
                        }else{
                            Temp = Current.Right;
                        }

                        if(Parent.Left === Current){
                            Parent.Left = Temp;
                        }else{
                            Parent.Right = Temp;
                        }
                    }
                }
                return Removed;
            }
        }
    }

    BFS(){
        var data = [], queue = [], node = this.root;

        queue.push(node);
        while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left){queue.push(node.left);}
            if(node.right){queue.push(node.right);}
        }
        return data;
    }

    DFSPreOrder(){
        var data = [];
        var current = this.root;

        function traverse(node){
            data.push(node.val);
            if(node.left){traverse(node.left);}
            if(node.right){traverse(node.right);}
        }
        traverse(current);

        return data;
    }

    DFSInOrder(){
        var data = [];
        var current = this.root;

        function traverse(node){
            if(node.left){traverse(node.left);}
            data.push(node.val);
            if(node.right){traverse(node.right);}
        }
        traverse(current);

        return data;
    }

    DFSPostOrder(){
        var data = [];
        var current = this.root;

        function traverse(node){
            if(node.left){traverse(node.left);}
            if(node.right){traverse(node.right);}
            data.push(node.val);
        }
        traverse(current);

        return data;
    }


    static PrintTree(Tree){
        if(Tree === null){return null;}
        this.PrintTree(Tree.Left);
        console.log(Tree.Value);
        this.PrintTree(Tree.Right);
    }
}

console.log("Create Binary Search Tree");
var Tree = new BST();
console.log("Append Root Node(Value: 10)");
Tree.Root = new Node(10);
console.log("Print Result")
BST.PrintTree(Tree.Root);
console.log("Append Some Node(Value: 1, 2, 3, 4, 5)");
Tree.Insert(1);
Tree.Insert(2);
Tree.Insert(3);
Tree.Insert(4);
Tree.Insert(5);
console.log("Print Result");
BST.PrintTree(Tree.Root);
console.log("Remove Some Node(Value: 3, 5, 10)");
Tree.Remove(10);
Tree.Remove(3);
Tree.Remove(5);
console.log("Print Result");
BST.PrintTree(Tree.Root);       // Remove에 오류있는듯 나중에 수정 필요
console.log("Find Min Value");
console.log("Search Result : " + Tree.SearchMinNode(Tree.Root).Value);
