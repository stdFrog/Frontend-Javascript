class Node{
    constructor(Value){
        this.Value = Value;
        this.Next = null;
        this.Prev = null;
    }
}

// Double Linked List
class DLL{
    constructor(){
        this.Head = null;
        this.Tail = null;
        this.Length = 0;
    }

    push(Value){
        var NewNode = new Node(Value);
        if(this.Head === null){
            this.Head = NewNode;
            this.Tail = NewNode;
        }else{
            this.Tail.Next = NewNode;
            NewNode.Prev = this.Tail;
            this.Tail = NewNode;
        }

        this.Length++;
        return this;
    }

    pop(){
        if(this.Head === null){return undefined;}

        var Popped = this.Tail;
        if(this.Length === 1){
            this.Head = null; this.tail = null;
        }else{
            this.Tail = Popped.Prev;
            this.Tail.Next = null;
            Popped.Prev = null;
        }

        this.Length--;
        return Popped;
    }

    RemoveHead(){
        if(this.Length === 0){return undefined;}

        var OldHead = this.Head;
        if(this.Length === 1){
            this.Head = null;
            this.Tail = null;
        }else{
            this.Head = OldHead.Next;
            this.Head.Prev = null;
            OldHead.Next = null;
        }

        this.Length--;
        return OldHead;
    }

    InsertHead(Value){
        var NewHead = new Node(Value);

        if(this.Length === 0){
            this.Head = NewHead;
            this.Tail = NewHead;
        }else{
            this.Head.Prev = NewHead;
            NewHead.Next = this.Head;
            this.Head = NewHead;
        }

        this.Length++;
        return this;
    }

    Get(Index){
        if(Index < 0 || Index >= this.Length){return null;}

        var Current, Count;
        if(Index <= (this.Length / 2)){
            Count = 0;
            Current = this.Head;

            while(Count < Index){
                Current = Current.Next;
                Count++;
            }
        }else{
            Count = this.Length - 1;
            Current = this.Tail;

            while(Count > Index){
                Current = Current.Prev;
                Count--;
            }
        }

        return Current;
    }

    Set(Index, Value){
        var Search = this.Get(Index);
        if(Search === null){ return false; }
            
        Search.Value = Value;
        return true;
    }

    InsertAfter(Index, Value){
        if(Index < 0 || Index > this.Length) {return false;}
        if(Index === 0){return !!this.InsertHead(Value);}
        if(Index === this.Length){return !!this.Push(Value);}

        var NewNode = new Node(Value);
        var Found = this.Get(Index);

        NewNode.Next = Found.Next;
        NewNode.Prev = Found;

        if(Found.Next !== null){
            Found.Next.Prev = NewNode;
        }

        Found.Next = NewNode;
        this.Length++;

        return true;
    }

    RemoveNode(Index){
        if(Index < 0 || Index >= this.Length){return undefined;}
        if(Index === 0){return this.RemoveHead();}
        if(Index === this.Length - 1){return this.pop();}

        var Remove = this.Get(Index);
        var Temp = Remove;

        if(Remove.Prev !== null){
            Remove.Prev.Next = Temp.Next;
        }

        if(Remove.Next !== null){
            Remove.Next.Prev = Temp.Prev;
        }

        Remove.Next = null;
        Remove.Prev = null;

        return Remove;
    }
}

var List = new DLL();
for(var i=0; i<10; i++){
    List.push(i);
}

console.log(List.Get(6));
console.log(List.InsertAfter(3, 1000));
