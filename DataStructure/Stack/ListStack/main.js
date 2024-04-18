class Node{
    constructor(Value){
        this.Value = Value;
        this.Next = null;
    }
}

class Stack{
    constructor(){
        this.Front = null;
        this.Rear = null;
        this.Size = 0;
    }

    push(Value){
        var NewNode = new Node(Value);

        if(!this.Front){
            this.Front = NewNode;
            this.Rear = NewNode;
        }else{
            var Temp = this.Front;

            this.Front = NewNode;
            this.Front.Next = Temp;
        }

        return ++this.Size;
    }

    pop(){
        if(!this.first){return null;}

        var Temp = this.Front;
        if(this.Front == this.Rear){
            this.Rear = null;
        }

        this.Front = this.Front.Next;
        return Temp.Value;
    }
}

var MyStack = new Stack();
MyStack.push("Oh My Stack");
MyStack.push("Oh My Posh");
console.log(MyStack);
