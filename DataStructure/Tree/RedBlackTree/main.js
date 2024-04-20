/*
    규칙은 간단하다.

    자식 노드가 빨간색일 때 부모 노드는 빨간색일 수 없다. 

    루트와 잎 노드는 모두 검은색이다.
    
    잎 노드부터 루트 노드까지의 검정색 노드 개수가
    각 줄기마다 동일해야 한다.
*/

class Node{
    static Red = 0;
    static Black = 1;

    constructor(Value){
        this.Parent = null;
        this.Left = null;
        this.Right = null;

        this.Data = Value;
        this.Color = Node.Red;
    }
};

const var Leaf = new Node();
Leaf.Color = Node.Black;

class RBT{
    constructor(){
        this.Root = null;
    }

    RotateLeft(Current){
        var RightChild = Current.Right;

        Current.Right = RightChild.Left;
        if(RightChild.Left !== Leaf){
            RightChild.Left.Parent = Current;
        }

        RightChild.Parent = Current.Parent;

        if(Current.Parent === null){
            this.Root = RightChild;
        }else{
            if(Current === Current.Parent.Left){
                Current.Parent.Left = RightChild;
            }else{
                Current.Parent.Right = RightChild;
            }
        }

        RightChild.Left = Current;
        Current.Parent = RightChild;

        return this;
    }

    RotateRight(Current){
        var LeftChild = Current.Left;
        Current.Left = LeftChild.Right;

        if(LeftChild.Right !== Leaf){
            LeftChild.Right.Parent = Current;
        }

        LeftChild.Parent = Current.Parent;
        if(Current.Parent === null){
            this.Root = LeftChild;
        }else{
            if(Current === Current.Parent.Right){
                Current.Parent.Right = LeftChild;
            }else{
                Current.Parent.Left = LeftChild;
            }
        }

        LeftChild.Right = Current;
        Current.Parent = LeftChild;

        return this;
    }

    Insert(NewNode){
        var Tree = this.Root;

        while(1){
            if(Tree.Data < NewNode.Data){
                if(Tree.Right === Leaf){
                    Tree.Right = NewNode;
                    NewNode.Parent = Tree;
                }else{
                    Tree = Tree.Right;
                }
            }else if(Tree.Data > NewNode.Data){
                if(Tree.Left === Leaf){
                    Tree.Left = NewNode;
                    NewNode.Parent = Tree;
                }else{
                    Tree = Tree.Left;
                }
            }else{
                return this;
            }
        }
    }

    AppendNode(Value){
        var NewNode = new Node(Value);

        NewNode.Color = Node.Red;
        NewNode.Left = Leaf;
        NewNode.Right = Leaf;

        Insert(NewNode);

        var Temp = null;
        RebuildAfterInsert(NewNode, Temp);
    }

    RebuildAfterInsert(NewNode, Temp){
        // 부모가 빨간색일 때 문제 발생
        while(NewNode !== this.Root && NewNode.Parent.Color === Node.Red){
            if(NewNode.Parent === NewNode.Parent.Parent.Left){
                var Uncle = NewNode.Parent.Parent.Right;

                if(Uncle.Color === Node.Red){
                    NewNode.Parent.Color = Node.Black;
                    Uncle.Color = Node.Black;

                    NewNode.Parent.Parent.Color = Node.Red;
                    Temp = NewNode;
                    NewNode = NewNode.Parent.Parent;
                }else{
                    if(NewNode === NewNode.Parent.Right){
                        Temp = NewNode.Parent;
                        this.RotateLeft(this.Root, Temp);
                    }
                }
            }
        }
    }
};
