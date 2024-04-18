class Node{
    constructor(Value){
        this.Value = Value;
        this.Next = null;
    }
}

class SLL{
    constructor(){
        this.Head = null;
        this.Tail = null;
        this.Length = 0;
    }

    push(Value){
        var NewNode = new Node(Value);
        if(!this.Head){
            this.Head = NewNode;
            this.Tail = this.Head;
        }else{
            this.Tail.Next = NewNode;
            this.Tail = NewNode;
        }
        this.Length++;
        return this;
    }

    /* 이 pop은 맨 끝에 있는 요소를 빼는 동작을 한다. */
    /* 원하는 타겟을 빼고자 할 땐 다른 연산이 필요하다. */
    pop(){
        if(!this.Head){return undefined;}

        let Current, Prev;
        Current = Prev = this.Head;

        while(Current.Next){
            Prev = Current;
            Current = Current.Next;
        }

        this.Tail = Prev;
        this.Tail.Next = null;

        if(this.Length > 0){this.Length--;}
        if(this.Length === 0){
            this.Head = this.Tail = null;
        }

        return Current;
    }

    /* shift */
    RemoveHead(){
        if(!this.Head){return undefined;}

        var Current = this.Head;
        this.Head = Current.Next;
        this.Length--;

        if(this.Length === 0){
            this.Tail = null;
        }

        return Current;
    }

    /* unshift */
    InsertHead(Value){
        var NewHead = new Node(val);

        if(this.Head === null){
            this.Head = NewHead;
            this.Tail = this.Head;
        }else{
            NewHead.Next = this.Head;
            this.Head = NewHead;
        }

        this.Length++;
        return this;
    }

    Get(Index){
        if(Index < 0 || Index >= this.Length){return null;}

        var Current = this.head;
        while(current !== null && (--Index) >= 0){
            Current = Current.Next;
        }

        return Current;
    }

    Set(Index, Value){
        var Found = this.GetNodeAt(Index);
        
        if(FoundNode){
            FoundNode.Value = value;
            return true;
        }

        return false;
    }

    InsertAfter(Index, Value){
        if(Index < 0 || Index > this.Length) { return false; }
        if(Index === this.Length){
            this.push(val);
            return true;
        }

        if(Index === 0){
            this.InsertHead(val);
            return true;
        }

        var Current = this.Get(Index);

        if(Current){
            let NewNode = new Node(Value);
            NewNode.Next = Current.Next;
            Current.Next = NewNode;
            this.Length++;
            return true;
        }

        return false;
    }

    RemoveNode(Index){
        if(Index < 0 || Index >= this.Length){return undefined;}
        if(Index === 0){return this.RemoveHead();}
        if(Index === this.Length - 1){return this.pop();}

        var Prev = this.Get(Index-1);
        var Target = Prev.Next;
        
        if(Target.Next !== null){
            Prev.Next = Target.Next;
        }

        this.Length--;
        return Target;
    }

    print(){
        var ar = [];
        var Current = this.Head;

        while(Current){
            ar.push(Current.Value);
            Current = Current.Next;
        }

        console.log(ar);
    }

    reverse(){
        var Node = this.Head;
        this.Head = this.Tail;
        this.Tail = Node;

        var Next = null;
        var Prev = null;

        for(var i=0; i<this.Length; i++){
            Next = Node.Next;
            Node.Next = Prev;
            Prev = Node;
            Node = Next;
        }

        return this;
    }
}

let List = new SLL();
List.push("Hello");
List.push("GOODBYE");
List.push("!");
List.print();
List.reverse();
List.print();
